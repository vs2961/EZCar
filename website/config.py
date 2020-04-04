import os

# default config


class BaseConfig(object):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///production.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = True


class DevelopmentConfig(BaseConfig):
    DEBUG = True


class ProductionConfig(BaseConfig):
    DEBUG = False
