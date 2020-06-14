from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from sqlathanor import FlaskBaseModel, initialize_flask_sqlathanor
import os

app = Flask(__name__, instance_relative_config=True, static_folder="../client/build")
app.config.from_object("config.DevelopmentConfig")
db = SQLAlchemy(app, model_class=FlaskBaseModel)
db = initialize_flask_sqlathanor(db)


from .views import cars_blueprint
from .users import users_blueprint

app.register_blueprint(cars_blueprint)
app.register_blueprint(users_blueprint)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')