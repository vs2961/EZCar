from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlathanor import FlaskBaseModel, initialize_flask_sqlathanor
import os

app = Flask(__name__, instance_relative_config=True)
app.config.from_object("config.DevelopmentConfig")
db = SQLAlchemy(app, model_class=FlaskBaseModel)
db = initialize_flask_sqlathanor(db)


from .views import cars_blueprint
from .users import users_blueprint

app.register_blueprint(cars_blueprint)
app.register_blueprint(users_blueprint)
