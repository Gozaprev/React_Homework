import React, { createContext, useContext } from "react";

export type BlogPost = {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
};

const initialPosts: BlogPost[] = [
    {
        id: "1",
        title: "First Post",
        content: "This is the content of the first post.",
        author: "Alice",
        createdAt: "2025-06-25",
    },
    {
        id: "2",
        title: "React Context is Awesome",
        content: "Let's explore how to use React Context for global state.",
        author: "Bob",
        createdAt: "2025-06-24",
    },
    {
        id: "3",
        title: "Vite vs CRA",
        content: "Vite offers a much faster development experience than Create React App.",
        author: "Charlie",
        createdAt: "2025-06-23",
    },
];

const BlogContext = createContext<{ posts: BlogPost[] }>({ posts: initialPosts });

export const useBlog = () => useContext(BlogContext);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <BlogContext.Provider value={{ posts: initialPosts }}>
        {children}
    </BlogContext.Provider>
);

