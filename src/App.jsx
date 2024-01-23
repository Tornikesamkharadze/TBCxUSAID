import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";

const App = () => {
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
        <Footer />
        <MobileFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
