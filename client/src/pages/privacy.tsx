import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Milestone Builders</title>
        <meta 
          name="description" 
          content="Learn how Milestone Builders collects, uses, and protects your personal information. Our privacy policy explains our data practices and your privacy rights."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://milestone.builders/privacy" />
      </Helmet>

      <Header />

      <main className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#FFF3C4]"
      >
        Privacy Policy
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

            <p>
              At Milestone Builders ("we", "us", or "our"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website milestone.builders or engage with our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, postal address, and other information you provide when filling out forms on our website, registering for property viewings, or making inquiries.
              </li>
              <li>
                <strong>Financial Information:</strong> Payment details, bank account information, and other financial information necessary for processing property bookings and transactions.
              </li>
              <li>
                <strong>Identity Verification:</strong> PAN card, Aadhaar card, passport, or other government-issued identification for KYC compliance and property registration.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type, device information, operating system, and other analytics data collected through cookies and similar technologies.
              </li>
              <li>
                <strong>Usage Information:</strong> Information about how you use our website, including pages visited, time spent, and actions taken.
              </li>
          </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Collect Information</h2>
            <p>
              We collect information through:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Direct interactions when you provide information through forms, emails, calls, or in-person meetings</li>
              <li>Automated technologies such as cookies and similar tracking technologies</li>
              <li>Third-party sources such as business partners, public databases, and social media platforms (where permitted by law)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>To provide and manage our services, including processing property inquiries, bookings, and transactions</li>
              <li>To communicate with you about properties, services, promotions, and events</li>
              <li>To personalize your experience on our website and provide content tailored to your interests</li>
              <li>To improve our website, products, and services through analysis of usage patterns</li>
              <li>To comply with legal obligations, including property registration, tax reporting, and KYC requirements</li>
              <li>To protect our rights, privacy, safety, or property, and to detect and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing and Disclosure</h2>
            <p>
            We may share your information with:
          </p>
            <ul className="list-disc pl-6 my-4">
              <li>Service providers who assist us in operating our business (e.g., payment processors, CRM software providers, marketing agencies)</li>
              <li>Business partners involved in property development, construction, or sales</li>
              <li>Financial institutions for processing payments and loans</li>
              <li>Government authorities or regulatory bodies when required by law</li>
              <li>Professional advisors such as lawyers, accountants, and auditors</li>
              <li>Potential buyers or investors in the event of a merger, acquisition, or sale of our business</li>
          </ul>

            <p>
              We do not sell your personal information to third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining how long to keep your information, we consider the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, and legal requirements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
            <li>The right to data portability</li>
              <li>The right to withdraw consent (where processing is based on consent)</li>
          </ul>

            <p>
              To exercise these rights, please contact us using the details provided below. We may need to verify your identity before responding to your request.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities on our website. Cookies are small text files stored on your device that help us improve your experience, analyze website performance, and deliver targeted advertisements.
            </p>
            <p>
              You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. However, if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by Milestone Builders. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. We encourage you to review the privacy policies of these third parties before providing any information to them.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Children's Privacy</h2>
            <p>
              Our website is not directed to children under the age of 18, and we do not knowingly collect personal information from children under 18. If we learn that we have collected personal information from a child under 18, we will promptly delete that information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              Milestone Builders<br />
              Sy 98/2, 60' Road, Milestone Palms<br />
              Haragadde, Jigani<br />
              Bangalore, Karnataka 560105<br />
              Email: privacy@milestone.builders<br />
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
