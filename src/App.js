import Footer from './comps/footer_header/footer.js';
import Navbar from './comps/footer_header/navbar.js';
import Homepage from './comps/homepage/homepage.js';
import NotFound from './comps/notfound.js';
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