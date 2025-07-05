# 🧬 Sequelize Backend Boilerplate

A boilerplate for Node.js + Express.js applications using **MySQL** (or PostgreSQL/MariaDB) with **Sequelize ORM**.

---

## 📂 Folder Structure

```
.
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Initialize Sequelize (already done if using the CLI)

```bash
cd src
npx sequelize init
```

> This creates `models/`, `migrations/`, `seeders/`, and `config/config.json`

---

### 3. Edit the DB credentials in `src/config/config.json`

```json
{
  "development": {
    "username": "your-db-username",
    "password": "your-db-password",
    "database": "your-db-name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

---

### 4. Create a `.env` file

```env
PORT=3000
```

---

### 5. Run the server

```bash
npm run dev
```

---

## ✅ Features

- Sequelize ORM with migrations/seeds support
- MVC-style folder structure
- Error handling and route separation
- `.env` for easy config

---

## 📦 Scripts

| Command        | Description             |
|----------------|-------------------------|
| `npm run dev`  | Start with nodemon      |
| `npm start`    | Start normally          |
| `npx sequelize`| Run Sequelize CLI tools |

---

## 🧠 Tips

- Use `npx sequelize model:generate` to create new models
- Use `npx sequelize db:migrate` to apply migrations
- Store production DB credentials securely