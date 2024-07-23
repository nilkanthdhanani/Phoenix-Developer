import React, { useState } from 'react'
import './form.scss';
import formBg from '../../../assets/images/svg/formBg.svg';
import { heroIco3, heroIco4, heroIco5, ring2, ring1 } from '../../../assets/images/png';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

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
                            <form onSubmit={handleSubmit}>
                                <div className="form-div-box-input">
                                    <label>Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" required />
                                </div>
                                <div className="form-div-box-input">
                                    <label>Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter a valid email address" required />
                                </div>
                                <div className="form-div-box-input">
                                    <label>Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" required></textarea>
                                </div>
                                <div className="form-div-box-check">
                                    <input type="checkbox" name="name" value={formData.name} required />
                                    <label>I accept the <a href="terms">Terms of Service</a></label>
                                </div>
                                <div className="submit-button">
                                    <button>SUBMIT</button>
                                </div>
                            </form>
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