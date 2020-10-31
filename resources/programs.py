from flask_restful import Resource
from models.Programs import ProgramModel

class Programs(Resource):
    def get(self):
        return 'Hello, world!'