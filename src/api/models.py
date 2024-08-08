from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(200), unique=True, nullable=False)
    lastName = db.Column(db.String(200), unique=True, nullable=False)
    userName = db.Column(db.String(200), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=True)
    birthDate = db.Column(db.Date, unique=False, nullable=True)
    country = db.Column(db.String(120), unique=False, nullable=True)
    postalCode = db.Column(db.String(120), unique=False, nullable=True)
    favorites = db.relationship('Favorite', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.userName}, {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "userName": self.userName,
            "email": self.email,
            "phone": self.phone,
            "birthDate": self.birthDate,
            "country": self.country,
            "postalCode": self.postalCode,
            "favorites": [favorite.serialize() for favorite in self.favorites]
            # do not serialize the password, its a security breach
        }
    
class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(150), nullable=False)
    apiId = db.Column(db.Integer,unique=False, nullable=False)
    itemName = db.Column(db.String(150), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('user.id') ,nullable=False)


    def __repr__(self):
        return f'<Favorite {self.itemName}>'

    def serialize(self):
        return {
            "id": self.id,
            "type": self.type,
            "apiId" : self.apiId,
            "itemName": self.itemName,
            "userId": self.userId,
        }