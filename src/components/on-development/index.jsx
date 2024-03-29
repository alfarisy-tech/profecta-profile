
import HeaderOne from "@/src/layout/headers/header";
import TypeWriter from "typewriter-effect";
import Link from "next/link";

const index = () => {
    return (
        <>
            <div id="smooth-wrapper error_page">
                <div id="smooth-content">
                    <main>
                        <div className="tp-error-area tp-error-ptb p-relative">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8 ">
                                        <div className="card shadow mb-50 mt-50">
                                            <div
                                                className="tp-error-content-box text-center mb-50 mt-50"
                                                style={ { height: "300px" } }
                                            >
                                                {/* <img src="/assets/img/text-404.png" alt="theme-pure" /> */ }
                                                <h1
                                                    className="display-4 fw-bold"
                                                    style={ { color: "#84b544", height: "110px" } }
                                                >
                                                    <TypeWriter
                                                        onInit={ (typewriter) => {
                                                            typewriter
                                                                .typeString("Website is under developement")
                                                                .pauseFor(1000)
                                                                .deleteAll()
                                                                .typeString("Sorry for the inconvenience")
                                                                .start();
                                                        } }
                                                    />
                                                </h1>
                                                {/* <h4 className="error-title-sm">Oops.! Page Not Found!</h4> */ }
                                                <h4 className="mt-80 mb-30">
                                                    If you're interested in joining us, please proceed to
                                                    the button below.
                                                </h4>
                                                <Link href={ "/career" }>
                                                    <button className="tp-btn-2">Join Us</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default index