from flask_restful import Resource
from models.Resource import ResourceModel

class Resources(Resource):
    def get(self):
        return 'Hello, world!'