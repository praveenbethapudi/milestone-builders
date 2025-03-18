import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";

export default function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Terms of Use - Milestone Builders</title>
        <meta
          name="description"
          content="Terms of use for Milestone Builders website. Learn about the rules and guidelines for using our services."
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
            <h1 className="mb-8 text-4xl font-bold text-[#FFEA57]">Terms of Use</h1>

            <div className="prose prose-sm prose-invert max-w-none">
              <p>
                Welcome to Milestone Builders. By accessing and using our website,
                you agree to comply with and be bound by these Terms of Use.
              </p>

              <h2 className="text-[#FFE082]">Acceptance of Terms</h2>
              <p>
                By accessing or using our website, you acknowledge that you have
                read, understood, and agree to be bound by these terms and
                conditions.
              </p>

              <h2 className="text-[#FFE082]">Use of Website</h2>
              <p>
                You agree to use our website only for lawful purposes and in a
                way that does not infringe the rights of, restrict, or inhibit
                anyone else's use and enjoyment of the website.
              </p>

              <h2 className="text-[#FFE082]">Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, images, and software, is the property of
                Milestone Builders and is protected by copyright and other
                intellectual property laws.
              </p>

              <h2 className="text-[#FFE082]">Disclaimer</h2>
              <p>
                The information provided on our website is for general
                informational purposes only. We make no warranties about the
                accuracy, reliability, or availability of this information.
              </p>

              <h2 className="text-[#FFE082]">Limitation of Liability</h2>
              <p>
                Milestone Builders shall not be liable for any direct, indirect,
                incidental, special, or consequential damages resulting from the
                use or inability to use our website.
              </p>

              <h2 className="text-[#FFE082]">Links to Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the content or privacy practices of these
                websites.
              </p>

              <h2 className="text-[#FFE082]">Modifications</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time.
                Your continued use of our website following any changes
                constitutes your acceptance of the modified terms.
              </p>

              <h2 className="text-[#FFE082]">Governing Law</h2>
              <p>
                These Terms of Use shall be governed by and construed in
                accordance with the laws of India, without regard to its conflict
                of law provisions.
              </p>

              <h2 className="text-[#FFE082]">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Use, please
                contact us at:
              </p>
              <p>
                Email: legal@milestonebuilders.com
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
