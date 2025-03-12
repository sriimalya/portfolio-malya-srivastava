import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  // Sample blog posts data - in a real app, you would fetch this from an API
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React Router",
      excerpt: "Learn how to implement client-side routing in your React applications with React Router.",
      date: "March 5, 2025",
      author: "Malya Srivastava",
      category: "Development",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 2,
      title: "The Power of Tailwind CSS",
      excerpt: "Discover how Tailwind CSS can streamline your web development workflow and save you time.",
      date: "February 20, 2025",
      author: "Malya Srivastava",
      category: "Design",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 3,
      title: "Building a Chatroom with C++ and Winsock",
      excerpt: "A detailed guide on how to build a simple chatroom application using C++ and Winsock.",
      date: "January 10, 2025",
      author: "Malya Srivastava",
      category: "Development",
      image: "https://via.placeholder.com/400x250"
    }
  ]);

  return (
    <div className="py-8 mx-8">
      <h1 className="text-4xl font-bold mb-8 text-[#E1FF4A]">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="border border-zinc-700 rounded-lg overflow-hidden hover:border-[#E1FF4A] transition-colors duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-2 text-[#E1FF4A]">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              
              <Link to={`/blog/${post.id}`} className="inline-flex items-center text-[#E1FF4A] hover:underline">
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;