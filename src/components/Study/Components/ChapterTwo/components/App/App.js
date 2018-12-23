import React, {Component} from 'react'
import {SeasonDisplay} from '../'
import { Spinner } from '../../../../../';

export default class App extends Component {
  state = {
    latitude: null,
    isError: '',
    buttonText: 'click me'
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
      setTimeout(() => {
        this.setState(() => ({
          latitude: position.coords.latitude
        }))
      }, 3000)
      , ({message}) => this.setState(() => ({isError: message})))
  }

  clickMe = () => {
    this.setState((prevState) => ({
      ouch: !prevState.ouch
    }))

    this.setState((prevState) => ({
      buttonText: prevState.buttonText === 'click me' ? 'ouch' : 'click me'
    }))
  }

  render() {
    if (this.state.isError && !this.state.latitude) {
        return <div>Error: {this.state.isError}</div>
    }

    if (!this.state.isError && this.state.latitude) {
        return <SeasonDisplay latitude={this.state.latitude} />
    }

    return <Spinner />

  }
}
