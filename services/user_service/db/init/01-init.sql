-- Create user with password
CREATE USER nicolas_wester WITH PASSWORD 'Minixs62795@@';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE hired_db TO nicolas_wester;

-- Make user owner of database
ALTER DATABASE hired_db OWNER TO nicolas_wester;

-- Connect to the database
\c hired_db;

-- Grant schema privileges
GRANT ALL ON SCHEMA public TO nicolas_wester;
