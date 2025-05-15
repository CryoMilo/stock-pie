# Inventory Management System (Backend)

This is the backend service for a clean-architecture-based inventory management system for restaurants. Built with **Node.js**, **Express**, **TypeScript**, **Prisma ORM**, and **PostgreSQL** (hosted via Supabase). The service is containerized using **Docker**.

## 📦 Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL (Supabase)
- Docker
- Clean Architecture (Domain-Driven Design)

## 📁 Project Structure

```
src/
├── domain/          # Entities and Interfaces
├── application/     # Use Cases and Services
├── infrastructure/  # DB Repositories, Prisma client
├── routes/          # Express route handlers
├── config/          # Config and env setup
└── main.ts          # Entry point
```

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-user/inventory-backend.git
cd inventory-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and provide your Supabase PostgreSQL URL:

```env
DATABASE_URL=your-supabase-db-url
PORT=5000
```

### 4. Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start the App

```bash
npm run dev
```

---

## 🐳 Docker Setup

### 1. Build the Image

```bash
docker build -t inventory-backend .
```

### 2. Run with Docker Compose

```bash
docker-compose up
```

Make sure to configure your `.env` file or `docker-compose.yml` to connect to Supabase or a local PostgreSQL service.

---

## 📌 Features (MVP)

- ✅ Create / Read / Update / Delete Inventory Items
- ✅ Track stock levels
- 🔜 Image Upload via Supabase Storage
- 🔜 JWT Auth (optional)

---

## 🧠 Zustand Integration (Frontend)

This backend is designed to work with a Zustand-powered React frontend that supports optimistic updates and reduced API reliance.

---

## 🛠️ Author

Made with ❤️ by Damien @ShalPhyoke 🍜  
Attack on Titan references included by default 😤

---

## 📜 License

MIT
