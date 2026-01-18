---

# 🛒 Local Store E-commerce Platform

This project is a **Local Store E-commerce Platform** developed as part of a Full Stack Web Development task. The application allows users to browse products from a local store, add items to a shopping cart, and view selected products before checkout.

---

## 📌 Features

* Product listing with images, names, and prices
* Add products to shopping cart
* View cart items with quantity
* Simple checkout flow (no payment gateway)
* SQL-based data storage using MySQL

---

## 🛠️ Apps / Tools Used

* **VS Code** – Code editor
* **Node.js (LTS)** – Backend runtime
* **MySQL** – SQL database
* **MySQL Workbench** – Database management
* **Browser (Chrome / Edge)** – Frontend testing

---

## 🧱 Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: Node.js, Express
* **Database**: MySQL (SQL)

---

## 📁 Project Structure

```
local-store-ecommerce/
│
├── server.js
├── db.js
├── package.json
│
├── routes/
│   ├── products.js
│   └── cart.js
│
└── frontend/
    ├── index.html
    └── cart.html
```

---

## 🗄️ Database Setup

Create the database and tables using MySQL Workbench:

```sql
CREATE DATABASE ecommerce_db;
USE ecommerce_db;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price INT,
  image VARCHAR(255)
);

CREATE TABLE cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  quantity INT
);
```

Insert sample products:

```sql
INSERT INTO products (name, price, image) VALUES
('Rice Bag', 1200, 'https://via.placeholder.com/150'),
('Cooking Oil', 180, 'https://via.placeholder.com/150'),
('Sugar', 60, 'https://via.placeholder.com/150');
```

---

## ▶️ How to Run the Project

1. Open the project folder in **VS Code**
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the backend server:

   ```bash
   node server.js
   ```
4. Open `frontend/index.html` in a browser
5. Add products to the cart
6. Open `frontend/cart.html` to view cart items

---

## ✅ Task Requirements Fulfilled

* ✔ Product listings with images and prices
* ✔ Shopping cart functionality
* ✔ SQL database usage (MySQL)
* ✔ Local store e-commerce concept
* ✔ Matches Task-03 description

---

## 🧠 Submission Summary

Implemented a local store e-commerce platform using Node.js, Express, and MySQL with product listing and cart functionality backed by an SQL database.

---
