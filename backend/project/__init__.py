from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, static_folder="../client-app/build")
# db_path = os.path.join(os.path.dirname("./__init__.py"), 'production.db')
# db_uri = 'sqlite:///{}'.format(db_path)
# print(db_uri)
# app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config.from_object("config.DevelopmentConfig")
db = SQLAlchemy(app)


from .cars.views import cars_blueprint
app.register_blueprint(cars_blueprint)
