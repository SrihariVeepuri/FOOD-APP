import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Signin");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex wrap justify-between bg-pink-50 h-28  m-0 p-0 w-100% sticky top-0">
      <div className="flex items-center mx-4">
        <img
          className="w-10"
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt="app-logo"
        />
      </div>
      <div className="flex items-center justify-end">
        <ul className="flex">
          <li className="mx-2">OnlineStatus: {onlineStatus ? "✅" : "❌"}</li>
          <Link to="/">
            <li className="mx-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="mx-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="mx-2">Contact</li>
          </Link>
          <Link>
            <li className="mx-2">Cart</li>
          </Link>
          <Link to="/grocery">
            <li className="mx-2">Grocery</li>
          </Link>
        </ul>

        <button
          className="mx-2"
          onClick={() => {
            btnName === "Login" ? setBtnName("Signout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        <li className="mx-2 list-none">{loggedInUser}</li>
      </div>
    </div>
  );
};

export default Header;
