import React from "react";

function BlogPost(props) {
    return(
        <div>
            <h1>{props.post.title}</h1>
            <h3>{props.post.subTitle}</h3>
            <p>Posted by {props.post.author} on {props.post.date}</p>
        </div>
    )
}

export default BlogPost