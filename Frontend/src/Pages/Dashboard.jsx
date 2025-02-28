import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../services/api';
import BlogList from '../components/BlogList';
import { useAuth } from '../context/AuthContext'; // Import useAuth hook

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const { logout, admin } = useAuth(); // Get logout function and admin info from auth context
  const navigate = useNavigate(); // For navigation after logout

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get('/blogs');
        setBlogs(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
    
    // Check if first visit
    const hasVisited = localStorage.getItem('hasVisitedDashboard');
    if (hasVisited) {
      setShowWelcome(false);
    } else {
      localStorage.setItem('hasVisitedDashboard', 'true');
    }
  }, []);

  const filteredBlogs = blogs.filter(blog => 
    blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle logout function
  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from AuthContext
      navigate('/'); // Redirect to home page after successful logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-md w-full">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute top-0 w-full h-full border-4 border-blue-100 rounded-full"></div>
            <div className="absolute top-0 w-full h-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Retrieving your content</h3>
          <p className="text-gray-600">Please wait while we load your blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-4">
            <div className="mb-4 bg-blue-500 text-white p-3 inline-flex rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Your Blog Dashboard</h2>
            <p className="text-gray-600 mb-2">Your new and improved dashboard is ready! Manage your content with powerful tools and a beautiful interface.</p>
            {admin && admin.email && (
              <p className="text-blue-600 font-medium mb-4">Logged in as: {admin.email}</p>
            )}
            <button 
              onClick={() => setShowWelcome(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
      
      <div className="container mx-auto p-6 pt-8">
        <div className="mb-8 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Blog Dashboard</span>
                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {blogs.length} {blogs.length === 1 ? 'Post' : 'Posts'}
                </span>
              </h1>
              {admin && admin.email && (
                <p className="text-gray-500">Welcome, <span className="font-medium text-blue-600">{admin.email}</span></p>
              )}
            </div>
            
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <div className="relative flex-grow lg:flex-grow-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Link
                to="/blogs/create"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-md flex items-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Create New
              </Link>
              
              {/* Logout Button */}
              <button
                type="button"
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition shadow-md flex items-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                Logout
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-blue-800">Total Posts</h3>
                  <p className="text-2xl font-bold text-blue-900">{blogs.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          {filteredBlogs.length > 0 ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {searchTerm ? `Search Results (${filteredBlogs.length})` : 'Your Blog Posts'}
                </h2>
                <div className="text-gray-500 text-sm">
                  {searchTerm && `Showing ${filteredBlogs.length} of ${blogs.length} posts`}
                </div>
              </div>
              
              <BlogList blogs={filteredBlogs} setBlogs={setBlogs} viewMode="grid" />
            </div>
          ) : (
            <div className="text-center py-16">
              <svg 
                className="mx-auto h-16 w-16 text-gray-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {searchTerm ? "No matching posts found" : "No blog posts yet"}
              </h3>
              <p className="mt-2 text-gray-500 max-w-md mx-auto">
                {searchTerm 
                  ? `Try adjusting your search term or browse all posts by clearing the search.` 
                  : `Share your ideas with the world. Your blog posts will appear here once you start creating content.`
                }
              </p>
              <div className="mt-6">
                {searchTerm ? (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Clear Search
                  </button>
                ) : (
                  <Link
                    to="/blogs/create"
                    className="inline-flex items-center px-5 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <svg 
                      className="-ml-1 mr-2 h-5 w-5" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Create Your First Blog
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;