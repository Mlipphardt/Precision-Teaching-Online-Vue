from database import db

class Client(db.Model):
    id          = db.Column(db.Integer, primary_key=True)
    initials    = db.Column(db.String(2), nullable=False)
    # programs    = db.relationship('Program', backref='client')
    user_id     = db.Column(db.String(50), nullable=False)

    def __init__(self, id, initials, user_id):
        self.id
        self.initials = initials
        self.user_id  = user_id

    def json(self):
        return {
            "id":       self.id,
            "initials": self.initials,
            "user_id":  self.user_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

