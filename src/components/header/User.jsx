import React, { useContext, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";
import { Context } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const User = ({ closeMobileMenu }) => {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
    closeMobileMenu();
    navigate('/');
  };

  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false);
  };

  const PublicFlo = "https://taara-backend.onrender.com/images/";

  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => { 
                setProfileOpen(!profileOpen);
                console.log('Profile Open (inside User):', !profileOpen);
              }}
            >
              <img
                src="https://www.blookup.com/static/images/single/profile-1.edaddfbacb02.png"
                alt=""
              />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems">
                <button className="closeProfileMenu" onClick={() => setProfileOpen(false)}>
                  <FaTimes />
                </button>
                <Link to={"/account"} >
                  <div className="image">
                    <div className="img">
                      <img
                        src="https://www.blookup.com/static/images/single/profile-1.edaddfbacb02.png"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h4>{user.username}</h4>
                      <label>India, Delhi</label>
                    </div>
                  </div>
                </Link>
                <button className="box" onClick={() => navigate("/create")} >
                  <RiImageAddLine className="icon" />
                  <h4>Create Post</h4>
                </button>
                <button className="box" onClick={() => navigate("/account")} >
                  <IoSettingsOutline className="icon" />
                  <h4>My Account</h4>
                </button>
                {/* <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button> */}
                {/* <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button> */}
                <button className="box" onClick={() => navigate("/help")} >
                  <GrHelp className="icon" />
                  <h4>Help</h4>
                </button>
                <button className="box" onClick={handleLogout}>
                  <BiLogOut className="icon" />
                  {user && <h4>Log Out</h4>}
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">
            <button>My Account</button>
          </Link>
        )}
      </div>
    </>
  );
};
