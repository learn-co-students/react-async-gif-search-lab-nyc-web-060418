import React, { Component } from 'react'

export default class extends Component {

  state = {
    search:''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.search)
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.search} onChange={this.onChange} name="search" />
        <button type="submit">Search</button>
      </form>
    )
  }
}
