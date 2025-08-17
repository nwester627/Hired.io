
import psycopg2
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

engine = create_engine(
    "postgresql://",
    creator=lambda: psycopg2.connect(
        user='postgres',
        password='Minixs62795@@',
        host='127.0.0.1',
        port='5433',
        database='hired_db'
    )
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class Base(DeclarativeBase):
    pass

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
