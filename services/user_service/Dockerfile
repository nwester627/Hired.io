FROM python:3.13-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first to leverage Docker cache
COPY ./services/user_service/requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Copy the main application
COPY ./services/user_service/app ./app
COPY ./main.py .
COPY ./alembic.ini .
COPY ./alembic ./alembic

# Run migrations and start the application
CMD ["/bin/bash", "-c", "alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port 8000"]
