from flask import Blueprint, send_from_directory
from backend.project.models import Car
from backend.project import app
import os

cars_blueprint = Blueprint(
    'cars', __name__,
    template_folder="templates"
)

@cars_blueprint.route("/cars")
@cars_blueprint.route('/', defaults={'path': ''})
@cars_blueprint.route('/<path:path>')
def serve(path):
    print(Car.query.all())
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

