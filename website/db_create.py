from app import db
from app.models import Car
db.create_all()

csv_list = [i.rstrip() for i in open("../Scraping/master.csv")]

for i in csv_list:
    a = i.split(",")
    new_car = Car(a[0], a[1], float(a[2]), int(a[3]), int(a[4]), 0.0)
    
    db.session.add(new_car)
db.session.commit()
