import Link from "next/link";
import { QuickstartButton } from "./QuickstartButton";

const memoryTypes = [
  {
    type: "gotcha",
    title: "Gotcha",
    desc: "Traps and footguns that waste time. \"Don't use db.transaction() with neon-http driver.\"",
  },
  {
    type: "architecture",
    title: "Architecture",
    desc: "How the system is structured. \"Auth uses dual model: API keys for pay-per-token, OAuth for seat-based.\"",
  },
  {
    type: "pattern",
    title: "Pattern",
    desc: "Recurring solutions. \"All API routes validate auth with getAuthContext() first.\"",
  },
  {
    type: "decision",
    title: "Decision",
    desc: "Why things are the way they are. \"Chose Pusher over SSE for real-time because of Vercel cold starts.\"",
  },
  {
    type: "discovery",
    title: "Discovery",
    desc: "Found during investigation. \"The proxy.ts file handles all subdomain routing — don't add middleware.\"",
  },
  {
    type: "summary",
    title: "Summary",
    desc: "Condensed understanding. \"The worker claim flow: POST /claim → optimistic lock → return task.\"",
  },
];

const faqs = [
  {
    q: "What's a workspace?",
    a: "A workspace maps to a project or repo. Each workspace has its own memories, API keys, and usage limits. Agents in one workspace can't see memories from another.",
  },
  {
    q: "Do agents count as users?",
    a: "No. You pay for knowledge capacity, not seats. Connect as many agents as you want — each gets an API key, and they all share the workspace's memory pool.",
  },
  {
    q: "Can I self-host?",
    a: "Yes. Memory is fully open source. Run it on your own infrastructure with your own Postgres database. The hosted version is the easiest way to get started.",
  },
  {
    q: "Do I need a separate API key for the AI?",
    a: "No. Memory doesn't call AI models — your agents do. They run on your existing Anthropic or Claude subscription. Memory just stores and retrieves knowledge, so there's no extra AI cost.",
  },
];

