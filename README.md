hired.io
A web platform to connect job seekers with employers, making the hiring process more efficient and transparent.

Description
Hired.io is a full-stack application designed to streamline the job search and hiring process. The platform provides a user-friendly interface for job seekers to find relevant opportunities and for companies to manage applications and discover qualified candidates.

Key features include:

User authentication and profiles for both job seekers and companies.

Advanced search and filtering for job listings.

A dashboard to track job applications.

Installation
This project consists of a Python backend and a React frontend. Follow these steps to get a local copy of the project running on your machine.

Prerequisites
Python 3.x: Ensure you have the latest version of Python installed.

pip: The Python package installer.

Node.js & npm: Required for the React frontend.

Steps
Clone the repository:

Bash

git clone https://github.com/nwester627/hired.io.git
cd hired.io
Backend Setup:

Create and activate a virtual environment:

Bash

# On macOS/Linux

python3 -m venv venv
source venv/bin/activate

# On Windows

python -m venv venv
venv\Scripts\activate
Install dependencies:

Bash

pip install -r requirements.txt
Frontend Setup:

Navigate to the frontend directory:

Bash

cd frontend
Install Node dependencies:

Bash

npm install
Usage
To run the application, you'll need to start both the backend server and the frontend development server.

Start the Backend:

Navigate back to the project's root directory.

Run the server:

Bash

# Example command to run your backend server

# e.g., flask run or python manage.py runserver

Start the Frontend:

Open a new terminal.

Navigate to the frontend directory.

Run the React development server:

Bash

npm start
The application should now be accessible in your web browser at http://localhost:3000 (or whatever port your React app runs on).

Technologies Used
Backend: Python, FastAPI

Database: PostgreSQL

Frontend: JavaScript, React, HTML, CSS
