import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from "./components/nav/nav.js";
import Intro from './components/pages/intro/intro.js';
import About from './components/pages/about/about.js';
import Work from './components/pages/work/work.js';
import Projects from './components/pages/projects/projects.js';
import Contact from './components/pages/contact/contact.js';
import Footer from './components/pages/footer/footer.js';
import SideBar from './components/side-bars/sidebars.js';
import NotFound from './components/pages/not-found/not-found.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <SideBar />
      <Switch>
        <Route path='/' exact>
          <Intro />
          <About />
          <Work />
          <Projects />
          <Contact />
          <Footer />
        </Route>
        <Route path='/'>
          <NotFound />
          <Footer />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
