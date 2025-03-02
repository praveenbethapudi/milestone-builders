import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
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
              500m from Bommasandra Metro Station<br />
              Electronic City Phase 2<br />
              Bangalore, Karnataka 560100
            </p>
            <p className="text-muted-foreground text-sm">
              Phone: +91 9876543210
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
            <Link to="/" className="text-muted-foreground text-sm hover:text-primary">
              Home
            </Link>
            <a href="#amenities" className="text-muted-foreground text-sm hover:text-primary">
              Amenities
            </a>
            <a href="#features" className="text-muted-foreground text-sm hover:text-primary">
              Features
            </a>
            <a href="#contact" className="text-muted-foreground text-sm hover:text-primary">
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <Link to="/terms" className="text-muted-foreground text-sm hover:text-primary">
              Terms of Use
            </Link>
            <Link to="/privacy" className="text-muted-foreground text-sm hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/refund" className="text-muted-foreground text-sm hover:text-primary">
              Refund Policy
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Meridian Luxury Apartments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}