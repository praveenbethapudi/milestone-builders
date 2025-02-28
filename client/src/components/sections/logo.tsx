import { motion } from "framer-motion";

export default function Logo() {
  return (
    <section className="min-h-[calc(100vh-100vh)] py-[5px] px-4 bg-accent flex items-center">
      <div className="max-w-7xl mx-auto flex justify-center w-full">
        <motion.img
          src="/images/logo-removebg-preview.png"
          alt="The Meridian Luxury Apartments"
          className="h-24 md:h-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}