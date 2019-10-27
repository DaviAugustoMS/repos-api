import React, { Component } from 'react';
//https://sujeitoprogramador.com/rn-api/?api-posts

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nutri: []
    };
  }

  componentDidMount(){
    let url ='https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
    .then((r)=> r.json())
    .then((json) => {
        let state = this.state;
        state.nutri = json;
        this.setState(state);
        //console.log(json);
    })
  }
  render(){
    return(
      <div className="container">
        
        {this.state.nutri.map((item)=>{
          return(
            <article>
              <strong> {item.titulo} </strong>
              <img src={item.capa} />
              <p> {item.subititulo} </p>
            </article>
          );
        })}
      </div>
    );
  }
}

export default App;