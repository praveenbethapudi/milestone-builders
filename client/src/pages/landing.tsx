import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Clock } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Milestone Group</div>
          <nav className="space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary">About</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-20 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Discover our collection of premium residential projects that redefine luxury living
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Meridian Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link to="/meridian" className="block">
                <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src="/images/building-1.jpg" 
                      alt="The Meridian" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">The Meridian</h3>
                      <p className="text-sm text-white/80">Luxury Apartments in Jigani</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Building2 className="h-5 w-5" />
                      <span className="font-semibold">Ready to Move</span>
                    </div>
                    <p className="text-muted-foreground">
                      Experience luxury living with our carefully curated selection of premium amenities and thoughtfully designed spaces.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <Link to="/coming-soon" className="block">
                <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden bg-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Clock className="h-20 w-20 text-primary/20" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                      <p className="text-sm text-white/80">Our Next Exciting Project</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">Under Development</span>
                    </div>
                    <p className="text-muted-foreground">
                      Stay tuned for our upcoming project that will set new standards in premium living spaces.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <p className="text-sm text-muted-foreground">
                Milestone Group is dedicated to creating exceptional living spaces that combine luxury, comfort, and sustainability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email: info@milestonegroup.com<br />
                Phone: +91 744 007 5000
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
                <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Milestone Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
