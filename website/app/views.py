from flask import Blueprint, Flask, jsonify, request
from .models import Car
import time

flask_app = Flask(__name__)
cars_blueprint = Blueprint(
    'cars', __name__,
    template_folder="templates"
)
@cars_blueprint.route('/dump', methods=["POST"])
def serve():
    req_data = request.get_json()
    cars = Car.query
    if req_data["Price"]:
        cars = cars.filter(Car.max_price <= req_data["Price"][1])\
                   .filter(Car.min_price >= req_data["Price"][0])
    if req_data["Type"]:
        cars = cars.filter_by(type=req_data["Type"])
    if req_data["Seats"]:
        cars = cars.filter(Car.seats.between(req_data["Seats"][0], req_data["Seats"][1]))
    carList = [car.serialize() for car in cars]
    return jsonify(carList)

@cars_blueprint.route('/available', methods=["POST"])
def get_available():
    req_data = request.get_json()
    cars = Car.query
    if req_data["Price"]:
        cars = cars.filter(Car.max_price <= req_data["Price"][1])\
                   .filter(Car.min_price >= req_data["Price"][0])
    if req_data["Type"]:
        cars = cars.filter_by(type=req_data["Type"])
    if req_data["Seats"]:
        cars = cars.filter(Car.seats.between(req_data["Seats"][0], req_data["Seats"][1]))
    booleanList = []
    for i in req_data["futureRound"]:
        if i[0] == "Type":
            if (cars.filter_by(type = i[2]).count() > 0):
                booleanList.append(True)
            else:
                booleanList.append(False)
        elif i[0] == "Price":
            if (cars.filter(Car.max_price <= i[2][1])\
                    .filter(Car.min_price >= i[2][0]).count() > 0):
                booleanList.append(True)
            else:
                booleanList.append(False)
        elif i[0] == "Seats":
            if (cars.filter(Car.seats.between(i[2][0], i[2][1])).count() > 0):
                booleanList.append(True)
            else:
                booleanList.append(False)

    print(booleanList)
    return jsonify(booleanList)
 
