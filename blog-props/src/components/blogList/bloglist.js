import React from "react";
import BlogPost from './blogpost'
import Posts from './posts'
import './blogList.css'

function BlogList() {
 const post = Posts.map(post => {
    return(
        <BlogPost
        post ={post}
        />
    )
 }
    )

    return (
        <div className="container">
            <div className="list">
                {post}
            </div>
        </div>
    )
}

export default BlogList