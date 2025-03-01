
import { motion } from "framer-motion";

export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Terms of Use
      </motion.h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing or using The Meridian website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
          <p className="text-muted-foreground">
            Permission is granted to temporarily view the materials on The Meridian's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on The Meridian's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
          <p className="text-muted-foreground">
            The materials on The Meridian's website are provided on an 'as is' basis. The Meridian makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Limitations</h2>
          <p className="text-muted-foreground">
            In no event shall The Meridian or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Meridian's website, even if The Meridian or a The Meridian authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Accuracy of Materials</h2>
          <p className="text-muted-foreground">
            The materials appearing on The Meridian's website could include technical, typographical, or photographic errors. The Meridian does not warrant that any of the materials on its website are accurate, complete or current. The Meridian may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Links</h2>
          <p className="text-muted-foreground">
            The Meridian has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Meridian of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Modifications</h2>
          <p className="text-muted-foreground">
            The Meridian may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Governing Law</h2>
          <p className="text-muted-foreground">
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
          </p>
        </section>
      </div>
    </div>
  );
}
