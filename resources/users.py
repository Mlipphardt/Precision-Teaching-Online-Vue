from flask_restful import Resource
from flask import request
from flask import jsonify
from models.user import User as UserModel

class User(Resource):

    def get(self):
        
        return 'Returning users!'

    def post(self):
        if not request.json:
            return {"Error": "User information incorrect."}, 400

        email_address = request.json["email_address"]
        password = request.json["password"]
        position = request.json["position"]
        response = jsonify(request.json)

        try:
            item = UserModel( None, email_address, password, position)
            item.save()
            return 201


        except Exception as err: 
            return str(err)

