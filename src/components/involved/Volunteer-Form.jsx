import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
export function Volunteerform() {
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

  return (
    <div class="registersvr">
      <div class="svrform">
        <div class="svr">
          <div class="svr-header">
            <h3>REGISTER FOR VOLUNTEER</h3>
          </div>
        </div>
        <form class="svr-form">
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
            placeholder="Addrees"
            name="address"
            value={user.address}
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
            type="text"
            placeholder="AGE"
            name="age"
            value={user.age}
            onChange={handlInputs}
          />
           
          
          <label for="option1"></label>
          <select name="type" id="lang">
            <option value="gender">gender</option>
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
          </select>
          <label for="option1"></label>
          <select name="type" id="lang">
            <option value="type">TYPE OF VOLUNTEER</option>
            <option value="male">MEDICAL</option>
            <option value="female">REHAB/NON MEDICAL</option>
          </select>
          <input
            type="text"
            placeholder="AVAILABILITY"
            name="availibity"
            value={user.availabilty}
            onChange={handlInputs}
          /> <input
          type="text"
          placeholder="INTERESTS"
          name="interest"
          value={user.availabilty}
          onChange={handlInputs}
        />
          
          <Link to="/login">
            <button>Register for Adoption</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
