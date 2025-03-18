import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";

export default function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Milestone Builders</title>
        <meta 
          name="description" 
          content="Read the terms and conditions for Milestone Builders' website and services. Learn about our policies regarding property bookings, site usage, and legal agreements."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://milestone.builders/terms" />
      </Helmet>

      <Header />

      <main className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#FFF3C4]"
      >
        Terms of Use
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              Welcome to Milestone Builders ("Company", "we", "us", or "our"). By accessing and using our website at milestone.builders (the "Site"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our Site.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use the Site. By accessing or using the Site, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Site Content and Intellectual Property</h2>
            <p>
              All content on this Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Milestone Builders or its content suppliers and is protected by Indian and international copyright laws.
            </p>
            <p>
              The compilation of all content on this Site is the exclusive property of Milestone Builders and is protected by Indian and international copyright laws. All software used on this Site is the property of Milestone Builders or its software suppliers and is protected by Indian and international copyright laws.
            </p>
            <p>
              All trademarks, service marks, trade names, and trade dress that appear on this Site are proprietary to Milestone Builders or its licensors. You may not use or reproduce any trademarks, service marks, trade names, or trade dress without prior written consent from Milestone Builders.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Conduct</h2>
            <p>
              You agree that you will not use the Site to:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
              <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
              <li>Upload, post, or transmit any content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party</li>
              <li>Interfere with or disrupt the Site or servers or networks connected to the Site</li>
              <li>Collect or store personal data about other users without their consent</li>
              <li>Conduct any systematic or automated data collection activities on or in relation to the Site without our express written consent</li>
          </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Property Information and Booking</h2>
            <p>
              All property information, including floor plans, specifications, prices, and availability, is subject to change without notice. While we strive to provide accurate and up-to-date information, we do not warrant that the information on our Site is accurate, complete, or current.
            </p>
            <p>
              Any booking or reservation made through our Site is subject to confirmation by Milestone Builders. We reserve the right to refuse or cancel any booking for any reason, including but not limited to product or service availability, errors in the description or price of the product or service, or errors in your booking.
            </p>
            <p>
              All bookings are subject to our standard booking terms and conditions, which will be provided to you at the time of booking.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Privacy</h2>
            <p>
              Your use of our Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              Milestone Builders will not be liable for any damages of any kind arising from the use of this Site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>
            <p>
              The materials on this Site are provided on an 'as is' basis. Milestone Builders makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Milestone Builders, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising under or relating in any way to these Terms shall be resolved exclusively by the courts located in Bangalore, Karnataka, India.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
            <p>
              Milestone Builders reserves the right to modify these Terms at any time without prior notice. Your continued use of the Site following the posting of changes to these Terms will be deemed your acceptance of those changes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Milestone Builders<br />
              Sy 98/2, 60' Road, Milestone Palms<br />
              Haragadde, Jigani<br />
              Bangalore, Karnataka 560105<br />
              Email: info@milestone.builders<br />
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
