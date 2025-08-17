import psycopg2

try:
    conn = psycopg2.connect(
        "host=localhost port=5433 dbname=hired_db user=postgres password=Minixs62795@@"
    )
    print("Connection successful!")
    conn.close()
except Exception as e:
    print(f"Error: {e}")
