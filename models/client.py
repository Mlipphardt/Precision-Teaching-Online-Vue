from database import db

class Client(db.Model):
    id          = db.Column(db.Integer, primary_key=True)
    initials    = db.Column(db.String(2), nullable=False)
    programs    = db.relationship('Program', backref='client')

    def __init__(self, id, initials):
        self.id
        self.initials = initials

    def json(self):
        return {
            "id":       self.id,
            "initials": self.initials,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

