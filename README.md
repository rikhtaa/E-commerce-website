# 🛒 Full-stack E-commerce Website

Frontend & Admin Panel built with [React](https://react.dev) and [Vite](https://vitejs.dev).  
Backend powered by [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com).

---

## ⚡ Features
- 🛍️ User-friendly **Frontend** for browsing and purchasing products  
- 🧑‍💼 **Admin Panel** for managing products, orders, and users  
- 🔐 Secure authentication for both users and admins using **JWT**  
- 💾 Fast and scalable data storage with **MongoDB**  
- 💳 Payment integrations via **Razorpay** and **Stripe**  
- ☁️ Image storage and management with **Cloudinary**  
- ⚙️ Organized full-stack structure for easy development and deployment  

---

## 🚀 Getting Started

Run the development servers for each part of the project:

| Part         | Folder     | Install Dependencies | Run Dev Server   |
|---------------|-------------|----------------------|------------------|
| Frontend      | `frontend`  | `npm install`        | `npm run dev`    |
| Admin Panel   | `admin`     | `npm install`        | `npm run dev`    |
| Backend       | `backend`   | `npm install`        | `npm run start`  |

**Notes:**  
- You can use `yarn`, `pnpm`, or `bun` instead of `npm` if you prefer.  
- Make sure you’re in the correct folder before running commands.

---

### 🖥️ Frontend
Open [http://localhost:5173](http://localhost:5173) to view the app.  
Edit [`src/App.jsx`](frontend/src/App.jsx) — the page auto-updates as you edit.

### 🧑‍💼 Admin Panel
Open [http://localhost:5174](http://localhost:5174) to view the admin panel.  
Edit [`src/App.jsx`](admin/src/App.jsx) — the page auto-updates as you edit.

---

## 🧩 Backend API
The backend provides RESTful API endpoints for users, products, carts, and orders.  
All routes are prefixed with `/api`.

- **User routes**: `/user/register`, `/user/login`, `/user/admin`  
- **Product routes**: `/product/list`, `/product/single`, `/product/add`, `/product/remove`  
- **Cart routes**: `/cart/get`, `/cart/add`, `/cart/update`  
- **Order routes**: `/order/place`, `/order/stripe`, `/order/razorpay`, `/order/userorders`, `/order/list`, `/order/status`, `/order/verifyStripe`, `/order/verifyRazorpay`  

> 🔒 Admin routes require authentication.  
> 🪪 User routes require JWT authentication.

---

## ⚙️ Environment Variables

Create a `.env` file in the `backend` folder and add the following:

```env
ADMIN_PASSWORD=your_admin_password
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
CLOUDINARY_NAME=your_cloudinary_cloud_name
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=your_razorpay_secret
```

---

## 🌐 Deploy on Vercel

The easiest way to deploy your app is through the **[Vercel Platform](https://vercel.com/)** — built by the creators of Next.js.

🔗 **Live Deployment:** [E-Commerce Website](https://e-commerce-website-u9cv.vercel.app/)

For more details, see the [React](https://react.dev) and [Node.js](https://nodejs.org) deployment documentation.


---

**Rekhta Menahil**
