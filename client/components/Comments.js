import React, { Component } from 'react'

const Comments = React.createClass({
    // Getting fancy with that ES6... for fun.
    handleSubmit(e) {
        e.preventDefault();

        const {
            props: { addComment, params: { postId } },
            refs: { author, comment }
        } = this;

        addComment(postId, author.value, comment.value);
        [author.value, comment.value] = ["", ""]
    },
    render() {
        const {
            postComments,
            removeComment,
            params: { postId }
        } = this.props
        return (
            <div className="comments">
                {postComments ?
                    postComments.map((comment, i) => (
                        <div key={i} className="comment">
                            <strong>{comment.user}</strong>
                            {comment.text}
                            <button
                                className="remove-comment"
                                onClick={removeComment.bind(null, postId, i)}
                            >&times;</button>

                        </div>
                    )) : (
                        <div className="comment">
                            <p>Be the first to comment!</p>
                        </div>
                    )
                }
                <form
                    href="commentForm"
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