from bs4 import BeautifulSoup
import requests

def getSeats(site, id):
    kbb = requests.get(f"https://www.kbb.com/vehicles/hub/_compare/?vehicleid={id}&category={site}/").text

    soup = BeautifulSoup(kbb, features="html.parser")
    # creates a dictionary of mpg, horsepower, rating for each car.

    try:
        seats_scrape = soup.findAll("div", {"class":"compare-vehicle-col"})
    except IndexError:
        pass

    try:
        for i in seats_scrape:
            seat_info = i.findAll("div", {"data-compare-row":"5"})
            return seat_info[0].text[0]
    except IndexError:
        pass

