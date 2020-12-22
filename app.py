from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from database import db, initialize_db
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin

#Models
from models.user import User as UserModel
from models.client import Client as ClientModel
from models.program import Program as ProgramModel
from models.resource import Resource as ResourceModel
from models.trial import Trial as TrialModel

#Resources
from resources.users import User

app = Flask(__name__)

CORS(app)

app.config.from_object('config.Dev')

engine = create_engine('mysql+pymysql://root:password@localhost:3306/ptodb')

db.init_app(app)

bcrypt = Bcrypt(app)

with app.app_context():
    db.create_all()

api = Api(app)

#Resources
api.add_resource(User, "/users")


#Login and testing
@app.route('/')
def index():
    return 'testing'

@app.route('/moves')
def moves():
    return 'Power moves only.'

@app.route('/register', methods=['POST'])
#@cross_origin(origin='*')
def register():
    print("Registering")

    return "ok"
    # if not request.json:
    #     return {"Error": "User information incorrect."}, 400

    # email_address = request.json["email_address"]
    # password = bcrypt.generate_password_hash(request.json["password"]).decode('utf-8')
    # position = request.json["position"]
    # response = jsonify(request.json)

    # try:
    #     item = UserModel( None, email_address, password, position)
    #     item.save()
    #     return 201


    # except Exception as err: 
    #     return str(err)



@app.route('/login', methods=['POST'])
def login():
    if not request.json:
        return {"Error": "User information incorrect."}, 400

    email_address = request.json['email_address']
    password = request.json['password']

    user = UserModel.find_by_email(email_address)
    if not user:
        return 'Password or username is incorrect', 401
    
    else: 

        if bcrypt.check_password_hash(user.password, password):
            return 'success', 200
        else:
            return 'Password incorrect.', 401


if __name__ == '__main__':
    app.run(debug = True)