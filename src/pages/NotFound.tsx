
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <Logo className="mb-8" />
        
        <h1 className="text-6xl font-bold mb-4 text-oneid-navy dark:text-white">404</h1>
        <p className="text-xl mb-6 text-muted-foreground">
          Oops! We couldn't find the page you're looking for.
        </p>
        
        <Button asChild size="lg">
          <Link to="/">
            Return to Homepage
          </Link>
        </Button>
      </main>
      
      <footer className="py-4 px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Kilovate OneID. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFound;
