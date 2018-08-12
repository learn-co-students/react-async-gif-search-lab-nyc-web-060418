import React, {Component} from 'react'

export default class GifSearch extends Component{
  state = {
    searchTerm: ''
  }

  onChange = (event) => {
    event.persist()
    
    const inputSearch = (event.target.value).replace(/ /g, "%20")
    this.setState({
      searchTerm: inputSearch
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.searchTerm(this.state.searchTerm)
  }

  render() {
    return(
      <div>
      <form onSubmit = {this.onSubmit}>
      <input type = "text" id = "search" onChange = {this.onChange} />
      <input type = "submit" value = "search" />
      </form>
      </div>
    )
  }


}
