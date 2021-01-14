import React, { Component } from 'react';
import { Link } from 'react-router'
import Photo from './Photo';
import Comments from './Comments'

const Single = React.createClass({
    render() {
        const {
            params: { postId },
            posts,
            comments
        } = this.props
        const i = posts.findIndex(post => post.code === postId);
        const post = posts[i]
        return (
            <div className="single-photo">
                <Photo
                    i={i}
                    post={post}
                    {...this.props}
                />
                <Comments postComments={comments[postId]} />
            </div>
        )
    }
})

export default Single;