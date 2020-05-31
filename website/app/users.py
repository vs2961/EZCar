from flask import Blueprint, Flask, jsonify, request
from .models import Car
import time

flask_app = Flask(__name__)
users_blueprint = Blueprint(
        'cars', __name__,
        template_folder="templates"
        )
@users_blueprint.route('/login', methods=["POST"])
def serve():
    req_data = request.get_json()

    
@users_blueprint.route('/signup', methods=["POST"])
def signup():
    req_data = request.get_json()


