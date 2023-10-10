import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
const CheckoutArea = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isShipOpen, setIsShipOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCodeOpen, setIsCodeOpen] = useState(false);
    axios.get('https://equran.id/api/v2/surat')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    return (
        <>


            <section className="checkout-area pb-70 pt-100 pb-30">
                <div className="container">
                    <form onSubmit={ e => e.preventDefault() }>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="checkbox-form">
                                    <h3>Applican Data</h3>

                                    <div className="row">
                                        <div className="col-md-12 mb-20">
                                            <label>NIK <span className="required">*</span></label>
                                            <input className='form-control' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>First Name <span className="required">*</span></label>
                                            <input className='form-control' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input className='form-control' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <label>Gender <span className="required">*</span></label>
                                            <select className='form-select'>
                                                <option selected>-choose gender-</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <label> Date of Birth  <span className="required">*</span></label>
                                            <input className='form-control' type="date" placeholder="" />
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <label>
                                                Place of Birth
                                                <span className="required">*</span></label>
                                            <input className='form-control' type="text" placeholder="" />
                                        </div>

                                        <div className="col-md-12 mb-20">
                                            <label>Address <span className="required">*</span></label>
                                            <input className='form-control' type="text" placeholder="Street address" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Phone Number <span className="required">*</span></label>
                                            <input className='form-control' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Email <span className="required">*</span></label>
                                            <input className='form-control' type="mail" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Campus <span className="required">* (last education)</span></label>
                                            <input className='form-control' type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Major <span className="required">* (last education)</span></label>
                                            <input className='form-control' type="mail" placeholder="" />
                                        </div>
                                        <div className="col-md-12 mb-50">
                                            <label>Upload Applications & CV <span className="required">* (make it into one pdf file)</span></label>
                                            <input className='form-control' type="file" placeholder="" />
                                        </div>

                                        <div className="col-md-12 mb-20">
                                            <Link href={ "/form-apply" }>
                                                <button className="tp-btn w-100 rounded" href="#">Submit <i className="fal fa-long-arrow-right"></i></button>
                                            </Link>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            {/* <div className="col-lg-6">
                                <div className="your-order mb-30 ">
                                    <h3>Your order</h3>
                                    <div className="your-order-table table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="cart_item">
                                                    <td className="product-name">
                                                        Vestibulum suscipit <strong className="product-quantity"> × 1</strong>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="amount"> $ 165.00</span>
                                                    </td>
                                                </tr>
                                                <tr className="cart_item">
                                                    <td className="product-name">
                                                        Vestibulum dictum magna <strong className="product-quantity"> × 1</strong>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="amount"> $ 50.00</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr className="cart-subtotal">
                                                    <th>Cart Subtotal</th>
                                                    <td><span className="amount">$ 215.00</span></td>
                                                </tr>
                                                <tr className="shipping">
                                                    <th>Shipping</th>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                <input type="radio" name="shipping" />  { " " }
                                                                <label>Flat Rate: <span className="amount">$ 7.00</span> </label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" name="shipping" /> { " " }
                                                                <label>Free Shipping:</label>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Order Total</th>
                                                    <td><strong><span className="amount">$ 215.00</span></strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="payment-method">
                                        <div className="accordion" id="checkoutAccordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="checkoutOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
                                                        Direct Bank Transfer
                                                    </button>
                                                </h2>
                                                <div id="bankOne" className="accordion-collapse collapse show" aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="paymentTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
                                                        Cheque Payment
                                                    </button>
                                                </h2>
                                                <div id="payment" className="accordion-collapse collapse" aria-labelledby="paymentTwo" data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Please send your cheque to Store Name, Store Street, Store Town, Store
                                                        State / County, Store
                                                        Postcode.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="paypalThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paypal" aria-expanded="false" aria-controls="paypal">
                                                        PayPal
                                                    </button>
                                                </h2>
                                                <div id="paypal" className="accordion-collapse collapse" aria-labelledby="paypalThree" data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Pay via PayPal; you can pay with your credit card if you don’t have a
                                                        PayPal account.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-button-payment mt-20">
                                            <button type="submit" className="tp-btn">Place order</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CheckoutArea;