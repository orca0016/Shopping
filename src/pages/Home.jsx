import { Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  gsap.registerPlugin({ useGSAP });

  const container = useRef();

  useGSAP(() => {
    gsap.from(".el", {
      opacity: 0,
    });
    gsap.to(".el", {
      scrollTrigger: ".el", // start animation when ".box" enters the viewport
      y: 30,
      opacity: 1,
      once: false,
      duration: 1,
    });
  }, null);

  return (
    <>
      <div className="home-section   min-h-[100vh] bg-[#141414]">
        <div className="w-full h-[100%] justify-center  flex  py-36  flex-col px-28">
          <div>
            <Typography
              variant="h1"
              color="white"
              className="w-[100%] font-bold md:w-[100%] leading-3 "
            >
              The
              <span className="text-btn-card"> Future</span> <br />
              in Al Graphic <br />
              Generator
            </Typography>
          </div>
          <div className="w-[50%]">
            <Typography variant="caption" color={"white"} fontSize={"1.5rem"}>
              An Active OpenAI Token is Essential for Image Generation
            </Typography>
          </div>
          <Button
            sx={{ width: "150px", p: "10px" }}
            variant="contained"
            color="secondary"
            className="el"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="carsual-section    min-h-[100vh ] ">carsual</div>
    </>
  );
};

export default Home;
