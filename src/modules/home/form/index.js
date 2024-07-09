import React from 'react'
import './form.scss';
import formBg from '../../../assets/images/svg/formBg.svg';
import { heroIco3, heroIco4, heroIco5, ring2, ring1 } from '../../../assets/images/png';

export default function Form() {
    return (
        <div>
            <section className="form">
                <div className="container">
                    <div className="form-div">
                        <div className="form-div-img">
                            <img src={formBg} alt="formBg" data-aos="zoom-in" />
                        </div>
                        <div className="form-div-abso">
                            <img src={ring2} alt="ring2" data-aos="fade-right" />
                            <img src={heroIco4} alt="heroIco4" data-aos="fade-left" />
                        </div>
                        <div className="form-div-box">
                            <div className="form-div-box-input">
                                <label>Name</label>
                                <input type="text" placeholder='Enter your Name' />
                            </div>
                            <div className="form-div-box-input">
                                <label>Email</label>
                                <input type="text" placeholder='Enter a valid email eddress' />
                            </div>
                            <div className="form-div-box-input">
                                <label>Message</label>
                                <textarea placeholder='Enter your message'></textarea>
                            </div>
                            <div className="form-div-box-check">
                                <input type="checkbox" />
                                <label>I accept the <a href="terms">Terms of Service</a></label>
                            </div>
                            <div className="submit-button">
                                <button>SUBMIT</button>
                            </div>
                        </div>
                        <div className="form-div-abso2">
                            <img src={ring1} alt="ring1" data-aos="fade-left" />
                        </div>
                        <div className="form-div-round">
                            <img src={heroIco3} alt="heroIco3" data-aos="zoom-in" />
                        </div>
                    </div>
                    <div className="form-last-icon">
                        <img src={heroIco5} alt="heroIco5" data-aos="fade-right" />
                    </div>
                </div>
            </section>
        </div>
    )
}