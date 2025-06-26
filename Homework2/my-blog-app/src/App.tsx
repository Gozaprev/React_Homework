import { Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import BlogPostSearch from "./components/BlogPostSearch";
import "./App.css";
import "./components/BlogPostSearch.css";


function App() {
  return (
    <BlogProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <BlogPostSearch />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BlogProvider>
  );
}

export default App;
