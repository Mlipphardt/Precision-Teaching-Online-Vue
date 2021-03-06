from database import db

class Trial(db.Model):
    id              = db.Column(db.Integer, primary_key=True)
    score           = db.Column(db.String(50), nullable=False)
    time           = db.Column(db.String(50), nullable=False)
    program_id      = db.Column(db.String(50), nullable=False)
    client_id       = db.Column(db.String(50), nullable=False)

    def __init__(self, id, score, time, program_id, client_id):
        self.id
        self.score          = score
        self.time           = time
        self.program_id     = program_id
        self.client_id      = client_id

    def json(self):
        return {
            "id":           self.id,
            "score":        self.score,
            "time":         self.time,
            "program_id":   self.program_id,
            "client_id":    self.client_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

