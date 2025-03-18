import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SkyViewFooter() {
  return (
    <footer className="bg-muted py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-lg font-semibold mb-2">SkyView</h3>
            <p className="text-muted-foreground text-sm">
              A premium residential project by
              <br />
              Milestone Builders
              <br />
              Launching soon in Bangalore
            </p>
            <p className="text-muted-foreground text-sm">
              Email: info@milestonebuilders.com
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-lg font-semibold mb-2">Register Interest</h3>
            <p className="text-muted-foreground text-sm">
              Be the first to know about SkyView's exclusive launch offers and details.
            </p>
            <Link
              to="/"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              Back to Home
            </Link>
            <Link
              to="/meridian"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              Visit The Meridian
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <Link
              to="/faq"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              Terms of Use
            </Link>
            <Link
              to="/privacy"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/refund"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              Refund Policy
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Milestone Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 