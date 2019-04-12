import React, { Component } from 'react'
import axios from 'axios'

export default class PostList extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = () => {
        axios.get('api/v1/posts').then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                test
            </div>
        )
    }
}
