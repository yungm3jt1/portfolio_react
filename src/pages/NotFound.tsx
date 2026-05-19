import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-black text-white px-6 py-20 flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-3xl font-semibold mt-6 mb-4">Page Not Found</h2>
      <p className="text-slate-400 mb-8 max-w-md text-center">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
      >
        <Home className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
