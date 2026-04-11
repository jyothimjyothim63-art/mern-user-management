import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
const [users, setUsers] = useState([]);

useEffect(() => {
fetchUsers();
}, []);

const fetchUsers = async () => {
try {
const res = await axios.get("http://localhost:3001/users");
setUsers(res.data);
} catch (err) {
alert("Error fetching users");
}
};

// 🔴 DELETE
const deleteUser = async (id) => {
try {
await axios.delete(http://localhost:3001/delete/${id});
fetchUsers();
} catch {
alert("Delete failed");
}
};

// 🔵 UPDATE
const updateUser = async (id) => {
const name = prompt("Enter new name");
const email = prompt("Enter new email");

if (!name || !email) return;  

try {  
  await axios.put(`http://localhost:3001/update/${id}`, {  
    name,  
    email,  
  });  

  fetchUsers();  
} catch {  
  alert("Update failed");  
}

};

return (
<div style={styles.container}>
<div style={styles.card}>
<h2>User Dashboard</h2>

{users.map((user) => (  
      <div key={user.id} style={styles.userBox}>  
        <p><b>{user.name}</b></p>  
        <p>{user.email}</p>  

        <div>  
          <button  
            style={{ ...styles.btn, background: "orange" }}  
            onClick={() => updateUser(user.id)}  
          >  
            Edit  
          </button>  

          <button  
            style={{ ...styles.btn, background: "red" }}  
            onClick={() => deleteUser(user.id)}  
          >  
            Delete  
          </button>  
        </div>  
      </div>  
    ))}  

    <button style={styles.logout} onClick={() => window.location.href="/"}>  
      Logout  
    </button>  
  </div>  
</div>

);
}

// 🎨 UI STYLES
const styles = {
container: {
height: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "linear-gradient(to right, #4facfe, #00f2fe)",
},
card: {
background: "#fff",
padding: "30px",
borderRadius: "12px",
width: "350px",
boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
},
userBox: {
padding: "10px",
margin: "10px 0",
border: "1px solid #ddd",
borderRadius: "8px",
},
btn: {
margin: "5px",
padding: "5px 10px",
border: "none",
color: "#fff",
borderRadius: "5px",
cursor: "pointer",
},
logout: {
marginTop: "20px",
width: "100%",
padding: "10px",
background: "#333",
color: "#fff",
border: "none",
borderRadius: "8px",
cursor: "pointer",
},
};

export default Dashboard;
