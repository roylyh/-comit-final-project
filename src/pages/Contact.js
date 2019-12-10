import React from 'react';
import Iframe from './Iframe.js';

function Contact() {
    return (
        <div>
            <section id="footer">
                <div class="contact-main">
                    <div class="container">
                        <h2 class="wow fadeInLeft" data-wow-delay="0.4s">CONTACT</h2>
                        <div class="col-md-4 content-left wow fadeInLeft" data-wow-delay="0.4s">
                            <div class="map">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.655443044876!2d-106.62862028445139!3d52.14058887974412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6a4ad311519%3A0x420813d125cfbbde!2sInnovation%20Place!5e0!3m2!1szh-CN!2sca!4v1573536446769!5m2!1szh-CN!2sca" width="600" height="450" frameborder="0" allowfullscreen=""/>
                            <small><a href={`https://goo.gl/maps/4MvYDXVCALDwsZwy5`} >View Larger Map</a></small>

                        </div>
                        <div class="address">
                            <p>Innovation Place,<br />
                                Saskatoon, SK,<br />
                                Canada<br />
                                Phone:(1) 306 666 444<br />
                                Email:   <a href="mailto:info@example.com">info(at)example.com</a><br />
                                Follow on:  <a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a> <a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></p>
                        </div>
                    </div>
                    <div class="col-md-6 contact wow fadeInRight" data-wow-delay="0.4s">
                        <div class="form">
                            <form>
                                <h3>Name</h3>
                                <input type="text" id="name" name="name" />
                                <h3>Email</h3>
                                <input type="text" id="email" name="email" />
                                <h3>Phone</h3>
                                <input type="text" id="Phone" name="Phone" />
                                <h3>Comment</h3>
                                <textarea id="subject" name="Subject" ></textarea>
                                <input type="submit" id="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
                    </div>
</section>
</div>
            )
}

export default Contact;