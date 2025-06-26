
import React, { useState } from "react";
import { useBlog } from "../context/BlogContext";
import { Link } from "react-router-dom";

const BlogPostSearch = () => {
    const { posts } = useBlog();

    const [search, setSearch] = useState("");

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Search posts"
                aria-label="Search posts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />

            {filteredPosts.length > 0 ? (
                <ul className="post-list">
                    {filteredPosts.map(post => (
                        <li key={post.id} className="post-item">
                            <Link to={`/posts/${post.id}`} className="post-title">
                                {post.title}
                            </Link>
                            <div className="post-meta">
                                by {post.author} &middot; {post.createdAt}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-posts">No posts found.</p>
            )}
        </div>
    );
};

export default BlogPostSearch;
