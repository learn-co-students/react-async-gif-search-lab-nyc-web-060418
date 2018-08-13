import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class extends Component {

  state = {
    gifs: []
  }

  componentDidMount(search) {
    if(search){
      fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(giphy => {
        this.setState({
          gifs: giphy.data.slice(0, 3)
        })
      })
    }
  }

  onSubmit = (search) => {
    this.componentDidMount(search)
  }

  render(){
    return(
      <div>
        <GifSearch onSubmit={this.onSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
