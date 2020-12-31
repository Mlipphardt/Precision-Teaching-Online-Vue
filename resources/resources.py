from flask_restful import Resource, reqparse
from models.resource import Resource as ResourceModel
from flask import current_app

import os
import boto3

client= boto3.client('s3', aws_access_key_id = current_app.config['ACCESS_KEY'], aws_secret_access_key=current_app.config['SECRET_ACCESS_KEY'])

class Resources(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('image', location="files")
    #parser.add_argument('program_id', type=str, location="json")

    def get(self):
        return 'Hello, world!'

    def post(self):
        data = Resources.parser.parse_args()
        try: 
#            print(data)
            #print(request.form)
            image      = data['image']
            #program_id = data['program_id']
            print(image)
            upload_file_bucket="precisionteachingonline"
            return data

        except Exception as err:
            return str(err)

class ResourcesByProgram(Resource):
    def get(self, program_id):
        return [resource.json() for resource in ResourceModel.query.filter_by(program_id=program_id).all()]