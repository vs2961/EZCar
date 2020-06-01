from flask import Blueprint, Flask, jsonify, request
from .models import User
from app import user_db

flask_app = Flask(__name__)
users_blueprint = Blueprint(
        'users', __name__,
        template_folder="templates"
        )

@users_blueprint.route('/login', methods=["POST"])
def serve():
    req_data = request.get_json()
    users = User.query
    if users.filter_by(username=req_data["username"]).count > 0:
        return "Invalid username."
    user = new User(req_data["username"], req_data["password"])
    user_db.session.add(user)
    u



    
@users_blueprint.route('/signup', methods=["POST"])
def signup():
    req_data = request.get_json()


