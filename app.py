from flask import Flask
from flask import request
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
    json_request = request.get_json()
    
    print(json_request)
    #return request.get_json()

    email_address = json_request["email_address"]
    password = bcrypt.generate_password_hash(json_request["password"]).decode('utf-8')
    position = json_request["position"]

    try:
        item = UserModel( None, email_address, password, position)
        item.save()
        return json_request


    except Exception as err: 
        return str(err)



@app.route('/login', methods=['POST'])
def login():
    json_request = request.get_json()
    print(json_request)

    email_address = json_request['email_address']
    password = json_request['password']

    user = UserModel.query.filter_by(email_address=email_address).first()

    if not user:
        return 'Failed.'
    if bcrypt.check_password_hash(user.password, password):
        return 'OK'
    else:
        return 'Password incorrect.'


if __name__ == '__main__':
    app.run(debug = True)