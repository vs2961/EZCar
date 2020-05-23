from bs4 import BeautifulSoup
# import the already defined range func from Edmunds_Parser.py
import re
import requests
import time
from Scraping.seats_parser import getSeats

sites = ["suv", "sedan", "hatchback", "luxury", "electric", "van-minivan", "crossover", "truck", "convertible", "coupe", "hybrid", "wagon"]
matchmatch = []

# gets html of kbb site of interest.
#with open("./Test_Data/kbb.html") as file:
def getCars(html, site):
    soup = BeautifulSoup(html, features="html.parser")
# creates a dictionary of mpg, horsepower, rating for each car.
    relations = dict()
    idscrape = soup.prettify()
    matchmatch = [match.start() for match in re.finditer("vehicleId", idscrape)]

# gets names of cars on page
    p = 0

    for car in matchmatch:
        carId = soup.prettify()[int(matchmatch[p]) + 11:int(matchmatch[p]) + 17]

        b = requests.get(f"https://www.kbb.com/vehicles/hub/_pricingmodal/?vehicleid={carId}&intent=buy-new&tab=style&forceupdate=false/").text
        soup2 =  BeautifulSoup(b, features="html.parser")

        try:
            chosen_car = soup2.findAll("div", {"class":"paragraph-one"})[0].text
        except IndexError:
            continue

        c = requests.get(f"https://www.kbb.com/vehicles/modal/consumerreviewsmodal/?vehicleid={carId}&page=1&sortorder=0").text

        soup3 = BeautifulSoup(c, features="html.parser")

        try:
            procon = soup3.findAll("div", {"class": "consumer-review-proncon paragraph-two"})[0].text
        except IndexError:
            procon = "N/A"

        if procon != "N/A":
            procon = procon.split("\n")
            pro = procon[1][6:].split(",")
            con = procon[2][6:].split(",")

            pro = "+".join(pro)
            con = "+".join(con)

        else:
            pro = "N/A"
            con = "N/A"
        # print(testimony)

        relations[p] = [carId, site, chosen_car, pro, con]

        '''print(len(relations))'''

        if p%10 == 0:
            print("ooga checkpoint")
        p += 1


    # Prints a nice way to see the dictionary of all cars and their properties.

    for item, val in enumerate(relations):
        try:
            out.write(f"{relations[val][0]}, {', '.join(relations[val][1:])}\n")
        except:
            print(val, relations[val])

out = open("procon.csv", "w")
out.write("ID, Type, Car, Pros, Cons\n")

for site in sites:
    a = requests.get(f"https://www.kbb.com/{site}/").text
    getCars(a, site)
    print(f"Finished {site}")
    time.sleep(2)

https://fdpq.syndication.kbb.com/kbb/?apikey=728bae10-a5ca-4171-83aa-245186228daa&kbbvehicleId=439968&zipcode=10282&vehicleListingType=new&pixallPrimaryId=hpzeIJIdFG59Mqut37P8i6kn&pixallSecondaryId=hpzeIJIdFG59Mqut37P8i6kn

