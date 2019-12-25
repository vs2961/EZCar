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
cars = soup.select("h3")
names = [x.text.split(';')[-1].strip() for x in cars]
for i in names:
    # For now, have a placeholder for every key.
    relations[i] = "0"
rat = soup.select("div", title="KBB Expert Rating")
rats = [x.text.split(';')[-1].strip() for x in rat]
print(rats)
rating = soup.find_all("div", title="KBB Expert Rating")
print(rating)

