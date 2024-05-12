import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
export function Svr() {
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
            <h3>REGISTER FOR STERALIZATION/VACCINATION</h3>
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
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handlInputs}
          />
          {/* <h6> Please select the services</h6>
          <input
            type="radio"
            id="option1"
            name="radio-option"
            value="Option 1"
            className="radio"
          />
          <label for="option1">Vaccination</label>
          <input
            type="radio"
            id="option2"
            name="radio-option"
            value="Option 1"
          />*/}
          <label for="option1">SERVICES YOU WANT</label>
          <select name="SERVICES" id="lang">
            <option value="vaccination">VACCINATION</option>
            <option value="sterilization">STERALIZATION</option>
          </select>
          <label for="option1">DO YOU HAVE A DOG OR CAT</label>
          <select name="type" id="lang">
            <option value="Dog">DOG</option>
            <option value="cat">CAT</option>
          </select>
          <Link to="/login">
            <button>Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
