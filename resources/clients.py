from flask_restful import Resource
from models.client import ClientModel

class Clients(Resource):
    def get(self):
        return 'Hello, world!'