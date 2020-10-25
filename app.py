from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from database import db, initialize_db
from models.user import User
from models.client import Client
from models.program import Program
from models.resource import Resource

from resources.tests import Test

app = Flask(__name__)

app.config.from_object('config.Dev')

engine = create_engine('mysql+pymysql://root:password@localhost:3306/ptodb')

db.init_app(app)

with app.app_context():
    db.create_all()

api = Api(app)

api.add_resource(Test, '/testing')

@app.route('/')
def index():
    return 'testing'

@app.route('/users')
def users():
    return 'user page'

@app.route('/moves')
def moves():
    return 'Power moves only.'

if __name__ == '__main__':
    app.run(debug = True)