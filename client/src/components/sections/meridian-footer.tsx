import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MeridianFooter() {
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
            <h3 className="text-lg font-semibold mb-2">The Meridian</h3>
            <p className="text-muted-foreground text-sm">
              Sy 98/2, 60' Road, Milestone Palms<br />
              Haragadde, Jigani<br />
              Bangalore, Karnataka 560105
            </p>
            <p className="text-muted-foreground text-sm">
              Phone: +91 744 007 5000<br />
              Email: meridian@milestone.builders
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <Link
              to="#amenities"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              Amenities
            </Link>
            <Link
              to="#floor-plans"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              Floor Plans
            </Link>
            <Link
              to="#location"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              Location
            </Link>
            <Link
              to="#contact"
              className="text-muted-foreground text-sm hover:text-primary"
            >
              Contact
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

