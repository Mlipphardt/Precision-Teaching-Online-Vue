from database import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email_address = db.Column(db.String(300), unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)