from sqlalchemy.orm import sessionmaker

from db.create_db import Car, engine

# this file is meant to create db sessions and commit cars and stuff
# this is decided to be separate from create_db.py because create_db.py is solely for creating database schemas
# Session = sessionmaker(bind=engine)
# session = Session()
# If you want to test this out, run create_db
# car = Car("2018 Honda Civic", "52000", 27, 187, 4.5)
# session.add(car)
# session.commit()
# and then uncomment the above code


def database_add(file):
    # the csv module will be useful here
    import csv
    all_data = []
    with open(file, "rt") as f:
        data = csv.reader(f)
        for row in data:
            all_data.append(row)
    for i in all_data[1:]:
        print(i)

    Session = sessionmaker(bind=engine)
    session = Session()
    for j in all_data[1:]:
        car = Car(j[0], float(j[1].strip()), int(j[2].strip()), int(j[-1].strip()), 0.0)
        session.add(car)
    session.commit()
    session.close()

# call the above function if you need to add cars.
# database_add("../Parsed_Data/convertible.csv")
