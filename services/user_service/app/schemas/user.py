from pydantic import BaseModel

# Base model with shared attributes
class UserBase(BaseModel):
    username: str
    email: str

# Model for user creation (what the user sends to the API)
class UserCreate(UserBase):
    password: str

# Model for a user stored in the database
class UserInDB(UserBase):
    hashed_password: str

# You can add a model for the public response (e.g., when viewing a profile)
class UserPublic(UserBase):
    pass