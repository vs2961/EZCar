from flask_sqlalchemy import SQLAlchemy
import os
from app import db

class Car(db.Model):
    id = db.Column(
              db.Integer, 
              primary_key=True, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    type = db.Column(
              db.String,
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)

    name = db.Column(
              db.String, 
              nullable=False, 
              unique=False, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    rating = db.Column(
              db.Float, 
              nullable=True, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    mpg = db.Column(
              db.Integer, 
              nullable=False, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    horsepower = db.Column(
              db.Integer, 
              nullable=False, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    min_price = db.Column(
              db.Float, 
              nullable=False, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    max_price = db.Column(
              db.Float, 
              nullable=False, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    market_price = db.Column(
              db.Float, 
              nullable=False, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    image_link = db.Column(
              db.String, 
              nullable=True, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)

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

    def serialize(self):
        return {
            "TYPE": self.type,
            "NAME": self.name,
            "RATING": self.rating,
            "MPG": self.mpg,
            "HORSEPOWER": self.horsepower, 
            "PRICE_RANGE": "{} - {}".format(self.min_price, self.max_price),
            "IMAGE_LINK": self.image_link 
        }

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
