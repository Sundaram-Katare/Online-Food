# 🍽️ BiteBase - Food Ordering System API

**BiteBase** is a full-featured backend API for a food ordering system built using **Node.js**, **Express.js**, **PostgreSQL (NeonDB)**, and **JWT authentication**. It supports **role-based access** for users and admins, including features like cart management, order placement, and food item management with image uploads.

---

## 🚀 Features

### 👤 User
- View available food items
- Add, update, and remove items from cart
- Place orders from the cart
- View order history

### 🛠️ Admin
- Add new food items with image upload
- Edit existing items (name, description, price, image)
- Delete food items

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (NeonDB)
- **ORM/Driver**: pg
- **Authentication**: JWT (JSON Web Token)
- **Image Upload**: Multer
- **Containerization**: Docker
- **Syntax**: ES Modules (ESM)

---

## 📁 Project Structure
<img width="270" height="576" alt="image" src="https://github.com/user-attachments/assets/cba02427-95da-41f2-aba8-2b928b1ec075" />


## 🔐 Authentication & Roles

- JWT tokens are used for secure access.
- Two roles:
  - `user`: can view items, manage cart, and place orders.
  - `admin`: can manage food items (CRUD + image upload).

---


## 📦 API Endpoints

### 🔐 Auth

- `POST /api/auth/register`  
  _Register a new user or admin._

- `POST /api/auth/login`  
  _Login and receive a JWT token._

---

### 🍽️ Food Items

- `GET /api/food/`  
  _View all food items._

- `POST /api/food/`  
  _(Admin only)_ Add a new food item.

- `PUT /api/food/:id`  
  _(Admin only)_ Edit an existing food item.

- `DELETE /api/food/:id`  
  _(Admin only)_ Delete a food item.

---

### 🛒 Cart (User only)

- `POST /api/cart/`  
  _Add an item to the cart._

- `GET /api/cart/`  
  _View items in the cart._

- `PUT /api/cart/:id`  
  _Update a specific cart item._

- `DELETE /api/cart/:id`  
  _Remove a specific item from the cart._

## 🐳 Docker Usage

```bash
# Build Docker image
docker build -t bitebase .

# Run Docker container
docker run -p 5000:5000 bitebase

```
---

## Create a .env
```bash
PORT=5000
DATABASE_URL=your_neondb_url
JWT_SECRET=your_secret_key
```
