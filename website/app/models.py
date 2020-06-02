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
    is_electric = db.Column(
              db.Boolean, 
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
              nullable=False, 
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
    seats = db.Column(
              db.Integer, 
              nullable=False, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    MSRP = db.Column(
              db.Float, 
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

    def __init__(self, type, name, is_electric, rating, mpg, horsepower, seats, MSRP, market_price, min_price, max_price, image_link):
        self.type = type
        self.name = name
        self.is_electric = is_electric
        self.rating = rating
        self.mpg = mpg
        self.horsepower = horsepower
        self.seats = seats
        self.MSRP = MSRP
        self.market_price = market_price
        self.min_price = min_price
        self.max_price = max_price
        self.image_link = image_link

    def serialize(self):
        return {
            "ID": self.id,
            "TYPE": self.type,
            "NAME": self.name,
            "IS ELECTRIC": self.is_electric,
            "RATING" : self.rating,
            "MPG": self.mpg,
            "HORSEPOWER": self.horsepower, 
            "SEATS": self.seats, 
            "MSRP": self.MSRP, 
            "MARKET PRICE": self.market_price, 
            "PRICE_RANGE": f"{self.min_price} - {self.max_price}",
            "IMAGE_LINK": self.image_link 
        }

    def __repr__(self):
        return f"ID #{self.id}: TYPE: {self.type}. NAME: {self.name}. \
                 IS_ELECTRIC: {self.is_electric}. RATING: {self.rating}. MPG: {self.mpg}. \
                 HORSEPOWER: {self.horsepower}. SEATS: {self.seats}. \
                 MIN_PRICE: {self.min_price}. MAX_PRICE: {self.max_price}. \
                 MARKET_PRICE: {self.market_price}. IMAGE_LINK: {self.image_link}"

class User(db.Model):
    id = db.Column(
              db.Integer, 
              primary_key=True, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    username = db.Column(
              db.String, 
              nullable=True, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    password = db.Column(
              db.String, 
              nullable=True, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    cars = db.Column(
              db.String, 
              nullable=True, 
              supports_json = True,
              supports_yaml = True,
              supports_dict = True,
              on_serialize = None,
              on_deserialize = None,
              display_name = None)
    
    
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.cars = ""
        
    def isValid(self, username, password):
        if username == self.username and password == self.password:
            return self.id
        return "0" * 20
