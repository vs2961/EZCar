from flask_sqlalchemy import SQLAlchemy
import os
from backend.project import db


class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    price = db.Column(db.Float, nullable=False)
    mpg = db.Column(db.Integer, nullable=False)
    horsepower = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Float, nullable=True)

    def __init__(self, name, rating, mpg, horsepower, price):
        self.name = name
        self.price = price
        self.mpg = mpg
        self.horsepower = horsepower
        self.rating = rating

    def __repr__(self):
        return "ID #{}: NAME: {}. PRICE: {}. MPG: {}. HORSEPOWER: {}. RATING: {}.".format(self.id, self.name, self.price, self.mpg, self.horsepower, self.rating)