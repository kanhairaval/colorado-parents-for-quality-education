import React from "react";
import "../style/Donate.css";
import { useForm } from "../utils/eventHandlersProviders"; // Import the useForm hook

const Donate = () => {
  const { formData, handleChange, handleFormSubmit } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress1: "",
    billingAddress2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData, '/api/donation'); // Call handleFormSubmit with endpoint
  };

  return (
    <section className="donation-section">
      <div className="donation-card">
        <div className="card-content">
          <h1 className="form-heading">Make a Donation</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group input-group-center">
              <label>Donation Amount<span className="required">*</span></label>
              <input
                type="number"
                name="amount"
                className="small-width"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>First Name<span className="required">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Last Name<span className="required">*</span></label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {/* Other form fields */}
            <button type="submit" className="form-button">
              Donate
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Donate;