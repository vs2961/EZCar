from flask import Blueprint, send_from_directory, Flask, render_template, jsonify
from .models import Car
import os
import time

flask_app = Flask(__name__)
cars_blueprint = Blueprint(
    'cars', __name__,
    template_folder="templates"
)
@cars_blueprint.route('/cars')
def serve():
    car = Car.query.all()
    car_list = "{}".format(car)
    return jsonify({'cars': car_list});
