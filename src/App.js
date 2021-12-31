import Footer from './comps/footer_header/footer.js';
import Navbar from './comps/footer_header/navbar.js';
import Homepage from './comps/homepage/homepage.js';
import NotFound from './comps/notfound.js';
import About from './comps/about/about.js';
import Contact from './comps/contact/contact.js';
import Plans from './comps/plans/plans.js';
import Setting from './comps/settings/settings';
import NewRequestPage from './comps/NewRequestPage';
import MainHomepage from './comps/homepage3/homepage';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './comps/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return ( 
    <Router>
      <div className="App">            
        <div className="content">
          <Switch>
            <Route exact path="/login">            
              <Homepage />
            </Route>
            <Route exact path="/about">
              <Navbar/>  
              <About />
            </Route>
            <Route exact path="/contact-us">
              <Navbar />  
              <Contact />
            </Route>
            <Route exact path="/plans">
              <Navbar />  
              <Plans />
            </Route>
            <Route path="/availed">
              <Navbar/>  
              <MainHomepage/>
            </Route>
            <Route path="/settings">
              <Navbar dark="true"/>  
              <Setting />
            </Route>
            <Route path="/newrequest">
               <NewRequestPage />              
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