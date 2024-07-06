import React from "react";
import "../style/Donate.css";
import { handleDonateSubmit } from "../utils/eventHandlersProviders";

const Donate = () => {
    return (
        <section className="donation-section">
            <div className="donation-card">
                <div className="card-content">
                    <h1 className="form-heading">Make a Donation</h1>
                    <form onSubmit={handleDonateSubmit}>
                        <div className="input-group input-group-center">
                            <label>Donation Amount<span className="required">*</span></label>
                            <input type="number" name="amount" className="small-width" placeholder="Enter amount" required />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>First Name<span className="required">*</span></label>
                                <input type="text" name="firstName" required />
                            </div>
                            <div className="input-group">
                                <label>Last Name<span className="required">*</span></label>
                                <input type="text" name="lastName" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Credit Card Number<span className="required">*</span></label>
                            <input type="text" name="cardNumber" required />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Expiry Date<span className="required">*</span></label>
                                <input type="text" name="expiryDate" placeholder="MM/YY" required />
                            </div>
                            <div className="input-group">
                                <label>CVV<span className="required">*</span></label>
                                <input type="text" name="cvv" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Billing Address<span className="required">*</span></label>
                            <input type="text" name="billingAddress1" placeholder="Street Address 1" required />
                            <input type="text" name="billingAddress2" placeholder="Street Address 2" />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>City<span className="required">*</span></label>
                                <input type="text" name="city" required />
                            </div>
                            <div className="input-group">
                                <label>State<span className="required">*</span></label>
                                <input type="text" name="state" required />
                            </div>
                            <div className="input-group">
                                <label>Zip Code<span className="required">*</span></label>
                                <input type="text" name="zipCode" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Email<span className="required">*</span></label>
                            <input type="email" name="email" required />
                        </div>
                        <button type="submit" className="form-button">Donate</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Donate;