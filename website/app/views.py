from flask import Blueprint, send_from_directory, Flask, render_template, jsonify, request
from .models import Car
import os
import time

flask_app = Flask(__name__)
cars_blueprint = Blueprint(
    'cars', __name__,
    template_folder="templates"
)
@cars_blueprint.route('/dump', methods=["POST"])
def serve():
    req_data = request.get_json()
    print(req_data)
    cars = Car.query.filter(Car.max_price <= req_data["Price"][1])\
                    .filter_by(type=req_data["Type"])\
                    .filter(Car.min_price >= req_data["Price"][0])\
                    .filter(Car.seats.between(req_data["Seat"][0], req_data["Seat"][1]))
    carList = [car.serialize() for car in cars]
    return jsonify(carList)
