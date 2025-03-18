import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Milestone Builders</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </main>
    </>
  );
} 