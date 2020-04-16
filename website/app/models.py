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
    min_price = db.Column(db.Float, nullable=False)
    max_price = db.Column(db.Float, nullable=False)
    market_price = db.Column(db.Float, nullable=False)
    image_link = db.Column(db.String, nullable=True)

    def __init__(self,type, name, rating, mpg, horsepower, min_price, max_price, market_price, image_link):
        self.type = type
        self.name = name
        self.rating = rating
        self.mpg = mpg
        self.horsepower = horsepower
        self.min_price = min_price
        self.max_price = max_price
        self.market_price = market_price
        self.image_link = image_link

    def __repr__(self):
        return "ID #{}: TYPE: {}. NAME: {}. RATING: {}. MPG: {}. HORSEPOWER: {}. MIN_PRICE: {}. MAX_PRICE: {}. MARKET_PRICE: {}. IMAGE_LINK: {}".format(
            self.id, 
            self.type, 
            self.name, 
            self.rating, 
            self.mpg, 
            self.horsepower, 
            self.min_price,
            self.max_price,
            self.market_price, 
            self.image_link
            )
