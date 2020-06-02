from app import db
from app.models import User

db.create_all()
test = User("test", "test")

db.session.add(test)
db.session.commit()
db.session.close()

