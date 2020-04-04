from app import db
from app.models import Car
db.create_all()
car = Car("2018 Honda Civic", "52000", 27, 187, 4.5)
db.session.add(car)
db.session.commit()
