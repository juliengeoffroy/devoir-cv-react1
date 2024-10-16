import React from 'react';
import "../css/Blog.css"
import Cardblog from '../components/Cardblog';
import Cardblog2 from "../components/Cardblog2";

function Blog () {
    return (
        
        <section className="blog">
            <img src="/img/banner.jpg" alt=""></img>
            <h3>blog</h3>
            <p>Retrouver ici quelques articles sur le développement web</p>
            <hr />
            <div className="blogcard1">
                <Cardblog />
            </div>
            <div className="blogcard2">
                <Cardblog2 />
            </div>
        </section>
    );
};

export default Blog;