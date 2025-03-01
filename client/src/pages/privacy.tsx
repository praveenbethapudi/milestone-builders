
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Privacy Policy
      </motion.h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-muted-foreground">
            When you visit our website or contact us through our forms, we may collect personal information such as:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Information about your property preferences and budget</li>
            <li>Browsing data and cookies information</li>
            <li>IP address and device information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>Responding to your inquiries about our properties</li>
            <li>Sending you updates about The Meridian development</li>
            <li>Improving our website and customer service</li>
            <li>Complying with legal obligations</li>
            <li>Conducting market research and analysis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Data Protection</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Cookies and Tracking</h2>
          <p className="text-muted-foreground">
            Our website uses cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools. However, if you block certain cookies, you may not be able to use all the features of our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Third-Party Disclosure</h2>
          <p className="text-muted-foreground">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>Service providers who assist us in operating our website and business</li>
            <li>Legal and regulatory authorities when required by law</li>
            <li>Professional advisors such as auditors, lawyers, and consultants</li>
            <li>Business partners involved in The Meridian development</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
          <p className="text-muted-foreground">
            Depending on your location, you may have certain rights regarding your personal data, including:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>The right to access your personal data</li>
            <li>The right to correct inaccurate personal data</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and if significant changes are made, we will provide a more prominent notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="text-muted-foreground mt-2">
            The Meridian<br />
            500m from Bommasandra Metro Station<br />
            Electronic City Phase 2<br />
            Bangalore, Karnataka 560100<br />
            Email: privacy@themeridian.com
          </p>
        </section>
      </div>
    </div>
  );
}
