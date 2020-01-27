from db.create_db import Car, engine
from sqlalchemy.orm import sessionmaker, relationship

# this file is meant to create db sessions and commit cars and stuff
# this is decided to be separate from create_db.py because create_db.py is solely for creating database schemas
Session = sessionmaker(bind=engine)
session = Session()
# If you want to test this out, run create_db
# car = Car("2018 Honda Civic", "52000", 27, 187, 4.5)
# session.add(car)
# session.commit()
# and then uncomment the above code

car = session.query(Car).all()
print(car)
session.close()


