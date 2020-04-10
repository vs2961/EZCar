from flask import Blueprint, send_from_directory, render_template
from .models import Car
import os

cars_blueprint = Blueprint(
    'cars', __name__,
    template_folder="templates"
)

@cars_blueprint.route('/cars')
def serve():
    car = Car.query.all()
    return render_template("hello");
