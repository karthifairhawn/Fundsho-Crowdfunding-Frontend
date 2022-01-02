import Homepage from './comps/loginPage/homepage.js';
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
import SingleRequest from './comps/singleRequest/singleRequest.js';


const App = () => {
  return ( 
    <Router>
      <div className="App">            
        <div className="content">
          <Switch>
            <Route exact path="/login"><Homepage /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/contact-us"><Contact /></Route>
            <Route exact path="/plans"><Plans /></Route>
            <Route exact path="/home"><MainHomepage/></Route>
            <Route path="/settings"><Setting /></Route>
            <Route exact path="/newrequest"><NewRequestPage /></Route>
            <Route exact path="/fundraiser/:reqId"><SingleRequest/></Route>            


            <Route path="*"><NotFound /></Route>

          </Switch>
        </div>        
      </div>
    </Router>
    
   );
}
 
export default App;