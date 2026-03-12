import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for PoECalc.tools.",
  alternates: {
    canonical: "https://poecalc.tools/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-[family-name:var(--font-heading)] text-2xl text-poe-gold tracking-wide mb-3">
            Privacy Policy
          </h1>
          <hr className="poe-separator max-w-[120px]" />
          <p className="text-poe-text-dim text-xs mt-3">Last updated: March 2026</p>
        </div>

        <div className="poe-frame animate-fade-in-delay-1">
          <div className="poe-frame-body space-y-8 text-sm leading-relaxed">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
                Introduction
              </h2>
              <p className="text-poe-text-dim">
                PoECalc.tools (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy.
                This Privacy Policy explains how we collect, use, and protect information when you
                visit our website at poecalc.tools.
              </p>
            </div>

            <hr className="poe-separator" />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
                Information We Collect
              </h2>
              <p className="text-poe-text-dim">
                <strong className="text-poe-text-bright">We do not collect personal information.</strong>{" "}
                All calculator inputs and results are processed entirely in your browser. No data is
                sent to our servers or any third party.
              </p>
              <p className="text-poe-text-dim mt-3">
                We may use basic analytics tools (such as Google Analytics or similar) to understand
                how our website is used. These tools may collect:
              </p>
              <ul className="text-poe-text-dim mt-2 space-y-1 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>Pages visited and time spent on pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>Browser type and device information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>Referring website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>Approximate geographic location (country/region level)</span>
                </li>
              </ul>
              <p className="text-poe-text-dim mt-2">
                This data is collected in aggregate and cannot be used to personally identify you.
              </p>
            </div>

            <hr className="poe-separator" />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
                Cookies
              </h2>
              <p className="text-poe-text-dim">
                We may use essential cookies required for the website to function properly. Analytics
                tools may also set cookies to track usage patterns. You can control cookie settings
                through your browser preferences.
              </p>
            </div>

            <hr className="poe-separator" />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
                Third-Party Services
              </h2>
              <p className="text-poe-text-dim">
                Our website may use third-party services for analytics and content delivery. These
                services have their own privacy policies, and we encourage you to review them.
              </p>
            </div>

            <hr className="poe-separator" />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
                Data Security
              </h2>
              <p className="text-poe-text-dim">
                Since we do not store personal data, there is minimal risk of data breaches affecting
                your personal information. All calculations are performed client-side in your browser.
              </p>
            </div>

            <hr className="poe-separator" />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
                Children&apos;s Privacy
              </h2>
              <p className="text-poe-text-dim">
                Our website is not directed at children under the age of 13. We do not knowingly
                collect information from children.
              </p>
            </div>

            <hr className="poe-separator" />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
                Changes to This Policy
              </h2>
              <p className="text-poe-text-dim">
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated revision date.
              </p>
            </div>

            <hr className="poe-separator" />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
                Contact
              </h2>
              <p className="text-poe-text-dim">
                If you have questions about this Privacy Policy, you can reach us through the contact
                information on our About page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
