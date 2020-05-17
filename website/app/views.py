from flask import Blueprint, send_from_directory, Flask, render_template, jsonify, request
from .models import Car
import os
import time

flask_app = Flask(__name__)
cars_blueprint = Blueprint(
    'cars', __name__,
    template_folder="templates"
)
@cars_blueprint.route('/dump', methods=["GET", "POST"])
def serve():
    req_data = request.get_json()
    print(req_data)
    cars = Car.query.all()
    # print(car.to_json()
    carList = [car.serialize() for car in cars]
    return jsonify(carList)

