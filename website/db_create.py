from app import db
from app.models import Car
db.create_all()

csv_list = open("../Scraping/master.csv").read().split("\n")[1:]
for i in csv_list:
    a = i.split(",")
    new_car = Car(a[0], a[1], float(a[2]), int(a[3]), int(a[4]), float(a[5]), float(a[6]), 0.0, a[8])
    db.session.add(new_car)
db.session.commit()
