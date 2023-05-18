import "./blogPost.css";
import blogPost from "../../model/blogPost";
import { Link } from "react-router-dom";

interface props {
    blogPost: blogPost;
}

function Post({ blogPost }: props) {

    const MAX_BODY_LENGTH = 50;


    //Truncates body if its longer than 50 characters
    function truncateText(text: string, maxLength: number) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }

    const bodyPreview = truncateText(blogPost.body, MAX_BODY_LENGTH);

    return (
        <Link to={`/post/${blogPost.id}`}>
            <div id="blog-post">
                <h1>{blogPost.title}</h1>
                <p>{bodyPreview}</p>
            </div>
        </Link>
    );
}
export default Post;