import React, { Component } from 'react'

const Comments = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        const {
            props: { params: { postId } },
            refs: { author, comment },
            props: { addComment } } = this;
        addComment(postId, author.value, comment.value);
    },
    render() {
        const { postComments } = this.props
        return (
            <div className="comments">
                {postComments ?
                    postComments.map((comment, i) => (
                        <div key={i} className="comment">
                            <strong>{comment.user}</strong>
                            {comment.text}
                            <button>&times;</button>

                        </div>
                    )) : (
                        <div className="comment">
                            <p>Be the first to comment!</p>
                        </div>
                    )
                }
                <form
                    href="comment form"
                    className="comment-form"
                    onSubmit={this.handleSubmit}
                >
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
})

export default Comments;