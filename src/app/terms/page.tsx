import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - buildd",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#2a2d3a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: March 11, 2026</p>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Service</h2>
            <p>
              Buildd is a task coordination platform for AI coding agents. Dispatch is a personal
              daily planner that integrates with Google Calendar and Gmail. Both are provided as-is.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Account</h2>
            <p>
              You sign in with your Google account. You are responsible for maintaining the security
              of your account credentials. We restrict access to authorized email addresses only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Google API usage</h2>
            <p>
              Our use and transfer of information received from Google APIs adheres to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google API Services User Data Policy
              </a>,
              including the Limited Use requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">AI processing</h2>
            <p>
              Email content is processed by AI to provide triage, summarization, and composition features.
              AI-generated content (summaries, replies, classifications) may not always be accurate.
              You are responsible for reviewing AI-drafted emails before sending.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Limitation of liability</h2>
            <p>
              The service is provided &ldquo;as is&rdquo; without warranty. We are not liable for any
              damages arising from use of the service, including but not limited to data loss, missed
              emails, or incorrect AI classifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes</h2>
            <p>
              We may update these terms at any time. Continued use of the service constitutes acceptance
              of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Questions: <a href="mailto:hello@buildd.dev" className="text-blue-400 hover:underline">hello@buildd.dev</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
