from flask_restful import Resource
from models.User import UserModel

class User(Resource):

    def get(self):
        return 'Returning users!'