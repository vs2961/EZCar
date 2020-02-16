from flask import Flask
app = Flask(__name__,
 	static_folder = './public',
 	template_folder="./static")

from templates.IDLEMen.views import idlemen_blueprint
# register the blueprints
app.register_blueprint(idlemen_blueprint)
