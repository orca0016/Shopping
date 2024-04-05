import { Button } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
  // toggleFullScreen();
  return (
    <div id="container-full ">
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default App;
