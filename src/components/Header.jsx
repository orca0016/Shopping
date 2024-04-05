import {
  LockPersonRounded,
  MenuRounded,
  SearchRounded,
  ArrowLeftOutlined,
  CloseRounded,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { stagger, useAnimate } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/AiMentor-logo.png";
import { Menu } from "./Header/Menu";
import { MenuToggle } from "./Header/MenuToggle";
import Search from "./Search";

import MainContext from "../context";
const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className={`navbar${
          sticky.isSticky ? " sticky" : ""
        }  w-full h-[60px] fixed text-white items-center px-3`}
      >
        <div className=" flex gap-5 ">
          <div>
            <img src={logo} alt="logo header" className="my-auto" />
          </div>
        </div>
        <div className="menu  h-[60px] ml-5 max-md:hidden mr-auto">
          <ul className="flex h-[60px]   menu-item   text-[#ffff] gap-4  ">
            <li className="my-auto">
              <div className="item-header">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </div>
            </li>
            <li>
              <div className="item-header">  <ArrowLeftOutlined className="arrow-header" />Pages</div>
             
              <ul>
                <li>
                  <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    F&Q
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    Pricing
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div className="item-header"><ArrowLeftOutlined className="arrow-header" />Blogs</div>
              <ul>
                <li>
                <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
              </ul>
            </li>
            <li>
              <div className="item-header"><ArrowLeftOutlined className="arrow-header" />Shop</div>
              <ul>
                <li>
                  <NavLink
                    to="/checkout"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    Checkout
                  </NavLink>
                </li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
              </ul>
            </li>
            <li>
              <div className="item-header">Contacts</div>
            </li>
          </ul>
        </div>
        <div className="button-group flex items-center max-md:hidden">
          <Search />
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              borderRadius: "8px",
              "&:hover": {
                background: "#7f00ff",
              },
            }}
            className="rounded-md  text-btn-card"
            color="secondary"
            startIcon={<LockPersonRounded className="ml-0 mx-2 " />}
          >
            login
          </Button>
        </div>
        <div className="btn-res max-md:flex  hidden">
          <IconButton
            className="p-6"
            disableRipple
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
           
            {drawerOpen ?  (<CloseRounded/>) :  (<MenuRounded/>)}
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;
