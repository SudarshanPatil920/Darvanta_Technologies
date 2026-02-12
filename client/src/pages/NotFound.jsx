import { useEffect } from 'react'; // Add this import
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function NotFound() {
  // Add this useEffect to scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center px-6">
        <span className="text-8xl font-bold text-[#0A5C4E]/20">404</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
          Page not found
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/">
            <Button>Return home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Contact support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}