"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signUp', methods=['POST'])
def register():
    response_body = request.json
    user_query = User.query.filter_by(email = response_body["email"]).first()
    if user_query is None:
        create_user = User(email = response_body["email"], password = response_body["password"], is_active = response_body["is_active"])
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

