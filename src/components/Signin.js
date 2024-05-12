import React from "react";
import { useNavigate, Link} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function Signin() {
  const navigate = useNavigate
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handlInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
const Post = async (e) => {
e.preventDefault();
const {name,email,phone,password,cpassword} = user;
/* const res = await fetch("/register",{
method: "POST",
header:{
  "Content-Type" : "application/json"
},
body:JSON.stringify({
  name,email,phone,password,cpassword

})
}); */
try { 
  await axios.post("http://localhost:5000/",{
    user
  })
}
catch(e){
  console.log(e)
}
// const data = await res.json();
// if (data.status === 422 || !data){
//   window.alert("failed");
//   console.log ("failed");
// }
// else {
//   window.alert("success");
//   console.log ("success");
//  /*  navigate("./login") */
// }
}
  return (
    <div class="signin-page">
      <div class="signinform">
        <div class="signin">
          <div class="signin-header">
            <h3>SIGNUP</h3>
            <p>Please create your account.</p>
          </div>
        </div>
        <form  method="POST"class="signin-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handlInputs}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handlInputs}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handlInputs}
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={handlInputs}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="cpassword"
            value={user.cpassword}
            onChange={handlInputs}
          />
          <Link to="/login">
            <button name="signup" value="register" onClick={Post}>SIGNUP</button>
          </Link>
          <p class="message">
            <Link to="/login">ALREADY HAVE AN ACCOUNT</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
