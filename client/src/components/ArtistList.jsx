import React, { Component } from 'react'
import axios from 'axios'

export default class ArtistList extends Component {

    state = {
        post: {}
    }

    axios.get('api/v1/posts')

    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}
