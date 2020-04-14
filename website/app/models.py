from flask_sqlalchemy import SQLAlchemy
import os
from app import db


class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False, unique=False)
    rating = db.Column(db.Float, nullable=True)
    mpg = db.Column(db.Integer, nullable=False)
    horsepower = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)

    def __init__(self,type, name, rating, mpg, horsepower, price):
        self.type = type
        self.name = name
        self.price = price
        self.mpg = mpg
        self.horsepower = horsepower
        self.rating = rating

    def __repr__(self):
        return "ID #{}: TYPE: {}. NAME: {}. RATING: {}. MPG: {}. HORSEPOWER: {}. PRICE: {}.".format(self.id, self.type, self.name, self.rating, self.mpg, self.horsepower, self.price)
