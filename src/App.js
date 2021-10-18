import Footer from './comps/footer_header/footer.js';
import Navbar from './comps/footer_header/navbar.js';
import Homepage from './comps/homepage/homepage.js';
import NotFound from './comps/notfound.js';
import About from './comps/about/about.js';
import Contact from './comps/contact/contact.js';
import Plans from './comps/plans/plans.js';
import './comps/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return ( 
    <><Router>
      <div className="App">
        <Navbar />      
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact-us">
              <Contact />
            </Route>
            <Route exact path="/plans">
              <Plans />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        < Footer/>
      </div>
    </Router>
    </>
   );
}
 
export default App;