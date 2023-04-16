import React from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

const Mainlayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Mainlayout;
