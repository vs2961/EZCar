from bs4 import BeautifulSoup
# import the already defined range func from Edmunds_Parser.py
import re
import requests
import time

sites = ["suv", "sedan", "hatchback", "luxury", "electric", "van-minivan", "crossover", "truck", "convertible", "coupe", "hybrid", "wagon"]


# gets html of kbb site of interest.
#with open("./Test_Data/kbb.html") as file:
def getCars(html, site):
    soup = BeautifulSoup(html, features="html.parser")
# creates a dictionary of mpg, horsepower, rating for each car.
    relations = dict()

# gets names of cars on page
    cars = soup("a", attrs={"id": re.compile("pathLink")})
    for car in cars:
        chosen_car = car.findChildren("h3", {"class": "css-fp7pcp e53mcov2"}, recursive=True)[0].text
        try:
            chosen_rating = car.findChildren("div", {"itemprop": "reviewRating"}, recursive=True)[0].text[-4:]
        except IndexError:
            continue
        try:
            chosen_mpg = car.findChildren("div", title="Combined Fuel Economy")[0].findChildren("div")[0].text.split(" ")[0]
        except IndexError:
            continue
        try:
            chosen_horsepower = car.findChildren("div", title="Horsepower")[0].findChildren("div")[0].text
        except IndexError:
            continue

        if chosen_car not in relations.keys():
            relations[chosen_car] = [chosen_rating.strip(), chosen_mpg, chosen_horsepower]

    # Prints a nice way to see the dictionary of all cars and their properties.
    out = open(f"./Parsed_Data/{site}.csv", "w")
    out.write("Car, Rating, MPG, Horsepower\n")
    for item, val in enumerate(relations):
        try:
            out.write(f"{val}, {', '.join(relations[val])}\n") 
        except:
            print(val, relations[val])

for site in sites:
    a = requests.get(f"https://www.kbb.com/{site}/").text     
    getCars(a, site)
    print(f"Finished {site}")
    time.sleep(2)
