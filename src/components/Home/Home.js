import React from "react";
import "./Home.css";
import Main1 from "../Main1/Main1";
import Products from "../Products/Products";
import Products1 from "../Products1/Products1";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* Main-1  */}
      <Main1 />
      {/* Products  */}
      <Products />
      {/* Products-1  */}
      <Products1 />
      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Home;
