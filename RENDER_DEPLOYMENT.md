# Render Deployment Guide

## 🚀 Deploy to Render

### Option 1: Multi-Service Deployment (Recommended)

1. **Connect your GitHub repo** to Render
2. **Use the `render.yaml`** file in your repo root
3. **Deploy** - Render will create both services automatically

### Option 2: Manual Service Creation

#### Django Backend:
- **Service Type**: Web Service
- **Runtime**: Python 3
- **Root Directory**: `mediqura-django`
- **Build Command**: `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
- **Start Command**: `gunicorn config.wsgi:application --bind 0.0.0.0:$PORT`
- **Environment Variables**:
  - `SECRET_KEY`: Generate a random key
  - `DEBUG`: `false`
  - `DJANGO_SETTINGS_MODULE`: `config.settings`

#### React Frontend:
- **Service Type**: Static Site
- **Root Directory**: `medqura-frontend`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL`: `https://your-backend-service.onrender.com/api`

## 📋 Environment Variables

### Backend:
```
SECRET_KEY=your-secret-key
DEBUG=false
DJANGO_SETTINGS_MODULE=config.settings
DATABASE_URL=postgresql://... (auto-provided by Render)
```

### Frontend:
```
VITE_API_URL=https://your-backend.onrender.com/api
```

## 🔧 Troubleshooting

### Build Failures:
- Check that all dependencies are in `requirements.txt`
- Ensure Python version is 3.11+
- Verify static files are collected

### Runtime Errors:
- Check ALLOWED_HOSTS includes `.onrender.com`
- Verify SECRET_KEY is set
- Check database connection

### Frontend Issues:
- Ensure VITE_API_URL points to correct backend URL
- Check CORS settings in Django