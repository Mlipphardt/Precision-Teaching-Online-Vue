from database import db

class Program(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    measure = db.Column(db.String(50), nullable=False)

def __init__(self, id, name, measure):
    self.id
    self.measure = measure

def json(self):
    return {
        "id":      self.id,
        "name":    self.name,
        "measure": self.measure
    }

def save(self):
    db.session.add(self)
    db.session.commit()

def delete(self):
    db.session.delete(self)
    db.session.commit()

