import React, { useState } from 'react';
import './App.css';



class App extends React.Component {
    constructor () {
      super();
      this.state={
        image: <img src='https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg' alt='tom cruise'  width={450} height={380}/>,
      fullname:"Tom Cruise",
      profession:"actor",
      bio:"Né le 3 juillet 1962 dans l'État de New York, Tom Cruise est un acteur et producteur américain. Star internationale depuis son rôle de Pete « Maverick » Mitchell dans Top Gun, il est toujours à l’affiche de nombreux blockbusters américains. Tom Cruise peut se vanter d'avoir tourné avec les meilleurs réalisateurs du septième art : Stanley Kubrick, Martin Scorsese, Brian De Palma, Oliver Stone et bien d'autres",
        timer: 0,
        intervall: null,
        show:true,
      }
      
    }
   
   componentDidMount() {
    this.setState({
      intervall: setInterval(
        ()=> this.setState({
          timer: this.state.timer + 1,
        }), 
        1000
      ),
    })
   }
   // function show/hide
   showhiden=() =>(
    this.setState({
      show:!this.state.show
    })
   );
   
  
   render () {
  return (
    <div className="App">
    {this.state.show && <div>{this.state.image} </div> }    
       <br />
    {this.state.show && <h1 style={{color: 'red'}}>{this.state.fullname}</h1>}
    {this.state.show &&<h2 style={{color: 'blue'}}>{this.state.profession}</h2>}
    {this.state.show &&<p style={{fontSize:'20px', marginLeft:'60px', marginRight:'60px'}} >{this.state.bio}</p>} 
    <br />
    {this.state.show &&<span style={{border:'1px solid black', padding:'5px 8px'}}> {this.state.timer} </span>}
    <br />
    <br />
    <button style={{background:'green'}} onClick={this.showhiden}>{this.state.show ? 'masquer' : 'afficher'}</button>
    
  </div>
);
  }
   
}

export default App;
