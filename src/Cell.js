<<<<<<< HEAD
import React, { Component } from 'react';

export default class Cell extends Component {

=======
  
import React, { Component } from 'react';

export default class Cell extends Component {
 
   
>>>>>>> b4a2b7a72bedf1660da56e3827f1198989c62422
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }
<<<<<<< HEAD


  handleClick() {
    this.setState({
      color: '#333'
    });
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={() => this.handleClick()}>
      </div>
    )
  }

=======
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
>>>>>>> b4a2b7a72bedf1660da56e3827f1198989c62422
}