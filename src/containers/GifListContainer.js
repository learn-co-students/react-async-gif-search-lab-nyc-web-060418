import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class App extends React.Component {

  state = {
    gifs: [],
    searchTerm: "dog",
  }

   url = () =>  "http://api.giphy.com/v1/gifs/search?q=" + this.state.searchTerm + "&api_key=dc6zaTOxFJmzC&rating=g"

  componentDidMount() {
    fetch(this.url()).then(res => res.json()).then(json => {
      this.setState({
      gifs: (json.data).slice(0,3),
    }, () => console.log(this.state.gifs))
    })
  }

  updateSearchTerm = (givenTerm) => {
    this.setState({
      searchTerm: givenTerm,
    }, () => this.newFetch() )
  }

  newFetch = () => {
    fetch(this.url()).then(res => res.json()).then(json => {
      this.setState({
      gifs: (json.data).slice(0,3),
    }, () => console.log(this.state.gifs))
    })
  }



  render () {

    return(
      <div>
      <GifSearch searchTerm={this.updateSearchTerm}/>
      <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
