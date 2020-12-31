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

    ###S3
    ACCESS_KEY="AKIARW3HUKTTYFDTB254"
    SECRET_ACCESS_KEY="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"