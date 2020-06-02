from flask import Blueprint, Flask, jsonify, request
from .models import User
from app import user_db
from app import db

flask_app = Flask(__name__)
users_blueprint = Blueprint(
        'users', __name__,
        template_folder="templates"
        )

@users_blueprint.route('/login', methods=["POST"])
def serve():
    req_data = request.get_json()
    if users.filter_by(username=req_data["username"]).count > 0:
        if users.filter_by(username=req_data["username"]).all[0].password == req_data["password"]:
            return jsonify({"id":users.filter_by(username=req_data["username"]).all[0].id})
        return jsonify({"id": "Invalid password"})
    return jsonify({"id": "Invalid user"})

@users_blueprint.route('/signup', methods=["POST"])
def signup():
    req_data = request.get_json()
    users = User.query
    if users.filter_by(username=req_data["username"]).count > 0:
        return jsonify({status:"Invalid username."})
    user = User(req_data["username"], req_data["password"])
    user_db.session.add(user)
    user_db.session.commit()
    return jsonify({"status": "Added user"})

@users_blueprint.route('/add_car', methods=["POST"])
def add_car():
    req_data = request.get_json()
    users = User.query
    cars = Car.query
    add_car = cars.get(req_data["id"])
    my_user = users.get(req_data["car_id"])
    if add_car not in my_user.cars.split(","):
        my_user.update({User.cars: my_user.cars + add_car + ","})
        return jsonify({"status": True})
    return jsonify({"status": False})

@users_blueprint.route('/get_cars', methods=["POST"])
def get_cars():
    req_data = request.get_json()
    users = User.query
    cars = Car.query
    my_user = users.get(req_data["id"])
    cars_list = my_user.cars.rstrip(",").split(",")
    for ind, car in enumerate(cars_list):
        cars_list[ind] = cars.get(car)
    return jsonify(cars_list)

@users_blueprint.route('/del_car', methods=["POST"])
def del_cars():
    req_data = request.get_json()
    users = User.query
    cars = Car.query
    my_user = users.get(req_data["id"])
    cars_list = my_user.cars.rstrip(",").split(",")
    cars_list.remove(req_data["car_id"])
    my_user.update({User.cars: cars_list.join(",") + ","})
    return jsonify({"status": True})
