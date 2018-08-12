import React, { Component } from 'react'

export default class GifList extends Component {

    makeGifList = () => {
        return this.props.gifs.map((gif) => {
            return <li key={gif.id}><img alt="" src={gif.images.downsized.url} /></li>
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.makeGifList()}
                </ul>
            </div>
        )
    }


}