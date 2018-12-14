import React, { Component } from 'react';
import axios from 'axios';
// https://jsonplaceholder.typicode.com/posts

import { Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => } />
            </div>
        );
    }
}

export default Blog;