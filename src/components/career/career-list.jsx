import service_data from '@/src/data/service-data';
import { faCarBattery } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { use, useState, useEffect } from 'react';
import Link from "next/link";
import { color } from 'framer-motion';
import axios from 'axios';

const ServiceArea = () => {


    const [job, setJob] = useState([]);
    const fetchData = () => axios.get('https://testing.profectaperdana.com/api/job_vacancies')
        .then(function (response) {
            // handle success
            setJob(response.data.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    //useEffect
    useEffect(() => {

        //call function "fetchData"
        fetchData();

    }, []);
    return (
        <>
            <div className="service-area pt-120 pb-55">
                <div className="container">
                    <div className="row">
                        {
                            //cek apakah data ada
                            job.length > 0

                                //looping data "roles" dengan "map"
                                ? job.map((item, i) => (
                                    <div key={ i } className="col-lg-4 col-md-6 rounded mb-50">
                                        <div className="tpservices rounded">
                                            {/* <div className="tpservices__thumb">
                                        <div className="fix"><a href="#"><img src={ item.img } alt="theme-pure" /></a></div>
                                    </div> */}
                                            <div className="tpservices__content">
                                                <i style={ { color: "#84b544" } } className="flaticon-group"></i>

                                                {/* <FontAwesomeIcon icon={ faCarBattery } style={ { fontSize: "10px" } } /> */ }
                                                <h3 className="tpservices__title">{ item.title }</h3>
                                                <p>{ item.description }</p>
                                            </div>
                                            <div className="tpservices__btn">
                                                <Link href={ `/career-detail/${item.id}` }>
                                                    <button className="tp-btn w-100 rounded" href="#">Job Details <i className="fal fa-long-arrow-right"></i></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : <div className="row justify-content-center">
                                    <div className="col-xl-8 ">
                                        <div className="card shadow mb-50">
                                            <div className="tp-error-content-box text-center mb-50 mt-50">
                                                {/* <img src="/assets/img/text-404.png" alt="theme-pure" /> */ }
                                                <h1 style={ { fontSize: "3vw", color: "#84b544" } }>There are no vacancies at this time. Thank You</h1>
                                                {/* <h4 className="error-title-sm">Oops.! Page Not Found!</h4> */ }
                                                <h4 className="mt-50 mb-30">Please come back later.</h4>
                                                <Link href={ "/" }><button className="tp-btn-2">Home</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;