from app import db
from app.models import Car, User

db.create_all()

csv_list = open("../Scraping/master.csv")
csv_list.readline()
seen = set()

for i in csv_list:
    a = [x.strip() for x in i.split(",")]
    if a[2] in seen:
        continue
    else:
        seen.add(a[2])
    new_car = Car(a[1], 
                  a[2],
                  False if a[4].split(" ") == "MPG" else True,
                  float(a[3]) if a[3] != "N/A" else 0.0,
                  int(a[4].split(" ")[0]), 
                  int(a[5]), 
                  int(a[6]) if a[6] != "-" else -1, 
                  float(a[7]),
                  float(a[8]),
                  int(a[9].split(" - ")[0].lstrip('"$')),
                  int(a[9].lstrip('"$')) if not len(a[9].split(" - ")) > 1 else int(a[9].split(" - ")[1].lstrip('"$')),
                  a[10]
                 )
    db.session.add(new_car)
db.session.commit()

