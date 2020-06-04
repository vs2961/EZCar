from flask import Blueprint, Flask, jsonify, request
from .models import User, Car
from app import db

flask_app = Flask(__name__)
users_blueprint = Blueprint(
        'users', __name__,
        template_folder="templates"
        )

@users_blueprint.route('/login', methods=["POST"])
def serve():
    req_data = request.get_json()
    users = User.query
    if users.filter_by(username=req_data["username"]).count() > 0:
        if users.filter_by(username=req_data["username"]).first().password == req_data["password"]:
            return jsonify({"id":users.filter_by(username=req_data["username"]).first().id, "username":req_data["username"]})
        return jsonify({"id": "Invalid password"})
    return jsonify({"id": "Invalid user"})

@users_blueprint.route('/signup', methods=["POST"])
def signup():
    req_data = request.get_json()
    users = User.query
    if users.filter_by(username=req_data["username"]).count() > 0:
        return jsonify({"status":"Invalid username."})
    user = User(req_data["username"], req_data["password"])
    db.session.add(user)
    db.session.commit()
    db.session.close()
    return jsonify({"status": "Added user"})

@users_blueprint.route('/add_car', methods=["POST"])
def add_car():
    req_data = request.get_json()
    users = User.query
    cars = Car.query
    my_user = users.get(req_data["user_id"])
    print(my_user.cars)
    if str(req_data["car_id"]) not in my_user.cars.strip(",").split(",") and len(my_user.cars.strip(",").split(",")) < 3:
        db.session.query(User).filter_by(id=req_data["user_id"]).\
                    update({User.cars: my_user.cars + req_data["car_id"] + ","})
        db.session.commit()
        return jsonify({"status": True})
    return jsonify({"status": False})

@users_blueprint.route('/get_cars', methods=["POST"])
def get_cars():
    req_data = request.get_json()
    users = User.query
    cars = Car.query
    my_user = users.get(req_data["user_id"])
    cars_list = my_user.cars.strip(",").split(",")
    for ind, car in enumerate(cars_list):
        cars_list[ind] = cars.get(car)
    cars_list = [car.serialize() for car in cars_list]
    return jsonify(cars_list)

@users_blueprint.route('/del_car', methods=["POST"])
def del_cars():
    req_data = request.get_json()
    users = User.query
    cars = Car.query
    my_user = users.get(req_data["user_id"])
    cars_list = my_user.cars.strip(",").split(",")
    cars_list.remove(str(req_data["car_id"]))
    db.session.query(User).filter_by(id=req_data["user_id"]).\
            update({User.cars: ",".join(cars_list) + ","})
    db.session.commit()
    return jsonify({"status": True})
