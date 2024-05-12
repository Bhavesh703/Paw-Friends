import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
export function Adoptionform() {
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
            <h3>REGISTER FOR ADOPTION</h3>
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
            placeholder=" Your Addrees"
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
           
          
          <label for="option1">ARE YOU A PET PARENT</label>
          <select name="type" id="lang">
            <option value="yes">YES</option>
            <option value="no">NO</option>
            <option value="was">WAS</option>
          </select>
          <input
            type="text"
            placeholder="NAME OF THE ANIMAL YOU WANT TO ADOPT"
            name="interestedanimal"
            value={user.interestedanimal}
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
