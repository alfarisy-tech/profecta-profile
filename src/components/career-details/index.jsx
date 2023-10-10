import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import CareerDetail from "./career-details";
import Footer from "@/src/layout/footers/footer";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Career Details" innertitle="Career Details" />
      <CareerDetail />
      <Footer />
    </>
  );
};

export default ServiceDetails;
