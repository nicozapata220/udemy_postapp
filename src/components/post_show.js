import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router-dom'

class PostShow extends Component {

  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params //esta notación crea una const id, y le asigna el valor de ID, dentro de this.props.match.params
      console.log(id) //hace el get del id como param en la url
      this.props.fetchPost(id);
    }
  }

  OnDeleteClick() {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    })
  }
  render() {
    const { post } = this.props
    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back to Index </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.OnDeleteClick.bind(this)}>
          Delete Post
          </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow)