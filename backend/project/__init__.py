from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, static_folder="../client-app/build")
db_path = os.path.join(os.path.dirname("backend/project/__init__.py"), 'production.db')
db_uri = 'sqlite:///{}'.format(db_path)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
db = SQLAlchemy(app)

from backend.project.cars.views import cars_blueprint
app.register_blueprint(cars_blueprint)
