from flask_restful import Resource, reqparse
from models.program import Program as ProgramModel

class Programs(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str, location="json")
    parser.add_argument('measure', type=str, location="json")
    parser.add_argument('client_id', type=str, location="json")

    def get(self):
        return 'Hello, world!'

    def post(self):
        data = Programs.parser.parse_args()
        try:
            name      = data['name']
            measure   = data['measure']
            client_id = data['client_id']
            program = ProgramModel(None, name, measure, client_id)
            program.save()
            return data
        
        except Exception as err:
            return str(err)

class ProgramsByClient(Resource):
    def get(self):
        return [program.json() for program in ProgramModel.query.filter_by(client_id=client_id).all()]
