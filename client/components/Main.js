import React, { Component } from 'react';
import { Link } from 'react-router'

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Instadux</Link>
                </h1>
            </div>
        )
    }
})

export default Main;