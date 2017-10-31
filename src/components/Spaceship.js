import React, { Component } from 'react'

export default class Spaceship extends Component {

  render() {
    console.log(this.props)
    return (<div>
      <h3>{this.props.name}</h3>
      <p>{this.props.speed}</p>
      <p>Has Rockets: {this.props.hasRockets}</p>
      <h4>Colors:</h4>
      <p>{this.props.colors.join(', ')}</p>

    </div>)
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
