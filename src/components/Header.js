import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Signin");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header-container">
      <div className="image-container">
        <img
          className="app-logo"
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt="app-logo"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>OnlineStatus: {onlineStatus ? "✅" : "❌"}</li>
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/about">
            <li>About</li>
          </Link>
          <Link className="link" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="link">
            <li>Cart</li>
          </Link>
          <Link to="/grocery" className="link">
            <li>Grocery</li>
          </Link>
        </ul>
      </div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            btnName === "Login" ? setBtnName("Signout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
