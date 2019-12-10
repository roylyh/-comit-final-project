import React from 'react';
import T1 from '../images/T1.jpg';
import T2 from '../images/T2.jpg';
import T3 from '../images/T3.jpg';
import T4 from '../images/T4.jpg';

function Intro() {
    return (
        <div>
            <section id="main" >
                <div className="inner">
                    <header className="major special">
                        <h1>Introduction</h1>
                        <p>The benefits of cooking with Thermomix® touch every part of your life.</p>
                    </header>
                    <a href="#" className="image fit"><img src={T1} alt="T1" /></a>
                    <h3>Less prep time</h3>
                    <p>We know you love/hate cooking, and just because we do all the prep work for you doesn't mean you didn't cook it yourself. Thermomix® is like a second pair of hands in the kitchen: hands with professional knife skills and the need to give you all the credit.</p>
                    <a href="#" className="image fit"><img src={T2} alt="T2" /></a>
                    <h3>More family time</h3>
                    <p>If there was a recipe for making a dish called Time, Thermomix® would have it. Guided Cooking allows you to make delicious meals quickly while doing other things, like helping the kids with homework, playing games or setting the table. Things that, with time, turn into memories.</p>
                    <a href="#" className="image fit"><img src={T3} alt="T3" /></a>
                    <h3>Get creative</h3>
                    <p>Breakfast in Rome. Lunch in Mexico. Cocktails in Australia and dinner in Paris: Eat around the world without ever leaving home, thanks to the endless inspiration of Cookidoo®, the Thermomix® recipe platform with more than 40,000 recipes from around the globe.</p>
                    <a href="#" className="image fit"><img src={T4} alt="T4" /></a>
                    <h3>Take control</h3>
                    <p>Whether you're cooking for your vegan best friend or a carnivorous but Paleo party of 6, Thermomix® puts the control into your hands to make delicious and satisfying meals from scratch, without any special skills. Let our recipes be your guide.</p>
                </div>
            </section>
        </div>
    )
}

export default Intro;