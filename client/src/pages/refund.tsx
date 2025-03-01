
import { motion } from "framer-motion";

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Refund Policy
      </motion.h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Booking Amount</h2>
          <p className="text-muted-foreground">
            When you book an apartment at The Meridian, you will be required to pay a booking amount. This booking amount confirms your interest in purchasing the property and reserves the selected unit for you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Cancellation by Customer</h2>
          <p className="text-muted-foreground">
            If you decide to cancel your booking, the following refund policy will apply:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>Cancellation within 15 days of booking: 90% of the booking amount will be refunded</li>
            <li>Cancellation between 16-30 days of booking: 75% of the booking amount will be refunded</li>
            <li>Cancellation between 31-60 days of booking: 50% of the booking amount will be refunded</li>
            <li>Cancellation after 60 days of booking: No refund will be provided</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Cancellation Due to Rejection of Application</h2>
          <p className="text-muted-foreground">
            If your home loan application is rejected by financial institutions due to reasons beyond your control, and proper documentation is provided, we will refund 95% of the booking amount regardless of the time elapsed since booking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Refund Process</h2>
          <p className="text-muted-foreground">
            All refunds will be processed within 30 working days from the date of receiving a written cancellation request along with all necessary documents. The refund will be made to the same account from which the payment was originally made.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Project Delays</h2>
          <p className="text-muted-foreground">
            In the event of significant delays in the project completion beyond the date mentioned in the agreement:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>Delay up to 6 months: No compensation will be provided as minor delays are common in construction</li>
            <li>Delay between 6-12 months: Compensation as per the terms mentioned in the Sale Agreement</li>
            <li>Delay beyond 12 months: Option to withdraw from the project with a full refund plus interest as specified in the Sale Agreement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Force Majeure</h2>
          <p className="text-muted-foreground">
            The Meridian will not be liable for any delay or failure to perform due to circumstances beyond reasonable control, including but not limited to acts of God, natural disasters, pandemic, war, civil unrest, or governmental regulations. In such cases, timelines may be extended without compensation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            The Meridian reserves the right to modify this Refund Policy at any time. Any changes will be effective immediately upon posting on our website. For bookings already made, the Refund Policy that was in effect at the time of booking will apply.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Contact Information</h2>
          <p className="text-muted-foreground">
            For any refund-related queries or to submit a refund request, please contact:
          </p>
          <p className="text-muted-foreground mt-2">
            The Meridian Sales Office<br />
            500m from Bommasandra Metro Station<br />
            Electronic City Phase 2<br />
            Bangalore, Karnataka 560100<br />
            Email: refunds@themeridian.com<br />
            Phone: +91 9876543210
          </p>
        </section>
      </div>
    </div>
  );
}
