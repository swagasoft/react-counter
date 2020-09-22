import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from './components/navbar';
import Counters from './components/counters';
import Counter from './components/counter';
import Movies from './components/movies';


class App  extends Component {




  render(){
    console.log('conponent is rendered')
  return (
    <React.Fragment>
 <main className="container">
  <Movies></Movies>
 </main>
 </React.Fragment>
  );
}
}

export default App;
