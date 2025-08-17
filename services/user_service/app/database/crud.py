from sqlalchemy.orm import Session
from app.database.models import User
from app.schemas.user import UserCreate

def create_user(db: Session, user: UserCreate):
    # Create a new instance of your SQLAlchemy User model
    # Note: We're not using UserInDB here directly. Instead, we're mapping
    # the data from the Pydantic model to the SQLAlchemy model.
    db_user = User(
        username=user.username,
        email=user.email,
        hashed_password=user.hashed_password
    )

    # Add the new user object to the database session
    db.add(Session.add(db_user))

    # Commit the transaction to save the changes permanently
    db.commit(Session.commit(db_user))

    # Refresh the object to get the new ID from the database
    db.refresh(db_user)

    return db_user