export default function MemoryPage() {
  return (
    <main className="min-h-screen">
      <style>{`
        .btn-copper { background-color: #c8956a; }
        .btn-copper:hover { background-color: #b8854f; }
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(26, 24, 22, 0.92)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" width={28} height={28} className="block w-7 h-7 rounded-[6px]" />
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-outfit)' }}>buildd</span>
          </Link>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/memory" className="text-sm transition-colors" style={{ color: '#ede8e2' }}>
                Memory
              </Link>
              <a href="https://docs.buildd.dev" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-[#ede8e2]" style={{ color: '#a89f96' }}>
                Docs
              </a>
            </div>
            <a
              href="https://buildd.dev/app"
              className="btn-copper inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
            style={{
              fontFamily: 'var(--font-ibm-plex-mono)',
              color: '#5ec495',
              backgroundColor: 'rgba(94, 196, 149, 0.08)',
              border: '1px solid rgba(94, 196, 149, 0.2)',
            }}
          >
            Beta — Free while in beta
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
            style={{
              fontFamily: 'var(--font-ibm-plex-mono)',
              color: '#a89f96',
              backgroundColor: 'rgba(255, 245, 230, 0.04)',
              border: '1px solid rgba(255, 245, 230, 0.1)',
            }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Open Source
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
            style={{
              fontFamily: 'var(--font-ibm-plex-mono)',
              color: '#a89f96',
              backgroundColor: 'rgba(255, 245, 230, 0.04)',
              border: '1px solid rgba(255, 245, 230, 0.1)',
            }}
          >
            MCP-Native
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-light italic leading-tight mb-6"
          style={{ fontFamily: 'var(--font-fraunces)', color: '#ede8e2' }}
        >
          Shared Memory for AI Agents
        </h1>
        <p
          className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ fontFamily: 'var(--font-outfit)', color: '#a89f96' }}
        >
          Persistent team knowledge that follows your agents across sessions.
          Every agent starts with the full context of everything your team has learned.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#quickstart"
            className="btn-copper inline-flex items-center px-6 py-3 text-sm font-medium text-white rounded-md transition-colors"
          >
            Get started free
          </a>
          <a
            href="https://github.com/buildd-ai/memory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-colors"
            style={{ color: '#ede8e2', border: '1px solid rgba(255, 245, 230, 0.12)' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="rounded-[14px] p-8 text-center"
          style={{ backgroundColor: '#2a2724', border: '1px solid rgba(255, 245, 230, 0.06)' }}
        >
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#a89f96' }}>
            Claude Code memory is local. Cursor has none. Your agents forget
            everything between sessions.
          </p>
        </div>
      </section>

      {/* Setup Code Block */}
      <section id="quickstart" className="max-w-3xl mx-auto px-6 pb-16 scroll-mt-16">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.15em] mb-8 text-center"
          style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#5e5850' }}
        >
          3 LINES TO CONNECT
        </p>
        <div
          className="rounded-[14px] overflow-hidden"
          style={{ backgroundColor: '#211f1c', border: '1px solid rgba(255, 245, 230, 0.07)' }}
        >
          <div className="p-6">
            <pre className="text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#ede8e2' }}>
              <code>{`{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@buildd/memory-plugin"],
      "env": {
        "BUILDD_MEMORY_API_KEY": "bld_mem_..."
      }
    }
  }
}`}</code>
            </pre>
            <QuickstartButton />
            <p className="text-xs mt-4" style={{ color: '#5e5850' }}>
              See the{" "}
              <a
                href="https://docs.buildd.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-[#a89f96]"
                style={{ color: '#c8956a' }}
              >
                full setup guide
              </a>{" "}
              for advanced configuration, self-hosting, and API usage.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.15em] mb-10 text-center"
          style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#5e5850' }}
        >
          HOW IT WORKS
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'rgba(200, 149, 106, 0.12)', border: '1px solid rgba(200, 149, 106, 0.25)' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#c8956a' }}>1</span>
            </div>
            <h3 className="font-semibold mb-2 text-sm" style={{ color: '#ede8e2' }}>Connect via MCP</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              Add the MCP config to your project. Works with Claude Code,
              Cursor, Windsurf &mdash; any MCP-compatible agent.
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'rgba(200, 149, 106, 0.12)', border: '1px solid rgba(200, 149, 106, 0.25)' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#c8956a' }}>2</span>
            </div>
            <h3 className="font-semibold mb-2 text-sm" style={{ color: '#ede8e2' }}>Agents save discoveries</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              As agents work, they record gotchas, patterns, and architecture
              decisions. Memories are typed, tagged, and searchable.
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'rgba(200, 149, 106, 0.12)', border: '1px solid rgba(200, 149, 106, 0.25)' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#c8956a' }}>3</span>
            </div>
            <h3 className="font-semibold mb-2 text-sm" style={{ color: '#ede8e2' }}>Every session starts informed</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              New sessions automatically load relevant memories. Your 10th agent
              avoids the mistakes of your first.
            </p>
          </div>
        </div>
      </section>

      {/* Memory Types Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2
          className="text-2xl md:text-3xl font-light italic leading-tight mb-4 text-center"
          style={{ fontFamily: 'var(--font-fraunces)', color: '#ede8e2' }}
        >
          Structured knowledge, not raw text
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-sm" style={{ color: '#a89f96' }}>
          Each memory has a type, tags, and relevance scoring.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {memoryTypes.map((m) => (
            <div
              key={m.type}
              className="rounded-[14px] p-6"
              style={{ backgroundColor: '#2a2724', border: '1px solid rgba(255, 245, 230, 0.06)' }}
            >
              <h3 className="font-semibold mb-2 text-sm" style={{ color: '#ede8e2' }}>{m.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.15em] mb-10 text-center"
          style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#5e5850' }}
        >
          FAQ
        </p>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-[14px] p-6"
              style={{ backgroundColor: '#2a2724', border: '1px solid rgba(255, 245, 230, 0.06)' }}
            >
              <h3 className="font-semibold mb-2 text-sm" style={{ color: '#ede8e2' }}>{faq.q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-link to Missions */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="rounded-[14px] p-8 flex flex-col md:flex-row items-center gap-6"
          style={{ backgroundColor: '#2a2724', border: '1px solid rgba(255, 245, 230, 0.06)' }}
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#ede8e2' }}>
              Memory works best with Buildd Missions
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              Dispatch missions to agents, let them plan and execute autonomously, and watch knowledge compound across every run. Memory provides the context &mdash; Missions provide the coordination.
            </p>
          </div>
          <Link
            href="/"
            className="btn-copper inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap"
          >
            Explore Missions
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <h2
          className="text-2xl md:text-3xl font-light italic leading-tight mb-4"
          style={{ fontFamily: 'var(--font-fraunces)', color: '#ede8e2' }}
        >
          Stop losing knowledge between sessions
        </h2>
        <p className="mb-8 text-sm" style={{ color: '#a89f96' }}>
          Connect Memory in 3 lines. Your agents will thank you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#quickstart"
            className="btn-copper inline-flex items-center px-6 py-3 text-sm font-medium text-white rounded-md transition-colors"
          >
            Get started free
          </a>
          <a
            href="https://github.com/buildd-ai/memory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-colors"
            style={{ color: '#ede8e2', border: '1px solid rgba(255, 245, 230, 0.12)' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255, 245, 230, 0.07)' }}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm font-semibold" style={{ color: '#5e5850', fontFamily: 'var(--font-outfit)' }}>
              buildd
            </span>
            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: '#5e5850' }}>
              <Link href="/memory" className="transition-colors hover:text-[#a89f96]">Memory</Link>
              <a href="https://docs.buildd.dev" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#a89f96]">Docs</a>
              <a href="https://github.com/buildd-ai/memory" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#a89f96]">GitHub</a>
              <a href="mailto:hello@buildd.dev" className="transition-colors hover:text-[#a89f96]">Contact</a>
              <Link href="/privacy" className="transition-colors hover:text-[#a89f96]">Privacy</Link>
              <Link href="/terms" className="transition-colors hover:text-[#a89f96]">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
