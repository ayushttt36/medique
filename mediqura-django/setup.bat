@echo off
echo.
echo ========================================
echo Mediqura Django Backend Setup
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed or not in PATH
    exit /b 1
)

echo [1/5] Creating virtual environment...
python -m venv venv
if errorlevel 1 (
    echo Error: Failed to create virtual environment
    exit /b 1
)

echo [2/5] Activating virtual environment...
call venv\Scripts\activate
if errorlevel 1 (
    echo Error: Failed to activate virtual environment
    exit /b 1
)

echo [3/5] Installing dependencies...
pip install --upgrade pip
pip install -r requirements.txt
if errorlevel 1 (
    echo Error: Failed to install dependencies
    exit /b 1
)

echo [4/5] Running migrations...
python manage.py makemigrations
python manage.py migrate
if errorlevel 1 (
    echo Error: Failed to run migrations
    exit /b 1
)

echo [5/5] Creating superuser...
echo.
echo Please enter superuser credentials:
python manage.py createsuperuser
if errorlevel 1 (
    echo Warning: Failed to create superuser (you can do this later)
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start the development server, run:
echo   venv\Scripts\activate
echo   python manage.py runserver
echo.
echo Access the application at:
echo   - API: http://localhost:8000/api/
echo   - Admin: http://localhost:8000/admin/
echo.
pause
