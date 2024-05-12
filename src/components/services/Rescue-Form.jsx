import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
export function Rescueform() {
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
            <h3>REGISTER FOR RESCUING AN ANIMAL</h3>
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
           <input
            type="text"
            placeholder=" Your Addrees"
            name="address"
            value={user.address}
            onChange={handlInputs}
          />
           <input
            type="text"
            placeholder=" Addrees where the animal was found"
            name="animaladdress"
            value={user.animaladdress}
            onChange={handlInputs}
          />
         
          <label for="option1">IS IT A DOG OR CAT</label>
          <select name="type" id="lang">
            <option value="Dog">DOG</option>
            <option value="cat">CAT</option>
          </select>
          <input
            type="text"
            placeholder=" Estimated Age of the animal"
            name="animalage"
            value={user.animalage}
            onChange={handlInputs}
          />
           <label for="option1">Severity of the wound</label>
          <select name="type" id="lang">
            <option value="minor">MINOR</option>
            <option value="major">MAJOR</option>
            <option value="major">SEVERE</option>
          </select>
          <Link to="/login">
            <button>Register a Case</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
