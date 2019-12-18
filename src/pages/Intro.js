import React from 'react';
import T1 from '../images/T1.jpg';
import T2 from '../images/T2.jpg';
import T3 from '../images/T3.jpg';
import T4 from '../images/T4.jpg';

function Intro() {
    return (
        <div>
            <section id="story" >
                <div className="container-fluid">
                    <div className="section-data">

                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-2 section-index wow fadeInUp" data-wow-delay="0.3s">INTRODUCTION</div>
                            <div className="col-md-8 section-heading wow fadeInUp" data-wow-delay="0.4s"><h1></h1>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-md-4"></div>
                            <div className="col-md-6 section-subheading wow fadeInUp" data-wow-delay="0.5s"><h1>Less prep time</h1></div>
                        </div>

                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-6 section-info wow fadeInUp" data-wow-delay="0.6s"><p>We know you love/hate cooking, and just because we do all the prep work for you doesn't mean you didn't cook it yourself. Thermomix® is like a second pair of hands in the kitchen: hands with professional knife skills and the need to give you all the credit.</p><br /><a href="#" className="image fit"><img src={T1} alt="T1" /></a></div>
                        </div>

                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-6 section-subheading wow fadeInUp" data-wow-delay="0.5s"><h1>More family time</h1></div>
                        </div>

                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-6 section-info wow fadeInUp" data-wow-delay="0.6s"><p>If there was a recipe for making a dish called Time, Thermomix® would have it. Guided Cooking allows you to make delicious meals quickly while doing other things, like helping the kids with homework, playing games or setting the table. Things that, with time, turn into memories.</p><br /><a href="#" className="image fit"><img src={T2} alt="T2" /></a></div>
                        </div>


                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-6 section-subheading wow fadeInUp" data-wow-delay="0.5s"><h1>Get creative</h1></div>
                        </div>

                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-6 section-info wow fadeInUp" data-wow-delay="0.6s"><p>Breakfast in Rome. Lunch in Mexico. Cocktails in Australia and dinner in Paris: Eat around the world without ever leaving home, thanks to the endless inspiration of Cookidoo®, the Thermomix® recipe platform with more than 40,000 recipes from around the globe.</p><br /><a href="#" className="image fit"><img src={T3} alt="T3" /></a></div>
                        </div>

                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-6 section-subheading wow fadeInUp" data-wow-delay="0.5s"><h1>Take control</h1></div>
                        </div>

                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-6 section-info wow fadeInUp" data-wow-delay="0.6s"><p>Whether you're cooking for your vegan best friend or a carnivorous but Paleo party of 6, Thermomix® puts the control into your hands to make delicious and satisfying meals from scratch, without any special skills. Let our recipes be your guide.</p><br /><a href="#" className="image fit"><img src={T4} alt="T4" /></a></div>
                        </div>


                    </div>

                </div>

            </section>
        </div>
    )
}

export default Intro;