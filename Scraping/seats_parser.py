from bs4 import BeautifulSoup
import requests

#function to get the seat information of each car
def getSeats(site, id):
    #reverse engineers KBB's built-in comparison feature to pull seat information
    kbb = requests.get(f"https://www.kbb.com/vehicles/hub/_compare/?vehicleid={id}&category={site}/").text
    soup = BeautifulSoup(kbb, features="html.parser")

    #looks for the big div tag that contains information for car
    try:
        seats_scrape = soup.findAll("div", {"class":"compare-vehicle-col"})
    except IndexError:
        pass
    
    #looks for the specific div tag that contains the seat info
    try:
        for i in seats_scrape:
            seat_info = i.findAll("div", {"data-compare-row":"5"})
            return seat_info[0].text[0]
    except IndexError:
        pass

