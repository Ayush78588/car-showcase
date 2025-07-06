# 🚗 Car Showcase

A full-stack web application where users can browse, add, and search car listings. Built with the MERN stack (MongoDB, Express, React, Node.js).


## 🔧 Tech Stack

### Frontend
- **React.js** with `react-router-dom`
- **Tailwind CSS**
- `react-hot-toast` for alerts
- Context API for Auth State
- Fetch API for Backend Communication

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- JWT Authentication via cookies
- `cookie-parser` for cookie handling
- `multer` for image uploads
- `dotenv` for environment config
- Protected Routes via custom middleware


## 🚀 Features

- 🔐 JWT Authentication with secure cookies
- 📦 Car listing CRUD (Create via form)
- 📷 Car image upload using `multer`
- 📁 Static file serving for images
- 🧠 Protected routes using Auth middleware
- 📡 Fully connected Frontend ↔ Backend

## 📌 API Endpoints

### Auth
- `POST /api/auth/user/registration`
- `POST /api/auth/user/login`
- `GET /api/auth/user/logout`
- `GET /api/auth/user/me`

### Car
- `GET /api/car/cardetails`
- `POST /api/car/add` _(Protected)_


