import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Elements/Header';
import Footer from './Components/Elements/Footer';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/page2'>
            <Page2 />
          </Route>
          <Route exact path='/page3'>
            <Page3 />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
