from app import db
from app.models import Car

db.create_all()

csv_list = open("../Scraping/master.csv")
csv_list.readline()

for i in csv_list:
    a = [x.strip() for x in i.split(",")]
    new_car = Car(a[1], 
                  a[2],
                  False if a[3].split(" ") == "MPG" else True,
                  int(a[3].split(" ")[0]), 
                  int(a[4]), 
                  int(a[5]) if a[5] != "-" else -1, 
                  float(a[6]),
                  float(a[7]),
                  int(a[8].split(" - ")[0].lstrip("$")),
                  int(a[8].lstrip("$")) if not len(a[8].split(" - ")) > 1 else int(a[8].split(" - ")[1].lstrip("$")),
                  a[9]
                 )
    db.session.add(new_car)

db.session.commit()
