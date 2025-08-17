from fastapi import APIRouter
from app.schemas.user import UserCreate, UserInDB
from app.dependencies.auth_utils import hash_password
from app.database.crud import create_user

router = APIRouter()

@router.post("/register", response_model=UserInDB)
def register_user(user: UserCreate):
    # Hash the plain-text password from the input model
    hashed_password = hash_password(user.password)

    # Create a new UserInDB object with the hashed password
    db_user = UserInDB(
        username=user.username,
        email=user.email,
        hashed_password=hashed_password
    )

    create_user(db_user)
    return db_user
