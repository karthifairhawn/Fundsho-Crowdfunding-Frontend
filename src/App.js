import LoginPage from './comps/loginPage/LoginPage.js';
import NotFound from './comps/notfound.js';
import About from './comps/about/about.js';
import Contact from './comps/contact/contact.js';
import Plans from './comps/plans/plans.js';
import Setting from './comps/settings/settings';
import MainHomepage from './comps/homepage3/homepage';
import './comps/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleRequest from './comps/singleRequest/singleRequest.js';
import HorizontalLinearStepper from './comps/NewRequestPage/';
import Register from './comps/loginPage/Register.js';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return ( 
    <Router>
      <div className="App">            
        <div className="content">
          
          <Switch>
          <Route exact path="/"><MainHomepage /></Route>
          <Route exact path="/home"><MainHomepage /></Route>
            <Route exact path="/login"><LoginPage /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/contact-us"><Contact /></Route>
            <Route exact path="/plans"><Plans /></Route>            
            <Route path="/settings"><Setting /></Route>

            <Route exact path="/newrequest"><HorizontalLinearStepper/></Route>            

            <Route exact path="/fundraiser/:reqId"><SingleRequest/></Route>            

            <Route path="*"><NotFound /></Route>

          </Switch>
        </div>        
      </div>
    </Router>
    
   );
}
 
export default App;