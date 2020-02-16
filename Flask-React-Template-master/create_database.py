from templates import app
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)


class Car(db.Model):
    id = db.column(db.Integer, primary_key=True)
    username = db.column(db.String, nullable=False, unique=True)
    price = db.column(db.Float, nullable=False)
    mpg = db.column(db.Integer, nullable=False)
    horsepower = db.column(db.Integer, nullable=False)
    rating = db.column(db.Float, nullable=True)

    def __init__(self, name, rating, mpg, horsepower, price):
        self.name = name
        self.price = price
        self.mpg = mpg
        self.horsepower = horsepower
        self.rating = rating

    def __repr__(self):
        return "ID #{}: NAME: {}. PRICE: {}. MPG: {}. HORSEPOWER: {}. RATING: {}.".format(self.id, self.name, self.price, self.mpg, self.horsepower, self.rating)

