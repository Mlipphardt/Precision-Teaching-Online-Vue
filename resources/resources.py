from flask_restful import Resource, reqparse
from models.resource import Resource as ResourceModel
from flask import current_app
import werkzeug

import os
import boto3

client= boto3.client('s3', aws_access_key_id = current_app.config['ACCESS_KEY'], aws_secret_access_key=current_app.config['SECRET_ACCESS_KEY'])

class Resources(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('image', type=werkzeug.datastructures.FileStorage, location="files")
    parser.add_argument('program_id')
    #parser.add_argument('program_id', type=str, location="json")

    def get(self):
        return 'Hello, world!'

    def post(self):
        data = Resources.parser.parse_args()
        try: 
            s3 = boto3.resource('s3', aws_access_key_id = current_app.config['ACCESS_KEY'], aws_secret_access_key=current_app.config['SECRET_ACCESS_KEY'])
            #print(request.form)
            image      = data['image']
            program_id = data['program_id']
            print(image.filename)
            print(program_id)
            upload_file_bucket="precisionteachingonline"
            #upload_file_key = image.filename
            resource = ResourceModel(None, image.filename, program_id)
            resource.save()
            print(resource.id)
            print("um")
            # program = ProgramModel(None, name, measure, client_id)
            # program.save()
            #s3.Bucket(upload_file_bucket).put_object(Key=upload_file_key, Body=data['image'])
            #client.upload_file(image.filename, upload_file_bucket, upload_file_key)
            return "OK"

        except Exception as err:
            #return str(err)
            print(str(err))
            return str(err)

class ResourcesByProgram(Resource):
    def get(self, program_id):
        return [resource.json() for resource in ResourceModel.query.filter_by(program_id=program_id).all()]