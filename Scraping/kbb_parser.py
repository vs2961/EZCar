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

    car_mpg = [match.start() for match in re.finditer("combinedMpg", idscrape)]

    car_hp = [match.start() for match in re.finditer("horsepower\"", idscrape)]

    car_price = [match.start() for match in re.finditer("priceRange", idscrape)]

# gets names of cars on page
    '''cars = soup("a", attrs={"id": re.compile("pathLink")})'''
    p = 0

    for car in matchmatch:
        '''chosen_car = car.findChildren("h3", {"class": "css-fp7pcp e53mcov2"}, recursive=True)[0].text
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
            continue'''
        chosen_price = soup.prettify()[int(matchmatch[p]) + 11:int(matchmatch[p]) + 17]

        price_range= soup.prettify()[int(car_price[p]) + 13:soup.prettify().find('"', int(car_price[p])+15)]
        price_range = price_range.replace(",", "")

        chosen_mpg = soup.prettify()[int(car_mpg[p])+14:soup.prettify().find('"', int(car_mpg[p])+16)]

        chosen_horsepower = soup.prettify()[int(car_hp[p])+12:soup.prettify().find('"', int(car_hp[p])+12)-1]

        b = requests.get(f"https://www.kbb.com/vehicles/hub/_pricingmodal/?vehicleid={chosen_price}&intent=buy-new&tab=style&forceupdate=false/").text
        soup2 =  BeautifulSoup(b, features="html.parser")

        try:
            price = soup2.findAll("div", {"id":"msrp"})[0].text[1:].replace(",", "")
        except IndexError:
            continue

        try:
            chosen_car = soup2.findAll("div", {"class":"paragraph-one"})[0].text
        except IndexError:
            continue

        if chosen_horsepower == "0":
            bruh = chosen_car.replace(" ", "+") + "+HP"
            a = requests.get(f"https://www.google.com/search?q={bruh}/").text
            soup3 = BeautifulSoup(a, features="html.parser")
            try:
                chosen_horsepower = soup3.findAll("div", {"class":"BNeawe iBp4i AP7Wnd"})[0].text[0:3]
            except IndexError:
                pass

        if chosen_mpg == "\",":
            chosen_mpg = "0"

        try:
            marketprice = soup2.findAll("div", {"id":"fairPurchasePrice"})[0].text[1:].replace(",", "")
        except IndexError:
            continue

        if marketprice == "/A":
            marketprice = "0"

        try:
            imagelink = soup2.findAll("img")
        except IndexError:
            print("broken ooga")

        if imagelink[0]['src'] == "https://file.kbb.com/kbb/images/icons/no-image-te/640x480.png?interpolation=high-quality&downsize=200:*":
            imagelink = "https:" + imagelink[1]['src']
        imagelink = "https:"+ imagelink[0]['src']

        relations[p] = [site, chosen_car, chosen_mpg, chosen_horsepower, price, marketprice, price_range, imagelink]

        print(len(relations))

        if p%10 == 0:
            print("ooga checkpoint")
        p += 1

    # Prints a nice way to see the dictionary of all cars and their properties.

    for item, val in enumerate(relations):
        try:
            out.write(f"{relations[val][0]}, {', '.join(relations[val][1:])}\n")
        except:
            print(val, relations[val])

out = open("master.csv", "w")
out.write("Type, Car, MPG, Horsepower, MSRP, Market Price, Price Range, Image Link\n")

for site in sites:
    a = requests.get(f"https://www.kbb.com/{site}/").text
    getCars(a, site, out)
    print(f"Finished {site}")
    time.sleep(2)

