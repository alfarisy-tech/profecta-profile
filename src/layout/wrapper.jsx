
import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "@/utils/utils";
import React, { useEffect } from "react";
import HeaderOne from "./headers/header";
import Footer from "./footers/footer";
const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <>
      <HeaderOne />
      { children }
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Wrapper;
