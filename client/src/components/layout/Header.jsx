import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/auth";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("user logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  console.log(">>>>");
  return (
    <div className="bg-slate-900 text-slate-200 z-10 fixed w-full top-0">
      <ToastContainer />
      <header className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-[30%]">Logo</div>
        <ul className="flex items-center justify-between w-[40%]">
          <Link to="/">
            <li className="px-4 py-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4 py-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4 py-2">Contact</li>
          </Link>
          <Link to="/shop">
            <li className="px-4 py-2">Shop</li>
          </Link>
          {!auth.user ? (
            <>
              <Link to="/register">
                <li className="px-4 py-2">Register</li>
              </Link>
              <Link to="/login">
                <li className="px-4 py-2">Login</li>
              </Link>
            </>
          ) : (
            <li className="px-4 py-2 cursor-pointer" onClick={handleLogout}>
              Logout
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
