import React from "react";
import "../style/Donate.css";

const Donate = () => {
    return (
        <section className="donation-section">
            <div className="donation-card">
                <div className="card-content">
                    <h1 className="form-heading">Make a Donation</h1>
                    <form>
                        <div className="input-group input-group-center">
                            <label>Donation Amount</label>
                            <input type="number" name="amount" className="small-width" placeholder="Enter amount" required />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>First Name</label>
                                <input type="text" name="firstName" required />
                            </div>
                            <div className="input-group">
                                <label>Last Name</label>
                                <input type="text" name="lastName" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Credit Card Number</label>
                            <input type="text" name="cardNumber" required />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Expiry Date</label>
                                <input type="text" name="expiryDate" placeholder="MM/YY" required />
                            </div>
                            <div className="input-group">
                                <label>CVV</label>
                                <input type="text" name="cvv" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Billing Address</label>
                            <input type="text" name="billingAddress1" placeholder="Street Address 1" required />
                            <input type="text" name="billingAddress2" placeholder="Street Address 2" />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>City</label>
                                <input type="text" name="city" required />
                            </div>
                            <div className="input-group">
                                <label>State</label>
                                <input type="text" name="state" required />
                            </div>
                            <div className="input-group">
                                <label>Zip Code</label>
                                <input type="text" name="zipCode" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" name="email" required />
                        </div>
                        <button className="form-button">Donate</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Donate;