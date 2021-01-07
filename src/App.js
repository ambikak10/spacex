import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/Landing/Landing";
import Footer from './components/Footer/Footer'
// import FilteredPrograms  from './components/FilteredPrograms/FilteredPrograms'

function App() {
  return (
    <Provider store={store}>
      <div className='App-header'>
        <Router>
          <Route exact path='/' component={Landing} />
          {/* <Route exact path='/programs/:year' component={FilteredPrograms} />
          <Route
            exact
            path='/programs/launch/:launch'
            component={FilteredPrograms}
          />
          <Route
            exact
            path='/programs/launchland/:launch/:land'
            component={FilteredPrograms}
          /> */}
          <Route
            exact
            path='/programs/:year?/:launch?/:land?' component = {Landing} />
           
        </Router>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
