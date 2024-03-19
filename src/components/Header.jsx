import { LockPersonRounded, SearchRounded } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/AiMentor-logo.png";

const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

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
    <div
      ref={headerRef}
      className={`navbar${
        sticky.isSticky ? " sticky" : ""
      } nav-scrolling w-full h-[60px] fixed bg-background-gray px-1 text-white flex justify-between items-center px-3`}
    >
      <div className="w-[50%] bg-slate-400 flex gap-5 ">
        <div className="logo">
          <img src={logo} alt="logo header" />
        </div>
        <div className="menu ml-5">
          <ul className="flex text-[#ffff] gap-4  ">
            <li>Home</li>
            <li>Pages</li>
            <li>Blogs</li>
            <li>Shop</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <div className="button-group">
        <IconButton disableRipple color="light" className="rounded-md">
          <SearchRounded className="ml-0 mx-2 text-6xl " />
        </IconButton>
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
    </div>
  );
};

export default Header;
