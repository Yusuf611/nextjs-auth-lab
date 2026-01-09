# 🔐 Secure Authentication & Authorization System (Next.js)

A full‑stack authentication system built with **Next.js App Router**, **MongoDB**, and **HTTP‑only cookies**. This project implements **secure login/logout**, **role‑based access control (RBAC)**, and **protected routes** without using JWT or localStorage.

---

## ✨ Features

* ✅ **User Authentication** – Signup & Login with hashed passwords
* 🍪 **Cookie‑Based Sessions** – HTTP‑only cookies (no localStorage)
* 🔐 **Role‑Based Access Control (RBAC)** – `user` & `admin`
* 🛡️ **Protected Routes** – Dashboard & Admin pages
* 👑 **Admin Panel** – Manage user roles
* 🎨 **Modern UI** – Tailwind CSS
* 🚀 **Next.js 16 App Router Compatible**

---

## 🧠 Tech Stack

* **Frontend & Backend:** Next.js (App Router)
* **Database:** MongoDB (Mongoose)
* **Auth:** Cookie‑based sessions
* **Styling:** Tailwind CSS

---

## 📂 Project Structure

```
.
├── app
│   ├── api
│   │   └── auth
│   │       ├── login/route.ts
│   │       ├── signup/route.ts
│   │       └── logout/route.ts
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── dashboard/page.tsx
│   ├── admin/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components
│   └── LogoutButton.tsx
├── lib
│   ├── db.ts
│   └── auth.ts
├── models
│   └── User.ts
├── .env.local
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a file named **`.env.local`** in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
```

Example (local MongoDB):

```env
MONGO_URI=mongodb://127.0.0.1:27017/next_auth_rbac
```

---

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🔑 Test Credentials

For testing purposes, you can log in using:

```
Email: test.example@gmail.com
Password: test
```

⚠️ **Note:** These credentials are for demo/testing only. Do not use real passwords in public repositories.

---

## 🔐 Authentication Flow

### 📝 Signup

* Endpoint: `POST /api/auth/signup`
* Stores a new user in MongoDB
* Password is securely hashed
* Default role: `user`

### 🔓 Login

* Endpoint: `POST /api/auth/login`
* Verifies credentials
* Sets a secure, HTTP‑only cookie

### 🚪 Logout

* Endpoint: `POST /api/auth/logout`
* Clears the session cookie
* User is redirected to `/login`

---

## 👑 Role‑Based Access Control (RBAC)

| Role  | Access                  |
| ----- | ----------------------- |
| User  | Dashboard only          |
| Admin | Dashboard + Admin Panel |

* Only **admins** can assign roles to other users
* Normal users cannot promote themselves

---

## 🛡️ Protected Routes

* `/dashboard` → Only accessible if logged in
* `/admin` → Only accessible if user role is `admin`

Route protection is implemented **server‑side** using cookies.

---

## 🧪 How to Verify Security

1️⃣ Logout → Try visiting `/dashboard`
➡ Redirects to `/login`

2️⃣ Login as non‑admin → Visit `/admin`
➡ Redirects to `/dashboard`

3️⃣ Admin login → Access `/admin`
➡ Allowed

---

## 🚀 Deployment

This project can be deployed on:

* **Vercel** (recommended)
* **Render / Railway / VPS**

Be sure to:

* Set `MONGO_URI` in production environment variables
* Use HTTPS for secure cookies

---

## 📌 Future Enhancements

* 🔁 Auto‑logout on inactivity
* 📧 Email verification & password reset
* 📊 Audit logs for admin actions
* 👥 Full user management dashboard

---

## 🧑‍💻 Author

Developed by **Yusuf**

---

## ⭐ Contribute

If you like this project:

* ⭐ Star the repo
* 🐛 Report issues
* 🤝 Submit pull requests

---

## 📜 License

This project is open‑source and free to use for educational purposes.
