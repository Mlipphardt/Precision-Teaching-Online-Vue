import os

class Dev(object):

    ### Database
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:password@localhost:3306/ptodb"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_HOST = "localhost"
    SQLALCHEMY_PORT = "3306"
    SQLALCHEMY_DATABASE_NAME = "ptodb"
    SQLALCHEMY_USERNAME = 'root'
    SQLALCHEMY_PASSWORD = 'password'

    ###JWT
    SECRET = "developersecretonly"
