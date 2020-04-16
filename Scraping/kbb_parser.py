from bs4 import BeautifulSoup
# import the already defined range func from Edmunds_Parser.py
import re
import requests
import time

sites = ["suv", "sedan", "hatchback", "luxury", "electric", "van-minivan", "crossover", "truck", "convertible", "coupe", "hybrid", "wagon"]
matchmatch = []

# gets html of kbb site of interest.
#with open("./Test_Data/kbb.html") as file:
def getCars(html, site, out):
    soup = BeautifulSoup(html, features="html.parser")
# creates a dictionary of mpg, horsepower, rating for each car.
    relations = dict()
    idscrape = soup.prettify()
    matchmatch = [match.start() for match in re.finditer("vehicleId", idscrape)]

# gets names of cars on page
    cars = soup("a", attrs={"id": re.compile("pathLink")})
    p = 0

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

        chosen_price = soup.prettify()[int(matchmatch[p])+11:int(matchmatch[p])+17]

        b = requests.get(f"https://www.kbb.com/vehicles/hub/_pricingmodal/?vehicleid={chosen_price}&intent=buy-new&tab=style&forceupdate=false/").text
        soup2 =  BeautifulSoup(b, features="html.parser")

        try:
            price = soup2.findAll("div", {"id":"msrp"})[0].text
        except IndexError:
            continue

        try:
            marketprice = soup2.findAll("div", {"id":"fairPurchasePrice"})[0].text[1:].replace(",", "")
        except IndexError:
            continue

        try:
            pricerange = soup2.findAll("div", {"class":"paragraph-two msrp-title"})
        except IndexError:
            continue

        try:
            imagelink = soup2.findAll("img")
        except IndexError:
            print("broken ooga")

        imagelink = "https:"+imagelink[0]['src']

        pricerange = list(map(lambda x: int(x.text[1:].replace(",", "")), pricerange))

        pricemax = str(max(pricerange))
        pricemin = str(min(pricerange))

        if chosen_car not in relations.keys():
            relations[chosen_car] = [site, chosen_rating.strip(), chosen_mpg, chosen_horsepower, pricemin, pricemax, marketprice, imagelink]

        if p%10 == 0:
            print("ooga checkpoint")
        p += 1

    # Prints a nice way to see the dictionary of all cars and their properties.

    for item, val in enumerate(relations):
        try:
            out.write(f"{relations[val][0]}, {val}, {', '.join(relations[val][1:-1])}\n")
        except:
            print(val, relations[val])

out = open("./Parsed_Data/master.csv", "w")
out.write("Type, Car, Rating, MPG, Horsepower, Min Price, Max Price, Market Price, Image Link\n")

for site in sites:
    a = requests.get(f"https://www.kbb.com/{site}/").text
    getCars(a, site, out)
    print(f"Finished {site}")
    time.sleep(2)
