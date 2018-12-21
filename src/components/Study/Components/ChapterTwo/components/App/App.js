import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: null,
      isError: ''
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState(() => ({
          latitude: position.coords.latitude
        }))
      },
      (error) => {
        this.setState(() => ({
          isError: `Sorry We can't get yout location sir`
        }))
      }
    )

  }

  render() {
    return (
      <div className="chapter-2__location">
        {this.state.latitude ? `Latitude: ${this.state.latitude}` : `Error: ${this.state.isError}`}
      </div>
    )
  }
}
