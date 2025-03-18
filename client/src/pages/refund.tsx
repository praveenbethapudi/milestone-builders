import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";

export default function RefundPolicy() {
  return (
    <>
      <Helmet>
        <title>Refund Policy - Milestone Builders</title>
        <meta
          name="description"
          content="Refund policy for Milestone Builders. Learn about our refund process and terms."
        />
      </Helmet>

      <Header />

      <main className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-8 text-4xl font-bold text-[#FFEA57]">
              Refund Policy
            </h1>

            <div className="prose prose-sm prose-invert max-w-none">
              <p>
                At Milestone Builders, we are committed to ensuring customer
                satisfaction with our services. This Refund Policy outlines the
                terms and conditions for refunds related to our property bookings
                and services.
              </p>

              <h2 className="text-[#FFE082]">Booking Cancellation</h2>
              <p>
                If you need to cancel your property booking, the following terms
                apply:
              </p>
              <ul>
                <li>
                  Cancellation within 48 hours of booking: Full refund of the
                  booking amount
                </li>
                <li>
                  Cancellation after 48 hours but within 7 days: 75% refund of
                  the booking amount
                </li>
                <li>
                  Cancellation after 7 days but within 30 days: 50% refund of the
                  booking amount
                </li>
                <li>
                  Cancellation after 30 days: No refund will be provided
                </li>
              </ul>

              <h2 className="text-[#FFE082]">Refund Process</h2>
              <p>
                To request a refund, please follow these steps:
              </p>
              <ol>
                <li>
                  Contact our customer service team through the provided channels
                </li>
                <li>
                  Provide your booking reference number and reason for
                  cancellation
                </li>
                <li>
                  Submit any required documentation to support your refund
                  request
                </li>
              </ol>

              <h2 className="text-[#FFE082]">Processing Time</h2>
              <p>
                Once your refund request is approved:
              </p>
              <ul>
                <li>
                  Credit/Debit card refunds: 5-7 business days
                </li>
                <li>
                  Bank transfer refunds: 7-10 business days
                </li>
              </ul>

              <h2 className="text-[#FFE082]">Exceptions</h2>
              <p>
                Certain circumstances may affect the refund process:
              </p>
              <ul>
                <li>
                  Force majeure events
                </li>
                <li>
                  Regulatory requirements
                </li>
                <li>
                  Special promotional offers or discounts
                </li>
              </ul>

              <h2 className="text-[#FFE082]">Contact Information</h2>
              <p>
                For refund-related inquiries, please contact us at:
              </p>
              <p>
                Email: refunds@milestonebuilders.com
                <br />
                Phone: +91 (800) 123-4567
                <br />
                Hours: Monday to Friday, 9:00 AM - 6:00 PM IST
              </p>

              <h2 className="text-[#FFE082]">Policy Updates</h2>
              <p>
                We reserve the right to modify this Refund Policy at any time.
                Any changes will be effective immediately upon posting on our
                website.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
