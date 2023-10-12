'use client';
import CallToAction from '@/src/forms/call-to-action';
import React, { use, useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from 'axios';



const ServiceDetailsArea = () => {
    const router = useRouter();
    const { id } = router.query; // Mengambil parameter 'id' dari URL
    const [slug, setSlug] = useState(''); // Menyimpan data API [slug
    const [job, setJob] = useState([]);
    const [description, setDescription] = useState([]);
    const [qualification, setQualification] = useState([]);
    const fetchData = async () => await axios.get(`https://testing.profectaperdana.com/api/job_vacancies/${id}`)
        .then(function (response) {
            // handle success
            setJob(response.data.data);
            setSlug(response.data.data.position);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    const fetchDataDescription = async () => await axios.get(`https://testing.profectaperdana.com/api/job_description/${id}`)
        .then(function (response) {
            // handle success
            setDescription(response.data.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    const fetchQualification = async () => axios.get(`https://testing.profectaperdana.com/api/job_qualification/${id}`)
        .then(function (response) {
            // handle success
            setQualification(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    //useEffect
    useEffect(() => {

        //call function "fetchData"
        fetchData();
        fetchDataDescription();
        fetchQualification();

    }, [id]);

    const slugLink = slug.split(' ').join('-').toLowerCase();
    return (
        <>
            { job ? (
                <div className="tp-service-details-area pt-115 pb-115">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 mb-20">
                                <button onClick={ () => router.back() } className="btn btn-danger w-10 rounded" href="#"><i className="fal fa-long-arrow-left"></i> Back </button>
                            </div>
                            <div className="col-xl-12">
                                <div className="tp-service-overveiw-area mr-20">
                                    <div className="tp-overview-details">
                                        <h2 className="overview-title">{ job.title }</h2>

                                        <h4 >{ job.position }</h4>

                                        <p>{ job.description }</p>
                                        {/* <p>{ info_2 }</p> */ }
                                        <div className="tp-overview-fea-list">
                                            <h4>Job description: </h4>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="tp-overview-feature">
                                                        <ul>
                                                            { description.map((item, i) =>
                                                                <li key={ i }>
                                                                    <i className="fal fa-check"></i>
                                                                    { item.name }
                                                                </li>
                                                            ) }
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="tp-overview-fea-list">
                                            <h4>Qualification: </h4>
                                            <div className="row">

                                                <div className="col-xl-6">
                                                    <div className="tp-overview-feature">
                                                        <ul>
                                                            { qualification.map((item, i) =>
                                                                <li key={ i }>
                                                                    <i className="fal fa-check"></i>
                                                                    { item.name }
                                                                </li>
                                                            ) }
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="tpservices__btn mt-50">
                                        <Link href={ `/form-apply/${slugLink}` }>
                                            <button className="tp-btn w-100 rounded" href="#">Apply Now <i className="fal fa-long-arrow-right"></i></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading job details...</p>
            ) }
        </>
    );
};

export default ServiceDetailsArea;