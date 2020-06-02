from app import user_db
from app.models import User

user_db.create_all()

test = User("test", "test")

user_db.session.add(test)
user_db.session.commit()

