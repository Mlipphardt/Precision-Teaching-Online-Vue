from database import db

class Program(db.Model):
    id          = db.Column(db.Integer, primary_key=True)
    name        = db.Column(db.String(50), nullable=False)
    measure     = db.Column(db.String(50), nullable=False)
    resources   = db.relationship('Resource', backref="program")
    trials      = db.relationship('Trial', backref='program')
    client_id   = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)

def __init__(self, id, name, measure):
    self.id
    self.measure = measure

def json(self):
    return {
        "id":        self.id,
        "name":      self.name,
        "measure":   self.measure
        "client_id": self.client_id
    }

def save(self):
    db.session.add(self)
    db.session.commit()

def delete(self):
    db.session.delete(self)
    db.session.commit()

