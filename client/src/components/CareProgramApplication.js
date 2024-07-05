import React from 'react';
import "../style/CareProgramApplication.css";

const CareProgramApplication = () => {
    return (
        <section className="content-wrapper">
            <section className="care-program-section">
                <div className="card">
                    <h1 className="care-program-title"><strong>CARE Program Application</strong></h1>
                    <p className="care-program-description">
                        Once you complete the application, we will select the first 10 families to support. If your family is not selected, your family will be placed on our waiting list, the next group of families will be selected based on, the date you signed up (first come, next served).
                    </p>
                    <p className="care-program-notification">
                        Your family will be notified via email when you are selected to be a part of the CARE program.
                    </p>
                    
                    <form className="care-program-form">
                        <div className="form-group name-fields">
                            <div className="name-field">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="First" />
                            </div>
                            <div className="name-field">
                                <label>Last Name</label>
                                <input type="text" className="form-control" placeholder="Last" />
                            </div>
                        </div>
                        <div className="form-group center-align">
                            <label>Email</label>
                            <input type="email" className="form-control small-width" placeholder="Email" />
                        </div>
                        <div className="form-group center-align">
                            <label>How Many Children Do You Have In The Hillside Afterschool Program?</label>
                            <input type="number" className="form-control small-width" placeholder="Number of Children" />
                        </div>
                        <div className="form-group">
                            <label>Please Select The Requirements You Commit To</label>
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Take time to read to your child or have your child read to you 30 minutes per day. Set up family reading time, to encourage older readers to read to themselves - (MANDATORY - PROVIDE LIST OF BOOKS READ EACH MONTH)
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Attend Colorado Parents for Quality Education Monthly Family Dinners at Hillside Community Center - (MANDATORY)
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Attend a SAC or BAC meeting at your child's school - (OPTIONAL)
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Ask the school directly if there are volunteer opportunities. Crossing guards, campus watch, field trip chaperones and special event concession stand operators are commonly needed. - (OPTIONAL)
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Attend/Watch the next school district board meeting - (OPTIONAL)
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Send your student’s teacher/principal an email or card of encouragement, thanks for asking a simple question about your student’s progress - (MANDATORY)
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Attend a school event to learn more about the school, and or get your child involved in school programs - (MANDATORY)
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="form-group">
                            <p>Upon completion and review of parent's requirements, your next month's after-school tuition will be paid to Hillside Community Center by Colorado Parents for Quality Education</p>
                        </div>
                        <div className="form-group center-align">
                            <button type="submit" className="homepage-buttons donate-button">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    );
};

export default CareProgramApplication;