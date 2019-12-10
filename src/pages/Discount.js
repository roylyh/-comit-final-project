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
            <h1>Press button or Enter Key</h1>
            <h2>{discount}</h2>
            <button onClick={startF}>start</button>
            <button onClick={stopF}>stop</button>
        </div>
    );
}

export default App;
