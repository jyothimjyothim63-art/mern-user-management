const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ DB Connection
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "mern_project",
});

db.connect((err) => {
if (err) {
console.log("DB connection failed:", err);
} else {
console.log("Database connected");
}
});

// ✅ REGISTER
app.post("/register", (req, res) => {
const { name, email, password } = req.body;

const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

db.query(sql, [name, email, password], (err, result) => {
if (err) {
return res.json({ message: "Error registering user" });
}

res.json({ message: "User registered successfully" });

});
});

// ✅ LOGIN (IMPORTANT FIX)
app.post("/login", (req, res) => {
const { email, password } = req.body;

const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

db.query(sql, [email, password], (err, result) => {
if (err) {
console.log(err);
return res.json({ message: "Server error" });
}

if (result.length > 0) {  
  return res.json({ message: "Login successful" });  
} else {  
  return res.json({ message: "Invalid email or password" });  
}

});
});

// ✅ GET USERS
app.get("/users", (req, res) => {
db.query("SELECT * FROM users", (err, result) => {
if (err) {
console.log(err);
return res.json([]);
}
return res.json(result);
});
});

// ✅ DELETE USER
app.delete("/delete/:id", (req, res) => {
const id = req.params.id;

db.query("DELETE FROM users WHERE id = ?", [id], (err) => {
if (err) {
console.log(err);
return res.json({ message: "Delete failed" });
}
return res.json({ message: "User deleted" });
});
});

// ✅ UPDATE USER
app.put("/update/:id", (req, res) => {
const id = req.params.id;
const { name, email } = req.body;

db.query(
"UPDATE users SET name = ?, email = ? WHERE id = ?",
[name, email, id],
(err) => {
if (err) {
console.log(err);
return res.json({ message: "Update failed" });
}
return res.json({ message: "User updated" });
}
);
});

app.listen(3001, () => {
console.log("Server running on port 3001");
});

