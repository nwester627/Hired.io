from sqlalchemy.orm import Session
from services.user_service.app.database.models import User
from services.user_service.app.schemas.user import UserInDB

def create_user(db: Session, user: UserInDB):
    """
    Save a new user to the database. The password is already hashed.
    Uses the Pydantic model to create the SQLAlchemy model.
    """
    db_user = User(**user.model_dump())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
