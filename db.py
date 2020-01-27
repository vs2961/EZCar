from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

# Creating the base schema
Base = declarative_base()


# Defining car table schema as a class.

class Car(Base):
    __tablename__ = "cars"
    id = Column("id", Integer, primary_key=True)
    name = Column("name", String, nullable=False)
    price = Column("price", Float, nullable=False)
    mpg = Column("mpg", Integer, nullable=False)
    horsepower = Column("horsepower", Integer, nullable=False)
    rating = Column("rating", Float, nullable=True)

# creates an engine that provides the connection from this file to database
# echo set to TRUE for debugging purposes

engine = create_engine("sqlite:///data.db", echo=True)
Base.metadata.create_all(bind=engine)



