import React from 'react'
import './studio.scss';
import { instagram, facebook, twitter, google } from '../../../assets/images/png';

export default function Studio() {
    return (
        <div>
            <section className="studio">
                <div className="container">
                    <div className="studio-grid">
                        <div className="studio-grid-box" data-aos="zoom-in-right">
                            <h2>We're a team of makers, a nimble studio of designers and developers</h2>
                        </div>
                        <div className="studio-grid-box" data-aos="zoom-in-left">
                            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Rutrum tellus pellentesque eu tincidunt tortor aliquam.</p>
                            <div className="stdio-media-icon">
                                <a href="https://www.facebook.com/" target='blank'>
                                    <img src={facebook} alt="facebook" />
                                </a>
                                <a href="https://x.com/?lang=en" target='blank'>
                                    <img src={twitter} alt="twitter" />
                                </a>
                                <a href="https://www.instagram.com/" target='blank'>
                                    <img src={instagram} alt="instagram" />
                                </a>
                                <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" target='blank'>
                                    <img src={google} alt="google" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}