import React, {Component} from 'react'

export default class GifSearch extends Component {

  constructor(props){
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  onChange = (event) => {
    event.persist()
    const urlSearchTerm = (event.target.value).replace(/ /g, "%20")
    this.setState({
      searchTerm: urlSearchTerm,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    
    this.props.searchTerm(this.state.searchTerm)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" id="form-search-bar" onChange={this.onChange}/>
          <br />
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}
