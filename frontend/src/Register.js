import { useState } from "react";
import axios from "axios";

function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const handleRegister = async (e) => {
e.preventDefault();

try {  
  const res = await axios.post("http://localhost:3001/register", {  
    name,  
    email,  
    password,  
  });  

  alert(res.data.message);  
  window.location.href = "/";  
} catch (err) {  
  setMessage("Error registering user");  
}

};

return (
<div style={styles.container}>
<div style={styles.card}>
<h2>Register</h2>

<form onSubmit={handleRegister}>  
      <input  
        type="text"  
        placeholder="Enter Name"  
        value={name}  
        onChange={(e) => setName(e.target.value)}  
        required  
        style={styles.input}  
      />  

      <input  
        type="email"  
        placeholder="Enter Email"  
        value={email}  
        onChange={(e) => setEmail(e.target.value)}  
        required  
        style={styles.input}  
      />  

      <input  
        type="password"  
        placeholder="Enter Password"  
        value={password}  
        onChange={(e) => setPassword(e.target.value)}  
        required  
        style={styles.input}  
      />  

      <button type="submit" style={styles.button}>  
        Register  
      </button>  
    </form>  

    <p style={{ color: "red" }}>{message}</p>  

    <p>  
      Already have an account? <a href="/">Login</a>  
    </p>  
  </div>  
</div>

);
}

const styles = {
container: {
height: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "linear-gradient(to right, #00c6ff, #0072ff)",
},
card: {
background: "#fff",
padding: "30px",
borderRadius: "10px",
width: "300px",
textAlign: "center",
},
input: {
width: "100%",
padding: "10px",
margin: "10px 0",
},
button: {
width: "100%",
padding: "10px",
background: "#28a745",
color: "#fff",
border: "none",
cursor: "pointer",
},
};

export default Register;
