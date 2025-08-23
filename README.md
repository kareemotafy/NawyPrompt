# 🏠 Property Listings App

A minimal property listings application built with:

- **Frontend:** Next.js + MUI
- **Backend:** Node.js (Express, TypeScript)
- **Database:** PostgreSQL + TypeORM

---

## 🚀 Development Setup

You can run the dev environment using **Docker Compose** (recommended) or run each service manually.

---

### Option 1: Run with Docker Compose (Recommended)

```sh
docker compose up
```

This will start:

- **Postgres** (with default dev credentials)
- **Backend (Node.js/Express/TypeORM)**
- **Frontend (Next.js + MUI)**

Once running:

- Frontend → [http://localhost:3000](http://localhost:3000)
- Backend → [http://localhost:5000](http://localhost:5000)

---

### Option 2: Run Services Manually

#### 1. Start Postgres in Docker

```sh
docker run -d \
  --name postgres-dev \
  -e POSTGRES_USER=devuser \
  -e POSTGRES_PASSWORD=devpass \
  -e POSTGRES_DB=devdb \
  -p 5432:5432 \
  postgres:15
```

#### 2. Start the Backend

```sh
cd backend
npm install
npm run dev
```

#### 3. Start the Frontend

```sh
cd frontend
npm install
npm run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file in the **backend** folder with:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=devuser
DB_PASSWORD=devpass
DB_NAME=devdb
PORT=5000
```

For the **frontend**, you can add environment variables in `.env.local` if needed (e.g. backend API URL):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, MUI
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL (Dockerized)
- **ORM:** TypeORM
