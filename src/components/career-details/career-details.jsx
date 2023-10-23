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
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const fetchData = async () => await axios.get(`https://testing.profectaperdana.com/api/job_vacancies/${id}`)
        .then(function (response) {
            // handle success
            const jobVacancies = response.data.data;

            setJob(response.data.data);
            setSlug(response.data.data.position);
            setDescription(jobVacancies.job_description);
            setQualification(jobVacancies.job_qualification);
            setQuestion(jobVacancies.job_question);
            setAnswer(jobVacancies.job_question.quest_answer);
            // console.log(jobVacancies.job_question);
        })
        .catch(function (error) {
            // handle error
        })


    //useEffect
    useEffect(() => {

        //call function "fetchData"
        fetchData();


    }, [id]);

    const slugLink = slug.split(' ').join('-').toLowerCase();
    return (
        <>
            { job ? (
                <div className="tp-service-details-area pt-115 pb-115">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 mb-20 ">
                                <button onClick={ () => router.back() } className="btn shadow btn-danger w-10 rounded" href="#"><i className="fal fa-long-arrow-left"></i> Back </button>
                            </div>
                            <div className="col-xl-12">
                                <div className="tp-service-overveiw-area mr-20">
                                    <div className="tp-overview-details shadow border-0" style={ { backgroundColor: "#f9fff4" } }>
                                        <p>Post : { job.date_post } | <span> Ended : { job.end_date }</span></p>
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
                                    <div className="tpservices__btn mt-50 ">
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