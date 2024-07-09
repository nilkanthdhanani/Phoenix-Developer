import React from 'react'
import './lady.scss';
import { lady, ladyBg } from '../../../assets/images/png';

export default function Lady() {
    return (
        <div>
            <section className="lady">
                <div className="container">
                    <div className="lady-div">
                        <img src={ladyBg} alt="ladyBg" data-aos="zoom-in" />
                        <div className="lady-div-respo">
                            <img src={lady} alt="lady" data-aos="fade-right" />
                        </div>
                        <div className="lady-div-round1" data-aos="fade-left"></div>
                        <div className="lady-div-round2" data-aos="fade-left"></div>
                    </div>
                    <div className="lady-grid">
                        <div className="lady-grid-div" data-aos="fade-up">
                            <h2>01</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="lady-grid-div" data-aos="fade-down">
                            <h2>02</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="lady-grid-div" data-aos="fade-up">
                            <h2>03</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="lady-grid-div" data-aos="fade-down">
                            <h2>04</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}