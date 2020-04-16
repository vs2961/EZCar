from app import db
from app.models import Car
db.create_all()

# csv_list = [i.rstrip() for i in open("../Scraping/master.csv")]

# for i in csv_list:
#     a = i.split(",")
#     new_car = Car(a[0], a[1], float(a[2]), int(a[3]), int(a[4]), 0.0)
    
#     db.session.add(new_car)
# db.session.commit()
new_car = Car("suv", "2020 Volvo XC40", 4.7, 27, 187, 34695, 43445, 31551, 
"https://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/12737/2019-volvo-xc40-side_12737_001_640x480_711.png?interpolation=high-quality&crop=1.0xw:0.90xh;left")
print(new_car)