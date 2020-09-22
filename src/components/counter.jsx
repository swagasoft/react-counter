import React,  {Component} from 'react';
import {getMovies}  from '../services/fakeMoviesService';


class Counter extends Component {
  componentDidUpdate(recent,previous){
    // console.log('previous',previous);
    // console.log('recent',recent);
}
   
    state = {
        value : this.props.counter.value,
        tags : [],
        movies : getMovies()
    };

  
    renderTags(){
        if(this.state.tags.length === 0)  return <p>no tags</p>
        return <ul> {this.state.tags.map(tag => <li key={tag}> {tag}</li> )} </ul>

    }


    handleIncrement(id) {
    this.props.counter.value += 1;
    this.setState({value : this.props.counter.value});
    
    }

    decrement(){
      this.props.counter.value -=1;
      this.setState({value : this.props.counter.value});
      // this.state.places.forEach((place)=> {
      //   console.log(place);
      // })
      
    }

   

    render(){
      return (
        <React.Fragment>
            {this.props.children}

         <div className="row p-5">
           <div className="col">
          <span className={this.renderClass()}> <h4>{this.formatCount()} </h4></span>

           </div>
           <div className="col">
           <button onClick ={ () => this.handleIncrement(100)} className="btn btn-sm btn-secondary">+</button> 

           </div>
           <div className="col">
            <button disabled={this.props.counter.value === 0 ? 'disabled': ''} onClick={()=> this.decrement()} className="btn btn-sm btn-danger"> -</button>
           </div>
           <div className="col">
           <button onClick ={()=> this.props.onDelete(this.props.counter.id) } className="btn btn-sm btn-warning">X</button>
           </div>
           <div className="col">
           {this.renderTags()}
           </div>
           <div className="col">
        <h1 className="text-center">{this.props.counter.value} </h1>

           </div>

         </div>

         <table>
           <thead>
             <tr>
               <th >name</th>
               <th  >code</th>
               <th  >position</th>
             </tr>
           </thead>
           <tbody>
             {/* {this.state.movies.map(movie => (
               <tr key={movies.name}>
                 <td  className="col" key={movies.name} >{place.name} </td>
                 <td  className="col" key={movie.position}>{place.position} </td>
                 <td  className="col" key={place.code}>{place.code} </td>
               </tr>
             ))} */}
           </tbody>
         </table>
           

           
        </React.Fragment>
      );
    }

    formatCount(){
      console.log(this.props.counter.value)
        let {value} = this.props.counter;
        console.log(value)
        return value === 0 ? 'zero': value;
    }

    renderClass(){
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;