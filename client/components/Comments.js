import React, { Component } from 'react';

class Comments extends Component {

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{ comment.user }</strong>
          { comment.text }
          
          <button className="remove-comment" onClick={ this.props.removeComment.bind(null, this.props.params.postId, i) } >
               &times; 
          </button>
        </p>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { postId } =  this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        
        { this.props.postComments.map((comment, i) => this.renderComment(comment, i)) }

        <form ref="commentForm" className="comment-form" onSubmit={event => this.handleSubmit(event)} >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;