import sys
import os
from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool

from alembic import context

# The absolute path to your project's root directory is added to the Python path.
# This ensures Alembic can find your 'services' module regardless of your working directory.
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.insert(0, project_root)

# This is the corrected import path to your models.py file.
# It now correctly reflects the package names 'services' and 'user_service'.
from services.user_service.app.database.models import Base

config = context.config
# Corrected the fileConfig call to pass a dictionary for the defaults.
fileConfig(config.config_file_name, defaults=config.get_section(config.config_ini_section, {}))

# This object holds the metadata of all your SQLAlchemy models.
# Alembic uses it to compare your models with the database schema.
target_metadata = Base.metadata


def run_migrations_online() -> None:
    """Run migrations in 'online' mode by connecting to the database."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    raise NotImplementedError("Offline mode is not configured.")
else:
    run_migrations_online()
