from bs4 import BeautifulSoup
# import the already defined range func from Edmunds_Parser.py
from Edmunds_Parser import combine_range
import re

# gets html of kbb site of interest.
with open("./Test_Data/kbb.html") as file:
    soup = BeautifulSoup(file, features="html.parser")

# creates a dictionary of mpg, horsepower, rating for each car.
relations = dict()

# gets names of cars on page
cars = soup.find_all("div", class_="css-1hhfg7w e1q103pk0")
for car in cars:
    chosen_car = car.findChildren("h3", {"class": "css-fp7pcp e53mcov2"}, recursive=True)[0].text
    chosen_rating = car.findChildren("div", {"class": "css-x9skgx-NumericRating e149jidm1"}, recursive=True)[0].text
    chosen_mpg = car.findChildren("div", {"class": "css-ba3sq5"})[0].findChildren("div")[0].text.split(" ")[0]
    try:
        chosen_horsepower = car.findChildren("div", {"class": "css-ba3sq5"}, title="Horsepower")[0].findChildren("div")[0].text
    except IndexError:
        chosen_horsepower = None

    if chosen_car not in relations.keys():
        relations[chosen_car] = [float(chosen_rating.strip()), chosen_mpg, chosen_horsepower]

# Prints a nice way to see the dictionary of all cars and their properties.
for item, val in enumerate(relations):
    print(val, relations[val])
# if you want to see the html code, just uncomment the line of code below.
# print(soup.prettify())


