import React, { Component } from 'react'

const Comments = React.createClass({
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
                <form href="comment form" className="comment-form">
                    <input type="text" href="author" placeholder="author" />
                    <input type="text" href="comment" placeholder="comment" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
})

export default Comments;