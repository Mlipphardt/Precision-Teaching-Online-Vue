from flask_restful import Resource, reqparse
from models.resource import Resource as ResourceModel

class Resources(Resource):
    parser = reqparse.RequestParser()

    def get(self):
        return 'Hello, world!'

    def post(self):
        data = Resources.parser.parse_args()
        try:
            image      = data['image']
            program_id = data['program_id']
            return data

        except Exception as err:
            return str(err)

class ResourcesByProgram(Resource):
    def get(self, program_id):
        return [resource.json() for resource in ResourceModel.query.filter_by(program_id=program_id).all()]


# from flask_restful import Resource, reqparse
# from models.client import Client as ClientModel

# class Clients(Resource):
#     parser = reqparse.RequestParser()
#     parser.add_argument('initials', type=str, location="json")
#     parser.add_argument('user_id', type=str, location="json")

#     def get(self):
#         return 'Hello, world!'

#     def post(self):
#         data = Clients.parser.parse_args()
#         try:
#             initials = data['initials']
#             user_id = data['user_id']
#             item = ClientModel( None, initials, user_id)
#             item.save()
#             return data

#         except Exception as err: 
#             return str(err)

# class ClientsByReader(Resource):

#     def get(self, user_id):
#         #return user_id
#         return [client.json() for client in ClientModel.query.filter_by(user_id=user_id).all()]
