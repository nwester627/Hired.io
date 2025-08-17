from fastapi import FastAPI
from services.user_service.app.routers import auth

app = FastAPI(
    title="Hired.io User Service API",
    version="1.0.0"
)

# All routes in the auth router will start with '/auth', like '/auth/register'.
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Hired.io User Service API!"}