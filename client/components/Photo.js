import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    onClick() {
        const { i, increment } = this.props
        console.log(`ONCLICK: Calling increment in index on ${i} photo`);
        increment(i)
    },
    render() {
        const { post, i, comments } = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img
                            src={post.display_src}
                            alt={post.caption}
                            className="grid-photo"
                        />
                    </Link>
                    <CSSTransitionGroup
                        transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <span key={post.likes} className="likes-heart">
                            {post.likes}
                        </span>
                        <figcaption>
                            <p>{post.caption}</p>
                        </figcaption>
                        <div className="control-buttons">
                            <button onClick={this.onClick} className="likes">&hearts; {post.likes}</button>
                            <Link className="button" to={`/view/${post.code}`}>
                                <span className="comment-count">
                                    <span className="speech-bubble"></span>
                                    {comments[post.code] ? comments[post.code].length : 0}
                                </span>
                            </Link>
                        </div>
                    </CSSTransitionGroup>
                </div>
            </figure>
        )
    }
})

export default Photo;