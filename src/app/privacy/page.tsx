import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - buildd",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#2a2d3a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: March 11, 2026</p>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What we collect</h2>
            <p>
              Buildd accesses your Google account data (calendar events, email metadata and content)
              solely to provide the features you opt into. We request only the permissions needed:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li><strong className="text-gray-300">Calendar (read-only)</strong> — to display your events in the daily planner</li>
              <li><strong className="text-gray-300">Gmail (read &amp; send)</strong> — to scan your inbox, triage emails with AI, and send replies you approve</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How we use your data</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Email content is processed by AI to classify, summarize, and extract actionable information</li>
              <li>Extracted facts are stored in your personal knowledge base for AI-assisted recall</li>
              <li>Your data is never sold, shared with third parties, or used for advertising</li>
              <li>AI processing uses Anthropic&apos;s Claude API — content is not used to train models</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data storage</h2>
            <p>
              Your data is stored in a secured PostgreSQL database hosted on Neon. OAuth tokens are
              encrypted at rest. You can request deletion of all your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-party services</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-gray-300">Google APIs</strong> — calendar and email access via OAuth 2.0</li>
              <li><strong className="text-gray-300">Anthropic Claude</strong> — AI processing for email triage and composition</li>
              <li><strong className="text-gray-300">Vercel</strong> — application hosting</li>
              <li><strong className="text-gray-300">Neon</strong> — database hosting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Your rights</h2>
            <p>
              You can revoke access to your Google account at any time via{" "}
              <a href="https://myaccount.google.com/permissions" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Account Permissions
              </a>.
              This immediately stops all data access. To request data deletion, contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For privacy inquiries: <a href="mailto:privacy@buildd.dev" className="text-blue-400 hover:underline">privacy@buildd.dev</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
