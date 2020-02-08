from flask import render_template, Blueprint
idlemen_blueprint = Blueprint('hello',__name__)

@idlemen_blueprint.route('/')
@idlemen_blueprint.route('/hello')
def index():
	return render_template("index.html")
