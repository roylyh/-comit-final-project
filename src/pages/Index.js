import React from 'react';
import {
    Link
} from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../css/modal-video.scss';


function Index () {
    let [isOpen, setIsOpen] = React.useState(false);

    function closeV() {
      setIsOpen(false);
    }
    
    function openModal() {
      setIsOpen(true);
    }

    return (
        <div>
            <section id="banner">
	            <div className="inner">
		            <h1>Thermomix: <span>Homemade + made effortless<br /></span></h1>
		            <p><span className="inner-span">Thermomix® does the work so you can make time for what matters most</span></p>
		            <ul className="actions">
                        <ModalVideo channel='youtube' isOpen={isOpen} videoId='kZGYuOSVJ2k' onClose={closeV} />
                        <button onClick={openModal}>Video</button>
		            </ul>
	            </div>
            </section>

            <section id="one">
	            <div className="inner">
		            <header>
			            <h2>Create magic moments</h2>
		            </header>
		            <p>The Thermomix® is a kitchen appliance made by the Vorwerk Corporate Group.</p>
		            <ul className="actions">
                        <button><Link to='/intro'></Link>Learn More</button>
		            </ul>
	            </div>
            </section>
        </div>
    )
}

export default Index;