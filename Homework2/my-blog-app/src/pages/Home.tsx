// With Tailwind

// import { Link } from "react-router-dom";
// import { useBlog } from "../context/BlogContext";

// const Home = () => {
//     const { posts } = useBlog();

//     return (
//         <div className="max-w-3xl mx-auto mt-8 px-4">
//             <h1 className="text-3xl font-bold mb-6 text-blue-700">All Blog Posts</h1>
//             <ul className="space-y-4">
//                 {posts.map(post => (
//                     <li
//                         key={post.id}
//                         className="bg-white rounded shadow p-4 hover:bg-blue-50 transition"
//                     >
//                         <Link
//                             to={`/posts/${post.id}`}
//                             className="text-xl font-semibold text-blue-600 hover:underline"
//                         >
//                             {post.title}
//                         </Link>
//                         <div className="text-gray-500 text-sm mt-1">
//                             by {post.author} &middot; {post.createdAt}
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Home;


import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const Home = () => {
    const { posts } = useBlog();

    return (
        <div className="container">
            <h1>All Blog Posts</h1>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`} className="post-title">
                            {post.title}
                        </Link>
                        <div className="post-meta">
                            by {post.author} &middot; {post.createdAt}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
