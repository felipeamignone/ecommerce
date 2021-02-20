import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
