import React from 'react'
import './heroBanner.scss';
import { heroIco1, heroIco2, heroIco3, heroIco4 } from '../../../assets/images/png';

export default function HeroBanner() {
    return (
        <div>
            <section className="hero-banner">
                <div className="container">
                    <div className="hero-banner-div">
                        <div className="hbd-grid">
                            <div className="hbd-grid1" data-aos="fade-right">
                                <div className="hbd-grid1-img1">
                                    <img src={heroIco1} alt="heroIco1" />
                                </div>
                                <div className="hbd-grid1-img2">
                                    <img src={heroIco2} alt="heroIco2" />
                                </div>
                            </div>
                            <div className="hbd-grid2" data-aos="zoom-in">
                                <div className="hbd-grid2-text">
                                    <h1>Meet our design team</h1>
                                    <div className="hbd-grid2-text-list">
                                        <p>
                                            <a href="about">about us</a>|
                                            <a href="news">news</a>|
                                            <a href="about">reviews</a>|
                                            <a href="reviews">articles</a>|
                                            <a href="future">#future</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="hbd-grid3" data-aos="fade-left">
                                <div className="hbd-grid1-img1">
                                    <img src={heroIco3} alt="heroIco3" />
                                </div>
                                <div className="hbd-grid1-img2">
                                    <img src={heroIco4} alt="heroIco4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}