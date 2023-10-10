import service_data from '@/src/data/service-data';
import { faCarBattery } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Link from "next/link";
import { color } from 'framer-motion';

const ServiceArea = () => {
    return (
        <>
            <div className="service-area pt-120 pb-55">
                <div className="container">
                    <div className="row">
                        { service_data.slice(10, 16).map((item, i) =>
                            <div key={ i } className="col-lg-4 col-md-6 rounded mb-20">
                                <div className="tpservices rounded">
                                    <div className="tpservices__thumb">
                                        <div className="fix"><a href="#"><img src={ item.img } alt="theme-pure" /></a></div>
                                    </div>
                                    <div className="tpservices__content">
                                        <i style={ { color: "#84b544" } } className="flaticon-group"></i>

                                        {/* <FontAwesomeIcon icon={ faCarBattery } style={ { fontSize: "10px" } } /> */ }
                                        <h3 className="tpservices__title">{ item.title }</h3>
                                        <p>{ item.description }</p>
                                    </div>
                                    <div className="tpservices__btn">
                                        <Link href={ "/career-details" }>
                                            <button className="tp-btn w-100 rounded" href="#">Job Details <i className="fal fa-long-arrow-right"></i></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </div>
                </div>
            </div >
        </>
    );
};

export default ServiceArea;