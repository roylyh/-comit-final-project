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

import './css/main.css';


function App() {
  let [signboo,setSignboo] = React.useState(true);
  let [open,setOpen] = React.useState(false);

  function signOut() {
    setSignboo(true);
  }

  function signIn() {
    setOpen(true);
  }

  return (
    <BrowserRouter>
      <div>
        <header id="header">
	        <div className="inner">
		          <a href="index.html" className="logo">Thermomix</a>
		          <nav id="nav">
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/intro'>Introduction</Link></a>
                <a><Link to='/recipes'>Recipes</Link></a>
                <a><Link to='/contact'>Contact</Link></a>
                <a><Link to='/discount'>Discount</Link></a>
                {signboo && <a onClick={signIn}><Link to='/sign'>Sign in</Link></a>}
                {!signboo && <a onClick={signOut}><Link to='/sign'>Sign out</Link></a>}
                <Sign setOpen={setOpen} open={open} setSignboo={setSignboo}></Sign>
		          </nav>
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
