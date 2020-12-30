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