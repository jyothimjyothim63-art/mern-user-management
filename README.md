MERN User Management System

*Project Overview

This project is a full-stack User Management System built using the MERN stack (MySQL + Express + React + Node.js).

It allows users to register, login, and manage user data with complete CRUD functionality. The application demonstrates real-world full-stack development including frontend UI, backend APIs, and database integration.


*Features

- User Registration & Login
- View All Users (Dashboard)
- Edit User Details
- Delete Users
- REST API Integration
- Full Stack Implementation

*Tech Stack

*Frontend

- React.js
- CSS

*Backend

- Node.js
- Express.js

*Database

- MySQL

*Tools

- Postman (API Testing)
- Git & GitHub


*Project Structure

mern-user-management/
│
├── frontend/        # React application
├── backend/         # Node.js + Express server
├── Screenshots/     # Project screenshots
└── README.md

---

*Installation & Setup

1️⃣ Clone Repository

git clone https://github.com/jyothimjyothim63-art/mern-user-management.git
cd mern-user-management


2️⃣ Run Backend

cd backend
npm install
node server.js


3️⃣ Run Frontend

cd frontend
npm install
npm start


*API Endpoints

Method| Endpoint| Description
POST| /register| Register user
POST| /login| Login user
GET| /users| Get all users
PUT| /update/:id| Update user
DELETE| /delete/:id| Delete user


Screenshots

"Home" (Screenshots/React_app_home_screen.jpg)
[Register](Screenshots/Register page.jpg)
[Register 2](Screenshots/Register page (2).jpg)
[Login](Screenshots/Login page.jpg)
[Login 2](Screenshots/Login page(2).jpg)
[Dashboard](Screenshots/Dashboard page.jpg)
"After Edit" (Screenshots/Dashboard_after_edit.jpg)
"After Delete" (Screenshots/Dashboard_after_delete.jpg)
"Edit Name" (Screenshots/Edit_name_popup.jpg)
"Edit Email" (Screenshots/Edit_email_popup.jpg)
"Frontend Running" (Screenshots/frontend_running.jpg)
"Backend Running" (Screenshots/backend_server_running.jpg)
"Postman Login" (Screenshots/postman_login_api_test.jpg)
"Postman Register" (Screenshots/postman_register_api_test.jpg)

*API Testing

All APIs were tested using Postman, including:

- User Registration
- User Login
- Update User
- Delete User


*Future Improvements

- Add JWT Authentication
- Password encryption (bcrypt)
- Form validation
- UI enhancements
- Deployment (Vercel / Render)

*Conclusion

This project demonstrates a complete full-stack CRUD application with authentication and API integration, making it suitable for internships, academic submissions, and resume projects.
