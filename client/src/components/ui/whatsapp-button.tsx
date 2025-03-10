import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+917440075000";
  const message = "Hi, I'm interested in The Meridian luxury apartments!";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_new");
  };

  return (
    // #25D366
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#CFBE43] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
}
