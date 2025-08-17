from pydantic import BaseModel

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    password: str

class UserInDB(UserBase):
    hashed_password: str

# Public response model (for showing user info without sensitive data)
class UserPublic(UserBase):
    pass
