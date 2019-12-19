import React from 'react';
import Iframe from './Iframe.js';

function Contact() {
    return (
        <div>
            <section className="contact">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-2 section-index wow fadeInUp" data-wow-delay="0.3s">CONTACT US</div>

                        <div className="col-md-8 section-heading wow fadeInUp" data-wow-delay="0.4s"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-6 icon-title wow fadeInUp" data-wow-delay="0.5s"><Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.655443044876!2d-106.62862028445139!3d52.14058887974412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6a4ad311519%3A0x420813d125cfbbde!2sInnovation%20Place!5e0!3m2!1szh-CN!2sca!4v1573536446769!5m2!1szh-CN!2sca" width="600" height="450" frameborder="0" allowfullscreen="" />
                            <small><a href={`https://goo.gl/maps/4MvYDXVCALDwsZwy5`} >View Larger Map</a></small><br />
                            <p>Innovation Place,<br />
                                Saskatoon, SK,<br />
                                Canada<br />
                                Phone:(1) 306 666 444<br />
                                Email:   <a href="mailto:info@example.com">info(at)example.com</a><br />
                                Follow on:  
                                <ion-icon name="logo-facebook"></ion-icon> 
                                <ion-icon name="logo-instagram"></ion-icon>
                                <ion-icon name="logo-twitter"></ion-icon>
                                <ion-icon name="logo-youtube"></ion-icon>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-6">
                            <form action="" name="contact-form" id="contact-form" method="POST">

                                <ul>

                                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                                        <label for="contact-name">Name :</label>
                                        <div className="textarea">
                                            <input type="text" name="contact-name" id="contact-name" value="" required />
                                        </div>
                                    </li>

                                    <br />

                                    <li className="wow fadeInUp" data-wow-delay="0.7s">
                                        <label for="contact-email">E-mail :</label>
                                        <div className="textarea">
                                            <input type="email" name="contact-email" id="contact-email" value="" required />
                                        </div>
                                    </li>

                                    <br />

                                    <li className="wow fadeInUp" data-wow-delay="0.8s">
                                        <label for="contact-project">Message :</label>
                                        <div className="textarea">
                                            <textarea name="contact-project" id="contact-project" rows="6" required></textarea>
                                        </div>
                                    </li>

                                </ul>

                                <button type="submit" name="contact-submit" id="contact-submit" className="send wow fadeInUp" data-wow-delay="0.9s">Send Message</button>

                            </form>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default Contact;