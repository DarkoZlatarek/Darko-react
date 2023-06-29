import React, { Component } from 'react';
import axios from 'axios';

export class HTTPRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: null
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => {
            console.log(response);
            this.setState({
                posts: Array.isArray(response.data)
                ? response.data
                : [response.data]
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

  render() {
    const posts = this.state.posts;
    return (
      <div>
        <h2>Post</h2>
        {
            posts.length ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.id}{post.title}</h2>
                        <h4>By used ID {post.usedId}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            ) : (
                this.state.error
                ? <p>{this.state.error}</p>
                : <h4>Loading posts....</h4>
            )
        }
      </div>
    )
  }
}

export default HTTPRequest