import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: true,
      willUpdate: false,
      latitude: null,
      isError: '',
      ouch: false,
      buttonText: 'click me'
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState(() => ({
          latitude: position.coords.latitude
        }))
      },
      ({ message }) => {
        this.setState(() => ({
          isError: message
        }))
      }
    )
    console.log('constructor')
  }


  componentDidMount() {
    console.log('Mount')
  }


  componentWillUnmount() {
    console.log('Unmount')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }


  componentDidUpdate() {
    console.log('componentDidUpdate')
  }


  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  render() {
    console.log('render')
    return (
      <div className="chapter-2__location">
        <h1>
          {this.state.latitude ?
            `Latitude: ${this.state.latitude ? this.state.latitude : 'Location Unvailble'}` :
            `Error: ${this.state.isError ? this.state.isError : 'Location Unavailble'}`}
        </h1>
        <button onClick={() => {
          this.setState((prevState) => ({
              ouch: !prevState.ouch
          }))

          this.setState((prevState) => ({
            buttonText: prevState.buttonText === 'click me' ? 'ouch' : 'click me'
          }))
        }}>{this.state.buttonText}</button>
      </div>
    )
  }
}
