import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-spice pattern-overlay">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-serif text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-serif text-3xl font-semibold text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for seems to have gone missing like spices in an empty jar.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-warm hover:opacity-90 text-white">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" onClick={() => window.history.back()}>
            <button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
