from flask import Blueprint, send_from_directory, Flask, render_template, jsonify
from .models import Car
import os
import time

flask_app = Flask(__name__)
cars_blueprint = Blueprint(
    'cars', __name__,
    template_folder="templates"
)
@cars_blueprint.route('/dump')
def serve():
    cars = Car.query.all()
    # print(car.to_json())
    carList = [car.serialize() for car in cars]
    return jsonify(carList)
