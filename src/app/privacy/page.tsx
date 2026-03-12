import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for PoECalc.tools.",
  alternates: {
    canonical: "https://poecalc.tools/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-poe-gold mb-6">Privacy Policy</h1>

      <div className="bg-poe-card border border-poe-border rounded-lg p-6 space-y-6 text-sm text-poe-text-dim leading-relaxed">
        <p>
          <strong className="text-poe-text">Last updated:</strong> March 2026
        </p>

        <section>
          <h2 className="text-lg font-semibold text-poe-text mb-2">
            Introduction
          </h2>
          <p>
            PoECalc.tools (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
            respects your privacy. This Privacy Policy explains how we collect,
            use, and protect information when you visit our website at
            poecalc.tools.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-poe-text mb-2">
            Information We Collect
          </h2>
          <p>
            <strong className="text-poe-text">
              We do not collect personal information.
            </strong>{" "}
            All calculator inputs and results are processed entirely in your
            browser. No data is sent to our servers or any third party.
          </p>
          <p className="mt-2">
            We may use basic analytics tools (such as Google Analytics or
            similar) to understand how our website is used. These tools may
            collect:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Pages visited and time spent on pages</li>
            <li>Browser type and device information</li>
            <li>Referring website</li>
            <li>Approximate geographic location (country/region level)</li>
          </ul>
          <p className="mt-2">
            This data is collected in aggregate and cannot be used to personally
            identify you.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-poe-text mb-2">Cookies</h2>
          <p>
            We may use essential cookies required for the website to function
            properly. Analytics tools may also set cookies to track usage
            patterns. You can control cookie settings through your browser
            preferences.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-poe-text mb-2">
            Third-Party Services
          </h2>
          <p>
            Our website may use third-party services for analytics and content
            delivery. These services have their own privacy policies, and we
            encourage you to review them.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-poe-text mb-2">
            Data Security
          </h2>
          <p>
            Since we do not store personal data, there is minimal risk of data
            breaches affecting your personal information. All calculations are
            performed client-side in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-poe-text mb-2">
            Children&apos;s Privacy
          </h2>
          <p>
            Our website is not directed at children under the age of 13. We do
            not knowingly collect information from children.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-poe-text mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-poe-text mb-2">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you can reach us
            through the contact information on our About page.
          </p>
        </section>
      </div>
    </div>
  );
}
