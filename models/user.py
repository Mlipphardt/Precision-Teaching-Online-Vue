from database import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email_address = db.Column(db.String(300), unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)
    position = db.Column(db.String(100), nullable=False) #RBT, BCBA, BCaBA, Speech therapist, etc.

def __init__(self, id, email_address, password, position):
    self.id
    self.email_address = email_address
    self.password      = password
    self.position      = position

def json(self):
    return {
        "id":            self.id,
        "email_address": self.email_address,
        "password":      self.password,
        "position":      self.position
    }

def save(self):
    db.session.add(self)
    db.session.commit()

def delete(self):
    db.session.delete(self)
    db.session.commit()

