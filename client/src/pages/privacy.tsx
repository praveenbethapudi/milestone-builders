import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Milestone Builders</title>
        <meta
          name="description"
          content="Privacy policy for Milestone Builders website. Learn about how we collect, use, and protect your personal information."
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
            <h1 className="mb-8 text-4xl font-bold text-[#FFEA57]">Privacy Policy</h1>

            <div className="prose prose-sm prose-invert max-w-none">
              <p>
                At Milestone Builders, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, and protect your personal
                information when you use our website.
              </p>

              <h2 className="text-[#FFE082]">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as
                your name, email address, phone number, and any other information
                you choose to provide when you:
              </p>
              <ul>
                <li>Contact us through our website</li>
                <li>Sign up for our newsletter</li>
                <li>Request information about our properties</li>
                <li>Submit an inquiry or feedback</li>
              </ul>

              <h2 className="text-[#FFE082]">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates about our properties and services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-[#FFE082]">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this Privacy Policy or as required by law.
              </p>

              <h2 className="text-[#FFE082]">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or
                destruction.
              </p>

              <h2 className="text-[#FFE082]">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal
                information. You may also opt out of receiving marketing
                communications from us at any time.
              </p>

              <h2 className="text-[#FFE082]">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>

              <h2 className="text-[#FFE082]">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p>
                Email: privacy@milestonebuilders.com
                <br />
                Phone: +91 (800) 123-4567
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
