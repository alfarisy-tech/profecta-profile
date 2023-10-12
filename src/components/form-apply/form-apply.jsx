import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark, faHourglassHalf, faHouse } from "@fortawesome/free-solid-svg-icons"
const CheckoutArea = () => {
    const router = useRouter();
    const slug = router.query.slug; // Mengambil parameter 'id' dari URL
    const slugString = String(slug);
    const position = slugString.split('-').join(' ').toLocaleUpperCase();



    // form data
    const [registerData, setRegisterData] = useState({
        position: '',
        nik: '',
        first_name: '',
        last_name: '',
        gender: '',
        date_of_birth: '',
        place_of_birth: '',
        address: '',
        phone_number: '',
        email: '',
        campus: '',
        major: '',
        file: '',
    });
    const [btnLoading, setBtnLoading] = useState(false);

    const changeHandler = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        setBtnLoading(true);
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(registerData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            setAlert({ message: responseData.message, status: responseData.status })
            setRegisterData({ name: '', email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            setBtnLoading(false);
        }, 1500);
    }
    return (
        <>


            <section className="checkout-area pb-70 pt-100 pb-30">
                <div className="container">
                    <form onSubmit={ submitHandler }>
                        <div className="row">
                            <div className="col-xl-12 mb-20">
                                <button onClick={ () => router.back() } className="btn btn-danger w-10 rounded" href="#"><i className="fal fa-long-arrow-left"></i> Back </button>
                            </div>
                            <div className="col-lg-12">
                                <div className="checkbox-form">
                                    <h3>Applican Data</h3>

                                    <div className="row">
                                        <div className="col-md-12 mb-20">
                                            <label>Position<span className="required">*</span></label>
                                            <input onChange={ changeHandler } readOnly name='position' className='form-control fw-bold text-uppercase' value={ position } type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-12 mb-20">
                                            <label>NIK <span className="required">*</span></label>
                                            <input value={ registerData.nik }
                                                onChange={ changeHandler } name='nik' className='form-control text-uppercase' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>First Name <span className="required">*</span></label>
                                            <input value={ registerData.first_name } onChange={ changeHandler } name='first_name' className='form-control text-uppercase' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input value={ registerData.last_name } onChange={ changeHandler } name='last_name' className='form-control text-uppercase' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <label>Gender <span className="required">*</span></label>
                                            <select value={ registerData.gender } onChange={ changeHandler } name='gender' defaultValue={ 'default' } className='form-select'>
                                                <option value={ 'default' } selected>-choose gender-</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <label> Date of Birth  <span className="required">*</span></label>
                                            <input value={ registerData.date_of_birth } onChange={ changeHandler } name='date_of_birth' className='form-control text-uppercase' type="date" placeholder="" />
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <label>
                                                Place of Birth
                                                <span className="required">*</span></label>
                                            <input value={ registerData.place_of_birth } onChange={ changeHandler } name='place_of_birth' className='form-control text-uppercase' type="text" placeholder="" />
                                        </div>

                                        <div className="col-md-12 mb-20">
                                            <label>Address <span className="required">*</span></label>
                                            <input value={ registerData.address } onChange={ changeHandler } name='address' className='form-control text-uppercase' type="text" placeholder="Street address" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Phone Number <span className="required">*</span></label>
                                            <input value={ registerData.phone_number } onChange={ changeHandler } name='phone_number' className='form-control text-uppercase' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Email <span className="required">*</span></label>
                                            <input value={ registerData.email } onChange={ changeHandler } name='email' className='form-control text-uppercase' type="mail" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Campus <span className="required">* (last education)</span></label>
                                            <input value={ registerData.campus } onChange={ changeHandler } name='campus' className='form-control text-uppercase' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Major <span className="required">* (last education)</span></label>
                                            <input value={ registerData.major } onChange={ changeHandler } name='major' className='form-control text-uppercase' type="mail" placeholder="" />
                                        </div>
                                        <div className="col-md-12 mb-50">
                                            <label>Upload Applications & CV <span className="required">* (make it into one pdf file)</span></label>
                                            <input value={ registerData.file } onChange={ changeHandler } name='file' className='form-control text-uppercase' type="file" placeholder="" />
                                        </div>

                                        <div className="col-md-12 mb-20">
                                            <button id="btn-register"
                                                type="submit"
                                                disabled={ btnLoading }
                                                className="tp-btn w-100 rounded"
                                            >{ !btnLoading ? 'Submit ' : (<><FontAwesomeIcon icon={ faHourglassHalf } spin spinReverse />   Loading...</>) } </button>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CheckoutArea;