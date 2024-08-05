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
    birthDate = db.Column(db.DateTime, unique=True, nullable=True)
    country = db.Column(db.String(120), unique=True, nullable=True)
    postalCode = db.Column(db.String(120), unique=True, nullable=True)
  

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
            
            # do not serialize the password, its a security breach
        }
    
class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(150), nullable=False)
    itemName = db.Column(db.String(150), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('user.id') ,nullable=False)


    def __repr__(self):
        return f'<Favorite {self.itemName}>'

    def serialize(self):
        return {
            "id": self.id,
            "type": self.type,
            "itemName": self.itemName,
            "userId": self.userId,
        }