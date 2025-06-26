import { useParams, Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const PostDetail = () => {
    // Get the post id from URL params
    const { id } = useParams<{ id: string }>();

    // Access posts from context
    const { posts } = useBlog();

    // Find the post with matching id (convert id param to number or string as needed)
    const post = posts.find((p) => p.id === id);

    // Handle post not found
    if (!post) {
        return (
            <div className="post-detail-error">
                <h2>Post Not Found</h2>
                <Link to="/" className="back-link">
                    &larr; Back to Posts
                </Link>
            </div>
        );
    }

    // Render post details
    return (
        <div className="post-detail">
            <h2>{post.title}</h2>
            <div className="post-meta">
                <span>By {post.author}</span>
                <span>&middot;</span>
                <span>{post.createdAt}</span>
            </div>
            <div className="post-content" style={{ whiteSpace: "pre-line" }}>
                {post.content}
            </div>
            <Link to="/" className="back-link">
                &larr; Back to Posts
            </Link>
        </div>
    );
};

export default PostDetail;
