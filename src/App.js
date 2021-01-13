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
      {/* <div className='App-header'> */}
      <h2 style={{ marginLeft: "10px", marginTop: "0px" }}>
        SpaceX Launch Programs
      </h2>
      {/* <Router>
        <Route exact path='/' component={Landing} />
      </Router> */}
      {/* </div> */}
      <Landing/>
      <Footer />
    </Provider>
  );
}

export default App;
