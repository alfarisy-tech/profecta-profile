import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import FormApply from "./form-apply";
import Footer from "@/src/layout/footers/footer";

const Checkout = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Form-Apply" innertitle="Form-Apply" />
      <FormApply />
      <Footer />
    </>
  );
};

export default Checkout;
