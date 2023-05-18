import "./blogPostPage.css";
import { useParams } from "react-router-dom";
import blogPost from "../../model/blogPost";

interface props {
    blogPosts: blogPost[]
}

function BlogPostPage({ blogPosts }: props) {

    //Finds matching blogpost out of all blogposts
    const { postId } = useParams();
    const selectedPost = blogPosts.find((post) => post.id === Number(postId))
    const blogPost = selectedPost ? selectedPost : {} as blogPost

    return (
        <div id="blog-post-page-content">
            <h1>{blogPost.title}</h1>
            <p>{blogPost.body}</p>
        </div>
    );
}

export default BlogPostPage;