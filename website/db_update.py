from app import db
from app.models import Car

csv_list = open("../Scraping/master.csv")
csv_list.readline()

for i in csv_list:
    a = [x.strip() for x in i.split(",")]
    db.session.query(Car).filter_by(name=a[2]).\
        update({Car.is_electric: "e" in a[4]}, synchronize_session='evaluate')

db.session.commit()

