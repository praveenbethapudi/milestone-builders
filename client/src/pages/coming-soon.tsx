import { motion } from "framer-motion";
import { Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-accent/30 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <Clock className="w-20 h-20 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          We're working on something exciting! Stay tuned for updates about our next premium residential project.
        </p>
        <Link to="/">
          <Button variant="outline" size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
