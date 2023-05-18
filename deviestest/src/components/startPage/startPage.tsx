import "./startPage.css";
import blogPost from "../../model/blogPost";
import Post from "../blogPost/blogPost";
import NewBlogPost from "../newBlogPost/newBlogPost";
import ScrollToTop from "../scrollToTop";

interface props {
    blogPosts: blogPost[];
}

//Maps all blogposts to a Post-component
function StartPage({ blogPosts }: props) {
    return (
        <div id="start-page">
            <div id="new-post">
                <NewBlogPost />
            </div>
            <div id="blog-post-container">
                {
                    blogPosts.map((blogPost: blogPost, index: number) => {
                        return (
                            <div id="blog-post-wrapper" key={index}>
                                <Post blogPost={blogPost} />
                            </div>
                        );
                    })
                }
            </div>
            <ScrollToTop />
        </div>
    );
}

export default StartPage;