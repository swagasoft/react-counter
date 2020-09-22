import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from './components/navbar';
import Counters from './components/counters';
import Counter from './components/counter';
import Movies from './components/movies';


class App  extends Component {
  state = { 
    counters : [
        {id: 1, value: 4},
        {id: 2, value: 3},
        {id: 3, value: 8},
        {id: 4, value: 9},
    ]
 }

 constructor(props){
   console.log("App-contructor")
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
 }

 componentDidMount(){
   console.log('components is mounted')
 }

 handleReset(){
    const counters =  this.state.counters.map(count => 
        {count.value = 0;
        return count});
        this.setState({counters});
 }

 handleDelete(id){
    console.log('event handler called', id);
    // console.log('counting', this.state);
    const newCounters = this.state.counters.filter(c => c.id !== id);
    this.setState({counters : newCounters});
 }

 handleIncrement(id) {
  this.props.counter.value += 1;
  this.setState({value : this.props.counter.value});
  
  }

  handleDecrement(){
    this.props.counter.value -=1;
    this.setState({value : this.props.counter.value});
    this.state.places.forEach((place)=> {
      console.log(place);
    })
    
  }


  render(){
    console.log('conponent is rendered')
  return (
    <React.Fragment>
 <NavBar totalCounter={this.state.counters.filter(c => c.value > 0).length}></NavBar>
 <main className="container">
   <Counters 
   onReset={this.handleReset} 
   onDelete={this.handleDelete} 
   onIncrement={this.handleIncrement} 
   onDecrement={this.handleDecrement} 
   counters={this.state.counters}
   ></Counters>
 </main>
 </React.Fragment>
  );
}
}

export default App;
