from flask_restful import Resource, reqparse
from models.trial import Trial as TrialModel

class Trial(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('client_id')
    parser.add_argument('program_id')
    parser.add_argument('score')
    parser.add_argument('time')


    def get(self):
        return 'Hello, world!'

    def post(self):
        data = Trial.parser.parse_args()
        try:
            time       = data['time']
            score      = data['score']
            program_id = data['program_id']
            client_id  = data['client_id']
            item = TrialModel(None, score, time, program_id, client_id)
            item.save()
            return data

        except Exception as err:
            return str(err)

class TrialsByProgram(Resource):
    def get(self, program_id):
        return [trial.json() for trial in TrialModel.query.filter_by(program_id=program_id).all()]

class TrialsByClient(Resource):
    def get(self, client_id):
        return [trial.json() for trial in TrialModel.query.filter_by(client_id=client_id).all()]