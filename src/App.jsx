// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.routId}
              path={route.path}
              index={route.index}
              element={route.element}
            />
          ))}
        </Routes>
        {isMobile ? <MobileFooter /> : <Footer />}
      </BrowserRouter>
    </>
  );
};

export default App;
