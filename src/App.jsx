import { Button } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const toggleFullScreen = () => {
    const element = document.getElementById("container-full");
    const isFullScreen = document.fullscreenElement;
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen();
    }
  };

  return (
    <div id="container-full ">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
