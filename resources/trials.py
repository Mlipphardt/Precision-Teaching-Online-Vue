from flask_restful import Resource, reqparse
from models.trial import Trial as TrialModel

class Trial(Resource):
    parser = reqparse.RequestParser()

    def get(self):
        return 'Hello, world!'

    def post(self):
        data = Trial.parser.parse_args()
        try:
            image      = data['image']
            program_id = data['program_id']
            return data

        except Exception as err:
            return str(err)

class TrialsByProgram(Resource):
    def get(self, program_id):
        return [trial.json() for trial in TrialModel.query.filter_by(program_id=program_id).all()]

class TrialsByClient(Resource):
    def get(self, client_id):
        return [trial.json() for trial in TrialModel.query.filter_by(client_id=client_id).all()]