# 📦 create-node-backend-app

A CLI tool to instantly scaffold a scalable **Node.js backend** using either **Mongoose (MongoDB)** or **Sequelize (MySQL/PostgreSQL)** — with modular folder structure, environment setup, and built-in best practices.

---

## 🚀 Features

- 🔧 Zero-config setup for backend projects
- 🏗️ Scalable folder structure (`controllers/`, `services/`, `routes/`, etc.)
- 🧪 Pre-configured Mongoose and Sequelize templates
- 🌱 Sequelize auto-initialization with `npx sequelize init`
- ✅ Includes `.env` config, logging, and modular utils

---

## 🛠️ Installation

You don’t need to install it globally — use `npx`:

```bash
npx create-node-backend-app
```

Or install globally:

```bash
npm install -g create-node-backend-app
```

---

## 🧪 Usage

```bash
create-node-backend-app
```

You’ll be prompted to:

1. Select a boilerplate (`mongoose` or `sequelize`)
2. Name your project directory

That’s it! Your project will be scaffolded automatically.

---

## 📁 Folder Structure

```
your-app/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 📘 Boilerplate Notes

### 🔹 Mongoose

- Connects with MongoDB via Mongoose
- `.env` should include:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-db
# or MongoDB Atlas
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db
```

### 🔹 Sequelize

- Initializes Sequelize automatically inside `src/`
- Modify DB credentials in `src/config/config.json`

```bash
cd your-app
cd src
npx sequelize init
```

---

## ✅ Scripts

```bash
npm run dev   # start with nodemon
npm start     # normal start
```

---

## 🧠 Pro Tips

- Use MongoDB Atlas or hosted MySQL for production-ready databases.
- Stick to the MVC-like structure for scalable codebases.
- You can extend the CLI to support more databases and features.

---

## 🤝 Contributing

Got improvements or want to add a new template (like PostgreSQL, Redis, or Firebase)?  
Open a PR or raise an issue on [GitHub](https://github.com/your-username/create-node-backend-app)

---

## 📄 License

MIT © [Your Name](https://github.com/your-username)