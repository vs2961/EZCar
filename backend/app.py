import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, send_from_directory

db_path = os.path.join(os.path.dirname("models.py"), 'production.db')
db_uri = 'sqlite:///{}'.format(db_path)
app = Flask(__name__, static_folder="./client-app/build")
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
db = SQLAlchemy(app)
print(db_uri)

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
