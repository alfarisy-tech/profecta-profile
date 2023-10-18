import service_data from '@/src/data/service-data';
import { faCarBattery } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { use, useState, useEffect } from 'react';
import Link from "next/link";
import { color } from 'framer-motion';
import axios from 'axios';
import Pagination from '@/src/common/pagination';

const ServiceArea = () => {
    const [job, setJob] = useState([]);
    const [pagination, setPagination] = useState({
        currentPage: 0,
        perPage: 0,
        total: 0
    });
    const fetchData = async (pageNumber = 1) => {
        const page = pageNumber ? pageNumber : pagination.currentPage;
        await axios.get(`https://testing.profectaperdana.com/api/job_vacancies?page=${page}`)
            .then(function (response) {
                // handle success
                setJob(response.data.data.data);
                setPagination(() => ({
                    currentPage: response.data.data.current_page,
                    perPage: response.data.data.per_page,
                    total: response.data.data.total
                }));
                console.log(pagination)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    const search = (e) => {
        const keyword = e.target.value;
        if (keyword != "") {
            const result = job.filter(job => {
                return job.title.toLowerCase().includes(keyword.toLowerCase());
            });
            setJob(result);
        }
        else {
            fetchData();
        }
    }
    //useEffect
    useEffect(() => {

        //call function "fetchData"
        fetchData();
    }, []);
    return (
        <>
            <div className="service-area pt-120 pb-55">
                <div className="container">
                    <div className="row mb-100">
                        <div className="col-xl-12">
                            <div className="input-group input-group-lg mb-3">
                                <button style={ { backgroundColor: "#84b544", color: "white" } } className="btn" id="basic-addon1"><i className='fa fa-search'></i></button>
                                <input onChange={ search } type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            //cek apakah data ada
                            job.length > 0

                                //looping data "roles" dengan "map"
                                ? job.map((item, i) => (
                                    <div key={ i } className="col-lg-4 col-md-6 rounded mb-50">
                                        <div className="tpservices rounded">

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
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <Pagination
                                currentPage={ pagination.currentPage }
                                perPage={ pagination.perPage }
                                total={ pagination.total }
                                onChange={ (pageNumber) => fetchData(pageNumber) }
                                position="center"
                                activeColor="#84b544"

                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;