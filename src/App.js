import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Coaching } from './Coaching';
import { OurPrices } from './OurPrinces';
import { Reviews } from './Reviews';
import { Faq } from './Faq';
import { Register } from './Register';
import { Login } from './Login';
import { Trainer } from './Trainer';
import { Promotion } from './Promotion';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { FooterPage } from './components/FooterPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
            <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/coaching" component={Coaching} />
                  <Route path="/our-prices" component={OurPrices} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/promotion" component={Promotion} />
                  <Route path="/reviews" component={Reviews} />
                  <Route path="/faq" component={Faq} />
                  <Route path="/trainer" component={Trainer} />
                  <Route component={NoMatch} />
                </Switch>
            </Layout>
            <FooterPage/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;