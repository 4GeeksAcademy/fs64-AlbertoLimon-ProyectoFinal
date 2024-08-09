"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorite
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from datetime import timedelta

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register_user():
    response_body = request.json
    user_query = User.query.filter_by(email = response_body["email"]).first()
    if user_query is None:
        create_user = User(firstName = response_body["firstName"], lastName = response_body["lastName"], userName = response_body["userName"], email = response_body["email"], password = response_body["password"])
        db.session.add(create_user)
        db.session.commit()
        response = {
            "msg ": "Usuario creado con éxito"
        }
        return jsonify(response), 200
    else:
        response = {
            "msg ": "Usuario ya existe"
        }
        return jsonify(response), 404


@api.route('/login', methods=['POST'])
def login_user():
    request_body = request.json
    email = request_body.get("email")
    password = request_body.get("password")
    print(request_body)
    user_login = User.query.filter_by(email = request_body["email"]).first()
    if user_login is None:
        response_body = {
             "msg": "Usuario no existe"
            }
        return jsonify(response_body), 404
    elif email != user_login.email or password != user_login.password:
        return jsonify({"msg": "Usuario o contraseña incorrecta"}), 404
    else:
        access_token = create_access_token(identity=user_login.id, fresh=timedelta(minutes=20))
        return jsonify({ "msg": "Inicio se sesión correcto!" ,"token": access_token, "user_id": user_login.id })


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@api.route('/users', methods=['PUT'])
@jwt_required()
def update_user():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user:
        data = request.json
        
        user.firstName = data.get('firstName', user.firstName)
        user.lastName = data.get('lastName', user.lastName)
        user.userName = data.get('userName', user.userName)
        user.email = data.get('email', user.email)
        user.password = data.get('password', user.password)
        user.phone = data.get('phone', user.phone)
        user.country = data.get('country', user.country)
        user.postalCode = data.get('postalCode', user.postalCode)

        db.session.commit()
        return jsonify({'msg': 'Información de usuario actualizada!'}), 200
    else:
        return jsonify({'msg': 'Usuario no encontrado!'}), 404
    
@api.route('/users', methods=['DELETE'])
@jwt_required()
def delete_user():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    print(user)
    if user:
        # Eliminar los favoritos asociados al usuario
        Favorite.query.filter_by(userId=current_user_id).delete()
        db.session.delete(user)
        db.session.commit()
        return jsonify({"msg": "Usuario y sus favoritos eliminados correctamente"}), 200
    else:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    
@api.route('/users', methods=['GET'])
@jwt_required()
def get_user():

    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if user:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({"msg": "Usuario no encontrado"}), 404


@api.route('/favorites', methods=['GET'])
@jwt_required()
def get_favorites():

    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    favorites = Favorite.query.filter_by(userId=user.id).all()
    favorite_list = [favorite.serialize() for favorite in favorites]
    
    return jsonify({'favorites': favorite_list}), 200

@api.route('/favorites', methods=['POST'])
@jwt_required()
def create_favorite():

    data = request.json

    current_user_id = get_jwt_identity()

    favorite_query = Favorite.query.filter_by(itemName = data["itemName"], type = data["type"], userId = current_user_id).first()

    if favorite_query is None:
        create_favorite = Favorite(type = data["type"], apiId = data["apiId"], itemName = data["itemName"], image = data["image"], userId = current_user_id)
        db.session.add(create_favorite)
        db.session.commit()
        return jsonify({"msg": "Favorito añadido correctamente"}), 200
    else:
        return jsonify({"msg": "Favorito ya existe"}), 404
    
@api.route('/favorites/<int:fav_id>', methods=['DELETE'])
@jwt_required()
def delete_favorite(fav_id):

    current_user_id = get_jwt_identity()

    favorite = Favorite.query.filter_by(id = fav_id, userId = current_user_id).first()

    if favorite:
        db.session.delete(favorite)
        db.session.commit()
        return jsonify({'msg': 'Favorito eliminado'}), 200
    else:
        return jsonify({'msg': 'Favorito no encontrado'}), 404