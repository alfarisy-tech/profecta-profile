import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Footer from "../layout/footers/footer";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import { color } from "framer-motion";


const index = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 3);

    const calculateCountdown = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });
        } else {
            setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    useEffect(() => {
        const interval = setInterval(calculateCountdown, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <SEO pageTitle={ "Website is under developement" } />
            <HeaderOne />
            <div id="smooth-wrapper error_page">
                <div id="smooth-content">
                    <main>
                        <div className="tp-error-area tp-error-ptb p-relative">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8 ">
                                        <div className="card shadow mb-50 mt-50">
                                            <div className="tp-error-content-box text-center mb-50 mt-50">
                                                {/* <img src="/assets/img/text-404.png" alt="theme-pure" /> */ }
                                                <h1 style={ { fontSize: "3vw", color: "#84b544" } }>Website is under developement</h1>
                                                {/* <h4 className="error-title-sm">Oops.! Page Not Found!</h4> */ }
                                                <h4 className="mt-50 mb-30">If you're interested in joining us, please proceed to the button below.</h4>
                                                <Link href={ "/" }><button className="tp-btn-2">Join Us</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default index;
