from fastapi import FastAPI

# Create an instance of the FastAPI class
app = FastAPI()

# Define a path operation decorator for a GET request at the root URL ("/")
@app.get("/")
def read_root():
    # This function is called when a GET request is made to the root URL
    # It returns a JSON object with a single key-value pair
    return {"message": "Hello, World! This is your backend."}