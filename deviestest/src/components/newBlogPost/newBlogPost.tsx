import { useState } from "react";
import "./newBlogPost.css"
import axios from "axios";
import blogPost from "../../model/blogPost";

function NewBlogPost() {

    const [newPost, setNewPost] = useState({} as blogPost);
    const MAX_TITLE_LENGTH = 150;

    function updateNewPost(prop: keyof blogPost, value: any) {
        setNewPost((object) => ({
            ...object,
            [prop]: value,
        }));
    }

    //Post request to API checking if title is short enough
    function submitNewPost() {
        if (newPost.title.length <= MAX_TITLE_LENGTH) {
            axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }

    return (
        <div id="new-post-container">
            <input type="text" id="post-title" placeholder="Title" onChange={(e) => updateNewPost("title", e.target.value)} />
            <textarea id="post-body" placeholder="Enter text" onChange={(e) => updateNewPost("body", e.target.value)} />
            <button id="post-new-button" onClick={() => submitNewPost()}>Submit</button>
        </div>
    );
}

export default NewBlogPost;