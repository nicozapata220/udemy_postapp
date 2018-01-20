import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import _ from 'lodash'
class PostIndex extends Component {
    //this is a lifecycle method. la idea es cargar los datos antes de que haga el render.
    componentDidMount(){
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <h3>Post</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
    
    renderPosts(){
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        })
    }
}

function mapStateToProps(state){
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex)