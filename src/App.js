import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import Intro from './pages/Intro';
import Index from './pages/Index';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import Discount from './pages/Discount';
import Sign from './pages/Sign';

import './css/style.css';


function App() {
  let [signboo, setSignboo] = React.useState(true);
  let [open, setOpen] = React.useState(false);
  let [menuon, setMenuon] = React.useState(false);

  function signOut() {
    setSignboo(true);
    setMenuon(false);
  }

  function signIn() {
    setOpen(true);
    setMenuon(false);
  }

  function menucontrol() {
    setMenuon(!menuon);
  }

  function menucon() {
    setMenuon(false);
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <header id="header">
          <div>
            <nav className="nav">
              <span id="brand">
                {/* <a href="index.html" className="logo">Thermomix</a> */}
                <a><Link to='/'>Thermomix</Link></a>
              </span>
              <ul id="menu">
                <li><a><Link to='/'>Home</Link></a></li>
                <li><a><Link to='/intro'>Introduction</Link></a></li>
                <li><a><Link to='/recipes'>Recipes</Link></a></li>
                <li><a><Link to='/contact'>Contact</Link></a></li>
                <li><a><Link to='/discount'>Discount</Link></a></li>
                {signboo && <li><a onClick={signIn}><Link to='/sign'>Sign in</Link></a></li>}
                {!signboo && <li><a onClick={signOut}><Link to='/sign'>Sign out</Link></a></li>}
                <Sign setOpen={setOpen} open={open} setSignboo={setSignboo}></Sign>
              </ul>

              <div id="toggle">
                <div className="span" onClick={menucontrol}>menu</div>
              </div>
            </nav>

            {menuon && <div id="resize">
              <div className="close-btn" onClick={menucon}>close</div>
              <ul id="menu">
                <li onClick={menucon}><a><Link to='/'>Home</Link></a></li>
                <li onClick={menucon}><a><Link to='/intro'>Introduction</Link></a></li>
                <li onClick={menucon}><a><Link to='/recipes'>Recipes</Link></a></li>
                <li onClick={menucon}><a><Link to='/contact'>Contact</Link></a></li>
                <li onClick={menucon}><a><Link to='/discount'>Discount</Link></a></li>
                {signboo && <li><a onClick={signIn}><Link to='/sign'>Sign in</Link></a></li>}
                {!signboo && <li><a onClick={signOut}><Link to='/sign'>Sign out</Link></a></li>}
                <Sign setOpen={setOpen} open={open} setSignboo={setSignboo}></Sign>
              </ul>
            </div>}


          </div>
        </header>
        <Route path='/' component={Index} exact={true} />
        <Route path='/intro' component={Intro} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/contact' component={Contact} />
        <Route path='/discount' component={Discount} />
        <Route path='/sign' component={Sign} />
      </div>
    </BrowserRouter>
  );
}

export default App;
