from flask_restful import Resource, reqparse
from models.client import Client as ClientModel

class Clients(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('initials', type=str, location="json")
    parser.add_argument('user_id', type=str, location="json")

    def get(self):
        return 'Hello, world!'

    def post(self):
        data = Clients.parser.parse_args()
        try:
            initials = data['initials']
            user_id = data['user_id']
            item = ClientModel( None, initials, user_id)
            item.save()
            return data

        except Exception as err: 
            return str(err)

class ClientsByUser(Resource):

    def get(self, user_id):
        #return user_id
        return [client.json() for client in ClientModel.query.filter_by(user_id=user_id).all()]
