from database import db

class Resource(db.Model):
    id              = db.Column(db.Integer, primary_key=True)
    image           = db.Column(db.String(256), nullable=False)
    program_id      = db.Column(db.Integer, db.ForeignKey('program.id'), nullable=False)

    def __init__(self, image, program_id):
        self.id
        self.image          = image
        self.program_id     = program_id

    def json(self):
        return {
            "id":         self.id,
            "image":      self.image,
            "program_id": self.program_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

