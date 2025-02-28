import { motion } from "framer-motion";

export default function Logo() {
  return (
    <section className="h-[20vh] px-4 bg-accent flex items-center">
      <div className="max-w-7xl mx-auto flex justify-center">
        <motion.img
          src="/images/logo.png"
          alt="The Meridian Luxury Apartments"
          className="h-[80%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}