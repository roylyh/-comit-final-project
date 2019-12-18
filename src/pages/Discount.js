import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

function App() {
    let [discount, setDiscount] = React.useState('Good Luck');
    let [id, setId] = React.useState('');
    let [boo, setBoo] = React.useState(true);


    function startF() {
        if (boo) {
            let iid = setInterval(function () { setD(); }, 100);
            setId(iid);
            setBoo(false);
        }
    }

    function stopF() {
        if (!boo) {
            clearInterval(id);
            setBoo(true);
            if (discount === '0%') {
                alert('Bad Luck, try again!')
            } else if (discount === '30%') {
                alert('Good Luck!')
            }
        }
    }


    function setD() {
        let arr = ['0%', '3%', '10%', '15%', '20%', '25%', '30%'];
        let cou = Math.floor(Math.random() * arr.length);
        setDiscount(arr[cou]);
    }

    useHotkeys('Enter', () => {
        if (boo) {
            startF();
        } else {
            stopF();
        }
    }, [boo]);

    return (
        <div>
            <section class="newsletter">

                <div class="container">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="news-data">
                                <div class="section-subheading">
                                    <h1 class="wow fadeInUp" data-wow-delay="0.3s">Press button or Enter Key</h1>
                                    <h2>{discount}</h2>
                                    <span class="input-group-btn">
                                        <button onClick={startF}>start</button>
                                        <button onClick={stopF}>stop</button></span>
                                </div>

                                <div class="input-group wow fadeInUp" data-wow-delay="0.4s">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
