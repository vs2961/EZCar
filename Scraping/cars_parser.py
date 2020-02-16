from bs4 import BeautifulSoup


with open("./Test_Data/cars_test.html") as file:
    soup = BeautifulSoup(file, features="html.parser")

for link in soup.find_all('a'):
    a = link.get("href")
    if a and "https://www.cars.com/research/" in a and "/consumer-reviews/" not in a:
        print(a)

"""
with open("./Test_Data/test.html") as file:
    soup = BeautifulSoup(file, features="html.parser")

relations = dict()
car = soup.find_all("h1", class_="cui-page-section__title")
car_name = car[0].text
price = soup.find_all("div", class_="mmy-header__msrp")

price_range = price[0].text.strip().split("\n")[0]

car_details = soup.find_all("div", class_="list-specs__value")
car_type = car_details[0].text.strip()
car_seats = car_details[1].text.strip()
car_mpg = car_details[2].text.strip().split("\n")[0]

relations[car_name] = [car_type, price_range, car_seats, car_mpg]
print(relations)
"""
