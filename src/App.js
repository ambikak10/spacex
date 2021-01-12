import './App.css';
import React from 'react';
import { StaticRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/Landing/Landing";
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Provider store={store}>
      <div className='App-header'>
        <Router>
          <Route exact path='/' component={Landing} />
          
        </Router>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
