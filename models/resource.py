from database import db

class Resource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(256), nullable=False)

def __init__(self, image):
    self.id
    self.image = image

def json(self):
    return {
        "id":    self.id,
        "image": self.image,
    }

def save(self):
    db.session.add(self)
    db.session.commit()

def delete(self):
    db.session.delete(self)
    db.session.commit()

