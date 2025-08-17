from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from services.user_service.app.schemas.user import UserCreate, UserInDB, UserPublic
from services.user_service.app.dependencies.auth_utils import hash_password, verify_password
from services.user_service.app.database.crud import create_user
from services.user_service.app.database.database import get_db
from services.user_service.app.database.models import User

router = APIRouter()

@router.post("/register", response_model=UserPublic, status_code=201)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    """
    Register a user: hash the password, save the user, and return public info.
    """
    hashed_password = hash_password(user.password)
    db_user = UserInDB(
        username=user.username,
        email=user.email,
        hashed_password=hashed_password
    )
    created_user = create_user(db=db, user=db_user)
    return UserPublic(**created_user.__dict__)

@router.get("/users/{username}", response_model=UserInDB)
def get_user(username: str):
    """
    Placeholder: returns a fake user. To be implemented.
    """
    user = UserInDB(username=username, email="user@example.com", hashed_password="hashed_password")
    return user
