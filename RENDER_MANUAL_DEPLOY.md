# Render - Manual Deployment Instructions

**IMPORTANT**: The Blueprint might not work due to path issues. Use **Manual Deployment** instead.

## 🚀 Manual Deployment Steps

### Step 1: Deploy Django Backend

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. **Connect GitHub**:
   - Select repo: `ayushttt36/medique`
   - Choose branch: `main`
4. **Service Settings**:
   - **Name**: `mediqura-backend`
   - **Runtime**: `Python 3`
   - **Root Directory**: `mediqura-django` ⭐ (MUST match directory name exactly)
   - **Build Command**: 
     ```
     pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate
     ```
   - **Start Command**: 
     ```
     gunicorn config.wsgi:application --bind 0.0.0.0:$PORT
     ```
5. **Environment Variables** (Click "Advanced"):
   - `SECRET_KEY` = (Generate a random string)
   - `DEBUG` = `false`
   - `DJANGO_SETTINGS_MODULE` = `config.settings`
   - `PYTHON_VERSION` = `3.11`

6. Click **"Create Web Service"**
7. **Wait** for deployment to complete (about 5 minutes)
8. **Copy the URL** (e.g., `https://mediqura-backend.onrender.com`)

---

### Step 2: Deploy React Frontend

1. Click **"New +"** → **"Web Service"**
2. **Connect GitHub**:
   - Select repo: `ayushttt36/medique`
   - Choose branch: `main`
3. **Service Settings**:
   - **Name**: `mediqura-frontend`
   - **Runtime**: `Node`
   - **Root Directory**: `medqura-frontend` ⭐ (WITHOUT 'i' - must match exactly)
   - **Build Command**: 
     ```
     npm install && npm run build
     ```
   - **Start Command**: 
     ```
     npm run preview -- --host 0.0.0.0 --port $PORT
     ```
4. **Environment Variables**:
   - `VITE_API_URL` = `https://your-backend-url.onrender.com/api`
     (Replace with the URL from Step 1)

5. Click **"Create Web Service"**
6. **Wait** for deployment to complete

---

## ✅ What to Verify

After both services deploy:
- ✅ Backend health: `https://your-backend.onrender.com/api/health/`
- ✅ Frontend loads: `https://your-frontend.onrender.com/`
- ✅ Frontend can reach Backend API

---

## ⚠️ If Still Fails

**Check these in Render Dashboard**:
1. **Logs Tab**: Look for error messages
2. **Deployments Tab**: Click last deployment to see full logs
3. **Settings Tab**: Verify all values are correct
4. **Environment Variables**: Make sure they're set correctly

**Common Issues**:
- Root Directory has typo (check spelling exactly)
- Environment variables not set
- Build command incomplete
- Port conflicts

---

## 🔄 Redeploy if Needed

1. Go to service in Render
2. Click **"Manual Deploy"** → **"Deploy latest commit"**

