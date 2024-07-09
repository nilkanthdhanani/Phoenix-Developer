import React from 'react'
import './whatWeDo.scss';
import { heroIco3, heroIco6, heroIco5, ring2 } from '../../../assets/images/png';

export default function WhatWeDo() {
    return (
        <div>
            <section className="what-we-do">
                <div className="container">
                    <div className="what-we-do-linear"></div>
                    <div className="what-we-do-div">
                        <div className="wwd-grid">
                            <div className="wwd-grid1">
                                <img src={heroIco3} alt="heroIco3" data-aos="zoom-out-right" />
                                <div className="wwd-grid1-abso">
                                    <img src={heroIco6} alt="heroIco6" data-aos="fade-right" />
                                </div>
                            </div>
                            <div className="wwd-grid2">
                                <div className="wwd-grid2-box" data-aos="fade-left">
                                    <img src={ring2} alt="ring2" data-aos="fade-down-left" />
                                    <h2>What We Do</h2>
                                    <p>Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. </p>
                                    <div className="more-button">
                                        <button>LEARN MORE</button>
                                    </div>
                                </div>
                                <div className="wwd-grid2-img" data-aos="fade-up">
                                    <img src={heroIco5} alt="heroIco5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}