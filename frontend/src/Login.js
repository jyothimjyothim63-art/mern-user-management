import React, { useState } from "react";
import axios from "axios";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (e) => {
e.preventDefault();

axios  
  .post("http://localhost:3001/login", {  
    email,  
    password,  
  })  
  .then((res) => {  
    if (res.data.message === "Login successful") {  
      window.location.href = "/dashboard";  
    } else {  
      setMessage(res.data.message);  
    }  
  })  
  .catch(() => {  
    setMessage("Error while login");  
  });

};

return (
<div style={styles.container}>
<div style={styles.card}>
<h2>Login</h2>

<form onSubmit={handleSubmit}>  
      <input  
        type="email"  
        placeholder="Email"  
        onChange={(e) => setEmail(e.target.value)}  
        required  
      />  

      <input  
        type="password"  
        placeholder="Password"  
        onChange={(e) => setPassword(e.target.value)}  
        required  
      />  

      <button type="submit">Login</button>  
    </form>  

    <p style={{ color: "red" }}>{message}</p>  
  </div>  
</div>

);
}

const styles = {
container: { display: "flex", justifyContent: "center", marginTop: "100px" },
card: { padding: "30px", border: "1px solid #ccc" },
};

export default Login;