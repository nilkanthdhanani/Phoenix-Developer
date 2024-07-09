import React from 'react'
import './design.scss';
import { design1, design2, design3, design4 } from '../../../assets/images/png';

export default function Design() {
    return (
        <div>
            <section className="design">
                <div className="container">
                    <div className="design-head" data-aos="zoom-out">
                        <h2>Design and Development For Your Business</h2>
                    </div>
                    <div className="design-grid">
                        <div className="design-grid-box">
                            <img src={design1} alt="design1" data-aos="fade-right" />
                            <div className="design-grid-box-text" data-aos="fade-left">
                                <h3>1. STRATERGY</h3>
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            </div>
                        </div>
                        <div className="design-grid-box">
                            <img src={design2} alt="design2" data-aos="fade-right" />
                            <div className="design-grid-box-text" data-aos="fade-left">
                                <h3>1. BRANDING</h3>
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            </div>
                        </div>
                        <div className="design-grid-box">
                            <img src={design3} alt="design3" data-aos="fade-right" />
                            <div className="design-grid-box-text" data-aos="fade-left">
                                <h3>1. DESIGN</h3>
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            </div>
                        </div>
                        <div className="design-grid-box">
                            <img src={design4} alt="design4" data-aos="fade-right" />
                            <div className="design-grid-box-text" data-aos="fade-left">
                                <h3>1. MARKEING</h3>
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}