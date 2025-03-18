import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";

export default function RefundPolicy() {
  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy | Milestone Builders</title>
        <meta 
          name="description" 
          content="Understand Milestone Builders' refund and cancellation policy for property bookings. Learn about our terms for cancellations, refunds, and booking amount."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://milestone.builders/refund" />
      </Helmet>

      <Header />

      <main className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#FFF3C4]"
      >
            Refund & Cancellation Policy
      </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg max-w-none mt-8 prose-headings:text-[#FFF3C4] prose-p:text-gray-100 prose-li:text-gray-100 prose-strong:text-gray-100"
          >
          <p className="text-muted-foreground">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Booking Amount</h2>
            <p>
              When you make a property booking with Milestone Builders, a booking amount of 10% of the total property value is required to secure your unit. This amount is part of the total property cost and demonstrates your commitment to the purchase.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cancellation Terms</h2>
            <p>
              If you wish to cancel your booking, the following terms apply:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Cancellation within 7 days of booking: Full refund of the booking amount</li>
              <li>Cancellation between 8-30 days: 75% refund of the booking amount</li>
              <li>Cancellation between 31-60 days: 50% refund of the booking amount</li>
              <li>Cancellation after 60 days: No refund of the booking amount</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Refund Process</h2>
            <p>
              Once your cancellation request is approved:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>The applicable refund amount will be processed within 15 working days</li>
              <li>The refund will be made to the same account/method used for the original payment</li>
              <li>Any bank charges or transaction fees will be deducted from the refund amount</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Special Circumstances</h2>
            <p>
              In case of special circumstances such as:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Project delays beyond the agreed timeline</li>
              <li>Significant changes in project specifications</li>
              <li>Force majeure events</li>
              <li>Legal or regulatory issues affecting the project</li>
          </ul>
            <p>
              The refund terms may be revised in favor of the customer, subject to management discretion and applicable laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Documentation Required</h2>
            <p>
              To process a cancellation and refund, please submit:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Written cancellation request with reason</li>
              <li>Original booking receipt</li>
              <li>Bank account details for refund transfer</li>
              <li>Any other relevant documentation as requested</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact for Refunds</h2>
            <p>
              For any queries regarding refunds or cancellations, please contact:
            </p>
            <p>
              Milestone Builders<br />
              Sy 98/2, 60' Road, Milestone Palms<br />
              Haragadde, Jigani<br />
              Bangalore, Karnataka 560105<br />
              Email: refunds@milestone.builders<br />
              Phone: +91 744 007 5000
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </motion.div>
      </div>
      </main>
    </>
  );
}
