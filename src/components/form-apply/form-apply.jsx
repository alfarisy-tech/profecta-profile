import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { z } from 'zod';
import { json } from 'react-router-dom';
import axios from 'axios';

// ** FORM VALIDATION



const CheckoutArea = () => {
    const router = useRouter();
    const [position, setPosition] = useState('');
    const [errors, setErrors] = useState([]);
    const [btnLoading, setBtnLoading] = useState(false);
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
    });
    const [imageData, setImageData] = useState(null);



    // ** USE EFFECT
    useEffect(() => {
        if (router.query.slug) {
            const slugString = String(router.query.slug);
            const newPosition = slugString.split('-').join(' ').toLocaleUpperCase();
            setPosition(newPosition);
            setRegisterData({ ...registerData, position: newPosition });
        }
    }, [router.query.slug]);

    // ** CHANGE HANDLER
    const changeHandler = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };
    const fileHandler = (e) => {
        const selectedFile = e.target.files[0];
        setImageData(selectedFile);
    };

    // console.log(registerData);
    // console.log(imageData);

    // ** SUBMIT HANDLER
    const submitHandler = async (e) => {
        e.preventDefault();
        setBtnLoading(true);
        const formData = new FormData();

        // Append registerData as a field named 'data'
        formData.append('data', JSON.stringify(registerData));

        // Append imageData as a field named 'image'
        formData.append('image', imageData);
        await axios.post('https://testing.profectaperdana.com/api/job_vacancies', formData, {
            //header
            headers: {
                //header Bearer + Token
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you for applying',
                    text: 'We will contact you soon',
                });
                router.push('/');

            })
            .catch(error => {
                // if (error.response.status === 421) {
                //     Swal.fire({
                //         icon: 'error',
                //         title: 'Oops...',
                //         text: 'The file must be a PDF',
                //     });
                // }
                setErrors(error.response.data);
            })
            .finally(() => {
                setBtnLoading(false);
            })


    };

    return (
        <>


            <section className="checkout-area pb-70 pt-100 pb-30">
                <div className="container">

                    <div className="row">
                        <div className="col-xl-12 mb-20">
                            <button onClick={ () => router.back() } className="btn btn-danger w-10 rounded" href="#"><i className="fal fa-long-arrow-left"></i> Back </button>
                        </div>
                        <form onSubmit={ submitHandler } encType='multipart/form-data'>
                            <div className="col-lg-12">
                                <div className="checkbox-form">
                                    <h3>Applicant Data</h3>

                                    <div className="row">
                                        <div className="col-md-12 mb-20">
                                            <label>Position<span className="required">*</span></label>
                                            <input readOnly name='position' id='position' className='form-control fw-bold text-uppercase' value={ position } type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-12 mb-20">
                                            <label>NIK <span className="required">*</span> </label>
                                            <input value={ registerData.nik }
                                                onChange={ changeHandler } name='nik' className='form-control text-uppercase' type="text" placeholder="Nomor Induk Kependudukan " />
                                            { errors.nik && (
                                                <div className="text text-danger">
                                                    { errors.nik[0] }
                                                </div>
                                            ) }
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>First Name <span className="required">*</span></label>
                                            <input value={ registerData.first_name } onChange={ changeHandler } name='first_name' className='form-control text-capitalized' type="text" placeholder="Nama Depan" />
                                            { errors.first_name && (
                                                <div className="text text-danger">
                                                    { errors.first_name[0] }
                                                </div>
                                            ) }

                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input value={ registerData.last_name } onChange={ changeHandler } name='last_name' className='form-control text-capitalized' type="text" placeholder="Nama Belakang" />
                                            { errors.last_name && (
                                                <div className="text text-danger">
                                                    { errors.last_name[0] }
                                                </div>
                                            ) }

                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <label>Gender <span className="required">*</span></label>
                                            <select value={ registerData.gender } onChange={ changeHandler } name='gender' className='form-select'>
                                                <option value={ '' } >--Choose Gender--</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                            { errors.gender && (
                                                <div className="text text-danger">
                                                    { errors.gender[0] }
                                                </div>
                                            ) }
                                        </div>

                                        <div className="col-md-4 mb-20">
                                            <label> Date of Birth  <span className="required">*</span></label>
                                            <input value={ registerData.date_of_birth } onChange={ changeHandler } name='date_of_birth' className='form-control text-uppercase' type="date" placeholder="" />
                                            { errors.date_of_birth && (
                                                <div className="text text-danger">
                                                    { errors.date_of_birth[0] }
                                                </div>
                                            ) }
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <label>
                                                Place of Birth
                                                <span className="required">*</span></label>
                                            <input value={ registerData.place_of_birth } onChange={ changeHandler } name='place_of_birth' className='form-control text-capitalized' type="text" placeholder="Tempat Lahir" />
                                            { errors.place_of_birth && (
                                                <div className="text text-danger">
                                                    { errors.place_of_birth[0] }
                                                </div>
                                            ) }
                                        </div>

                                        <div className="col-md-12 mb-20">
                                            <label>Address <span className="required">*</span></label>
                                            <input value={ registerData.address } onChange={ changeHandler } name='address' className='form-control text-capitalized' type="text" placeholder="Alamat" />
                                            { errors.address && (
                                                <div className="text text-danger">
                                                    { errors.address[0] }
                                                </div>
                                            ) }
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Phone Number <span className="required">*</span></label>
                                            <input value={ registerData.phone_number } onChange={ changeHandler } name='phone_number' className='form-control text-capitalized' type="text" placeholder="Nomor Telepon" />
                                            { errors.phone_number && (
                                                <div className="text text-danger">
                                                    { errors.phone_number[0] }
                                                </div>
                                            ) }
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Email <span className="required">*</span></label>
                                            <input value={ registerData.email } onChange={ changeHandler } name='email' className='form-control text-capitalized' type="mail" placeholder="Alamat Surel" />
                                            { errors.email && (
                                                <div className="text text-danger">
                                                    { errors.email[0] }
                                                </div>
                                            ) }
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Campus <span className="required">* (last education)</span></label>
                                            <input value={ registerData.campus } onChange={ changeHandler } name='campus' className='form-control text-capitalized' type="text" placeholder="Sekolah/Universitas" />
                                            { errors.campus && (
                                                <div className="text text-danger">
                                                    { errors.campus[0] }
                                                </div>
                                            ) }
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Major <span className="required">* (last education)</span></label>
                                            <select value={ registerData.major } onChange={ changeHandler } name='major' className='form-select'>
                                                <option value={ '' } >--Choose Major--</option>
                                                <option value="SLTA/SMK/MA/D-1">SLTA/SMK/MA/D-1</option>
                                                <option value="D-II">D-II</option>
                                                <option value="D-III">D-III</option>
                                                <option value="S-1/D-IV/PROFESI">S-1/D-IV/PROFESI</option>
                                                <option value="S-2/SPESIALIS">S-2/SPESIALIS</option>
                                                <option value="S-3">S-3</option>
                                                <option value="TENAGA KESEHATAN">TENAGA KESEHATAN</option>
                                            </select>

                                            { errors.major && (
                                                <div className="text text-danger">
                                                    { errors.major[0] }
                                                </div>
                                            ) }
                                        </div>
                                        <div className="col-md-12 mb-50">
                                            <label>Applications & CV <span className="required">* (PDF)</span></label>
                                            <input value={ registerData.file } accept='application/pdf' onChange={ fileHandler } name='file' className='form-control' type="file" placeholder="" />
                                            { errors && (
                                                <div className="text text-danger">
                                                    { errors[0] }
                                                </div>
                                            ) }
                                        </div>

                                        <div className="col-md-12 mb-20">
                                            <button id="btn-register"
                                                type="submit"
                                                disabled={ btnLoading }
                                                className="tp-btn w-100 rounded"
                                            >{ !btnLoading ? 'Submit ' : (<>Loading...</>) } </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckoutArea;