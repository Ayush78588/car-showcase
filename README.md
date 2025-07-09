# 🚗 Car Showcase

A full-stack web application where users can **browse**, **add**, **edit**, **delete** and **search car listings**. Built with the **MERN stack** (MongoDB, Express, React, Node.js), it offers a smooth UI, user authentication, and media upload support.

🔗 **Live Website**: [https://car-showcase-gamma-three.vercel.app](https://car-showcase-gamma-three.vercel.app)

---

## 🔧 Tech Stack

### Frontend
- **React.js** with `react-router-dom`
- `react-hot-toast` for user notifications
- Context API for Authentication State
- Conditional UI rendering (e.g. `MyCars`, `Logout`)
- `fetch` API to connect to backend
- Image preview and upload support
- Protected Routes for Authenticated Users

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- JWT Authentication (via Cookies)
- `cookie-parser` for cookie management
- `multer` for file uploads (images)
- `dotenv` for environment configuration
- Auth Middleware to protect sensitive routes
- CORS configured for frontend ↔ backend communication

---

## 🚀 Features

- 🔐 **JWT Auth** with secure cookies
- 👤 **User Registration / Login / Logout**
- 📦 **CRUD for Car Listings**
  - ✅ Create new car with image
  - 🧾 Update existing car details
  - ❌ Delete car listing
- 🧠 **User Dashboard**
  - `MyCars` section to view/update/delete own cars
- 🔍 **Search Bar** to search cars by name
- 📁 Static image serving (`/uploads`)
- 📡 Complete Frontend ↔ Backend integration

---

## 📌 API Endpoints

### 🔐 Auth

- `POST /api/auth/user/registration` — Register new user
- `POST /api/auth/user/login` — Login user
- `GET /api/auth/user/logout` — Logout user
- `GET /api/auth/user/me` — Get current logged-in user

### 🚗 Car

- `GET /api/car/cardetails` — Get all cars (public)
- `POST /api/car/add` — Add new car _(protected, with image upload)_
- `GET /api/car/mycars` — Get current user’s car listings _(protected)_
- `DELETE /api/car/:id/delete` — Delete a specific car _(protected)_
- `PUT /api/car/:id/update` — Update a specific car _(protected)_
- `GET /api/car/:id` — Get details of a single car by ID _(for editing)_

---

## ✅ Deployment

### Frontend
- Deployed on **Vercel**
- Public link: [https://car-showcase-gamma-three.vercel.app](https://car-showcase-gamma-three.vercel.app)

### Backend
- Deployed on **Render**

---

### 🚀 Run Frontend Locally — React + Parcel  
1. Clone the repo → `git clone https://github.com/Ayush78588/car-showcase && cd car-showcase/client`  
2. Install dependencies → `npm install`  
3. Start development server → `npm run start`  
4. Visit → `http://localhost:1234` in your browser  
💡 Make sure backend is running at the URL defined in your frontend `.env` or `BACKEND_URL` constant. You are using Parcel (v2), so no need for separate config — just ensure your `index.html` includes `<div id="root"></div>` and that your React app renders into it.  

---

### 🚀 Run Backend Locally — Node.js + Express + MongoDB  
1. Navigate to backend → `cd server`  
2. Install dependencies → `npm install`  
3. Create a `.env` file with `PORT=3000`, `MONGODB_URL=your_mongo_uri`, `JWT_SECRET=your_secret`, `FRONTEND_URL=http://localhost:1234`  
4. Start server →  `node server.js`  
💡 Make sure MongoDB is running (Atlas or local), and that your `uploads/` folder exists if you're handling images.



