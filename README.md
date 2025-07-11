Sure Utsav! Here's a clean, **copy-paste ready README.md format** for your Contact Management System:

---

```markdown
# 📇 Contact Management System (Node.js + MongoDB + JWT)

A simple RESTful **Contact Management System** built using **Node.js**, **Express**, **MongoDB**, and **JWT** for user authentication. It allows users to register, log in, and manage their contacts securely.

---

## 🚀 Features

- ✅ User Registration & Login with JWT
- 🔐 Password hashing using Bcrypt
- 📁 CRUD operations for Contacts
- 🧰 MongoDB + Mongoose for data handling
- 🛡️ Protected routes using JWT middleware
- 📦 Express.js and Node.js backend


---

## 📁 Folder Structure
Contact-Management-System/
├── config/
│   └── dbConnection.js
├── controllers/
│   ├── contactController.js
│   └── userController.js
├── middleware/
│   ├── errorHandler.js
│   └── validateTokenHandler.js
├── models/
│   ├── contactModel.js
│   └── userModel.js
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
├── .env
├── package.json
└── server.js
```



````

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/utsav31703/Contact-Management-System.git
   cd Contact-Management-System
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root and add:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_jwt_secret
   ```

4. **Start the server**

   ```bash
   npm run dev
   ```

---

## 🧪 API Endpoints

### 🔑 User Routes

| Method | Route                 | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | `/api/users/register` | Register a new user    |
| POST   | `/api/users/login`    | Login user (get token) |
| GET    | `/api/users/current`  | Get current user info  |

### 📇 Contact Routes (Protected)

| Method | Route               | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/contacts`     | Get all contacts     |
| POST   | `/api/contacts`     | Create a new contact |
| GET    | `/api/contacts/:id` | Get single contact   |
| PUT    | `/api/contacts/:id` | Update contact       |
| DELETE | `/api/contacts/:id` | Delete contact       |

---

## 🧰 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JSON Web Tokens (JWT)
* Bcrypt
* dotenv
* express-async-handler

---

## 🙋‍♂️ Author

**Utsav Kushwaha**
GitHub: [@utsav31703](https://github.com/utsav31703)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 📌 Note

This is a backend-only API project. You can connect it with a frontend built using React, Angular, or any other framework of your choice.


