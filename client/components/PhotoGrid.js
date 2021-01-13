import React, { Component } from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => {
                    return (
                        <Photo
                            key={i}
                            i={i}
                            post={post}
                            {...this.props}
                        />
                    )
                })}
            </div>
        )
    }
})

export default PhotoGrid;