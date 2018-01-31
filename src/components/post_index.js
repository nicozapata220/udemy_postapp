import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
                <div className="text-xs-right">
                    <Link className = "btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
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
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        })
    }
}

function mapStateToProps(state){
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex)
