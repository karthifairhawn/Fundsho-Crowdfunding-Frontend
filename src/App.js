import Footer from './comps/footer_header/footer.js';
import Navbar from './comps/footer_header/navbar.js';
import Homepage from './comps/homepage/homepage.js';
import NotFound from './comps/notfound.js';
import About from './comps/about/about.js';
import Contact from './comps/contact/contact.js';
import Plans from './comps/plans/plans.js';
import AvailedList from './comps/homepage2/AvailedList.js';
import Setting from './comps/settings/settings';
import 'font-awesome/css/font-awesome.min.css';

import './comps/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return ( 
    <Router>
      <div className="App">            
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Navbar active="home"/>  
              <Homepage />
            </Route>
            <Route exact path="/about">
              <Navbar active="about"/>  
              <About />
            </Route>
            <Route exact path="/contact-us">
              <Navbar active="contact us"/>  
              <Contact />
            </Route>
            <Route exact path="/plans">
              <Navbar active="plans"/>  
              <Plans />
            </Route>
            <Route exact path="/availed">
              <Navbar active="home"/>  
              <AvailedList />
            </Route>
            <Route path="/settings">
              <Navbar active=""/>  
              <Setting />
            </Route>
            <Route path="*">
              <Navbar />  
              <NotFound />
            </Route>
          </Switch>
        </div>
        < Footer/>
      </div>
    </Router>
    
   );
}
 
export default App;