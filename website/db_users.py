from app import user_db
from app.models import User

db.create_all()

test = User("test", "test")

db.session.add(test)
db.session.commit()

