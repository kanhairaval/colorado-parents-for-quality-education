import React from 'react';
import "../style/DonationSuccess.css";

const DonationSuccess = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="modal-message">
                    <h2>Donation Successful!</h2>
                    <p>Thank you for doing your part, you will receive a donation receipt shortly.</p>
                    <p>Please click on donate again to make another donation or click X at the top right to close.</p>
                </div>
            </div>
        </div>
    );
};

export default DonationSuccess;
