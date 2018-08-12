import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    fetchData(value = "dogs") {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(data => data.data).then(data => {
            this.setState({
                gifs: data.slice(0, 3)
            })
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    submitHandler = (newVal) => {
        this.fetchData(newVal)
    }

    render() {
        return (
            <div>
                < GifSearch submitHandler={this.submitHandler}  />
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;