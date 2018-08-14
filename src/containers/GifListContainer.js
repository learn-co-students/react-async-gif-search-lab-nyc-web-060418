import React, { Component } from 'react';

import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

export default class GifListContainer extends Component {

  state = {
    gif: []
  }

  queryData(searchInfo) {
    this.componentDidMount(searchInfo)
  }

  render() {
    return( <div>
        < GifList gifs={this.state.gif}/>
        < GifSearch handler={event => this.queryData(event)} color={'black'}/>
      </div>
    )
  }

  componentDidMount(query = 'YOUR QUERY HERE') {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(data => data.json())
    .then(gifs => {
      let array = gifs.data.slice(0, 3);
      let newArray = array.map(picture => picture.images.original.url)
      this.setState({
        gif: newArray
      })
    })
  }
}
