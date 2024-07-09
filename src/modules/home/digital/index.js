import React from 'react'
import './digital.scss';
import { heroIco3, heroIco4, heroIco6, heroIco5, ring3 } from '../../../assets/images/png';

export default function Digital() {
    return (
        <div>
            <section className="digital">
                <div className="container">
                    <div className="digital-img">
                        <img src={heroIco3} alt="heroIco3" data-aos="fade-right" />
                    </div>
                    <div className="digital-div">
                        <div className="digital-div-box" data-aos="fade-right">
                            <h2>Digital design</h2>
                            <p>Lectus sit amet est placerat in egestas. Integer eget aliquet nibh praesent tristique magna sit. Congue quisque egestas diam in arcu cursus.</p>
                            <div className="more-button">
                                <button>READ MORE</button>
                            </div>
                            <img src={heroIco4} alt="heroIco4" data-aos="fade-up" />
                        </div>
                        <div className="digital-div-icon1">
                            <img src={heroIco6} alt="heroIco6" data-aos="zoom-out" />
                        </div>
                        <div className="digital-div-icon2">
                            <img src={heroIco5} alt="heroIco5" data-aos="fade-left" />
                        </div>
                        <div className="digital-div-icon3">
                            <img src={ring3} alt="ring3" data-aos="fade-left" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}