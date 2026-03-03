"use client";

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-[#2a2d3a] text-white">
      {/* Nav */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
          &larr; buildd.dev
        </a>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-16">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Integrations</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Create tasks from anywhere your team already works. Slack, Discord, webhooks &mdash; meet your agents where you are.
          </p>
        </div>
      </div>

      {/* Slack */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#4A154B]/30 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-[#E01E5A]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zm-2.522 10.124a2.528 2.528 0 0 1 2.522 2.52A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.521-2.522v-2.52h2.521zm0-1.271a2.527 2.527 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.313z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Slack</h2>
          </div>
          <p className="text-gray-300 text-lg">
            Use <code className="text-white bg-white/10 px-2 py-0.5 rounded">/buildd</code> in any channel to create planning tasks. Thread replies become task context automatically.
          </p>

          {/* How it works */}
          <div className="grid md:grid-cols-3 gap-4 pt-4">
            {[
              { step: "1", title: "Create Slack app", desc: "Add a slash command pointing to your Buildd instance", color: "fuchsia" },
              { step: "2", title: "Connect in Settings", desc: "Enter your Team ID, Channel ID, and Bot Token", color: "violet" },
              { step: "3", title: "Run /buildd", desc: "Type your goal — a planning task is created instantly", color: "green" },
            ].map((item) => (
              <div key={item.step} className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold mb-3 ${
                  item.color === "fuchsia" ? "bg-fuchsia-500/20 text-fuchsia-400" :
                  item.color === "violet" ? "bg-violet-500/20 text-violet-400" :
                  "bg-green-500/20 text-green-400"
                }`}>
                  {item.step}
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Example */}
          <div className="bg-[#1a1c24] rounded-xl border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <span className="text-sm text-gray-500">Slack</span>
            </div>
            <div className="p-6 font-mono text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-[#E01E5A]">/buildd</span>
                <span>research AI agent frameworks and write a comparison report</span>
              </div>
              <div className="mt-3 pl-4 border-l-2 border-green-500/30 text-green-400 text-xs">
                Task created: &quot;research AI agent frameworks and write a comparison report&quot; (planning mode)
              </div>
            </div>
          </div>

          <a
            href="https://docs.buildd.dev/docs/features/slack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Full setup guide &rarr;
          </a>
        </div>
      </div>

      {/* Discord */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#5865F2]/20 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Discord</h2>
          </div>
          <p className="text-gray-300 text-lg">
            Use <code className="text-white bg-white/10 px-2 py-0.5 rounded">/buildd</code> as a slash command in your server. Rich embeds show task status, and buttons let you approve plans inline.
          </p>

          {/* How it works */}
          <div className="grid md:grid-cols-3 gap-4 pt-4">
            {[
              { step: "1", title: "Create Discord app", desc: "Register a bot with slash commands and set the interactions URL", color: "fuchsia" },
              { step: "2", title: "Connect in Settings", desc: "Enter your Guild ID, Channel ID, and Bot Token", color: "violet" },
              { step: "3", title: "Run /buildd", desc: "Get rich embed responses with status and approve buttons", color: "green" },
            ].map((item) => (
              <div key={item.step} className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold mb-3 ${
                  item.color === "fuchsia" ? "bg-fuchsia-500/20 text-fuchsia-400" :
                  item.color === "violet" ? "bg-violet-500/20 text-violet-400" :
                  "bg-green-500/20 text-green-400"
                }`}>
                  {item.step}
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Example embed mockup */}
          <div className="bg-[#1a1c24] rounded-xl border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <span className="text-sm text-gray-500">Discord</span>
            </div>
            <div className="p-6">
              <div className="border-l-4 border-[#5865F2] bg-[#2f3136] rounded-r-lg p-4 max-w-md">
                <p className="text-xs text-gray-500 mb-1">Buildd</p>
                <p className="font-semibold text-sm mb-2">Task Created</p>
                <p className="text-sm text-gray-300 mb-3">implement dark mode for the dashboard</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    Planning
                  </span>
                  <span>ID: abc-123</span>
                </div>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-[#5865F2] rounded text-xs font-medium">
                    Approve Plan
                  </span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://docs.buildd.dev/docs/features/discord"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Full setup guide &rarr;
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-white/10" />
      </div>

      {/* OpenClaw */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">OpenClaw</h2>
          </div>
          <p className="text-gray-300 text-lg">
            Coordinate your OpenClaw agents with a central task queue.
            Create tasks in the dashboard, OpenClaw picks them up automatically via webhook.
          </p>

          {/* How it works */}
          <div className="space-y-4 pt-4">
            {[
              {
                step: "1",
                title: "Configure webhook",
                desc: "Point your workspace to your OpenClaw Gateway's /hooks/agent endpoint.",
                color: "fuchsia",
              },
              {
                step: "2",
                title: "Create tasks",
                desc: "From the dashboard, API, or MCP — tasks are dispatched to OpenClaw instantly.",
                color: "violet",
              },
              {
                step: "3",
                title: "Agent works autonomously",
                desc: "OpenClaw receives the task, investigates, writes code, commits, and opens PRs.",
                color: "cyan",
              },
              {
                step: "4",
                title: "Track progress",
                desc: "Monitor every agent in real-time. Send instructions mid-task if needed.",
                color: "green",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-lg font-bold ${
                  item.color === "fuchsia" ? "bg-fuchsia-500/20 text-fuchsia-400" :
                  item.color === "violet" ? "bg-violet-500/20 text-violet-400" :
                  item.color === "cyan" ? "bg-cyan-500/20 text-cyan-400" :
                  "bg-green-500/20 text-green-400"
                }`}>
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture diagram */}
          <div className="bg-[#1a1c24] rounded-xl border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <span className="text-sm text-gray-500">Data flow</span>
            </div>
            <div className="p-6 font-mono text-sm text-gray-300 leading-relaxed whitespace-pre">{
`Dashboard / API / MCP
        │
        ▼
   POST /api/tasks ──► Pusher (runner workers)
        │
        ├──► POST /hooks/agent (OpenClaw webhook)
        │         │
        │         ▼
        │    OpenClaw Gateway
        │         │
        │         ▼
        │    Agent session starts
        │         │
        │    ┌────┴────┐
        │    │ Read    Edit    Bash    Commit │
        │    └────┬────┘
        │         │
        │         ▼
        └──── PATCH /api/workers/:id (progress)
              POST  /api/github/pr (PR creation)`
            }</div>
          </div>

          {/* Quick setup */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl font-semibold">Quick setup</h3>

            <div>
              <h4 className="text-base font-semibold mb-3">1. Enable webhooks in OpenClaw</h4>
              <div className="bg-[#1a1c24] rounded-xl border border-white/10 p-6">
                <code className="text-sm text-gray-300 font-mono whitespace-pre">{
`# ~/.openclaw/config.yaml
hooks:
  enabled: true
  token: "your-secret-token"
  path: /hooks`
                }</code>
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-3">2. Configure in Buildd</h4>
              <p className="text-gray-400 mb-3">
                Go to your workspace &rarr; <strong className="text-gray-200">Configure</strong> &rarr; <strong className="text-gray-200">Webhook Dispatch</strong>
              </p>
              <div className="bg-white/5 rounded-xl border border-white/10 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-20">URL</span>
                  <code className="text-sm text-gray-300 font-mono">http://your-server:18789/hooks/agent</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-20">Token</span>
                  <code className="text-sm text-gray-300 font-mono">your-secret-token</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-20">Status</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-500/20 rounded-full text-xs text-green-400">
                    Enabled
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Not using OpenClaw */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <h4 className="font-semibold mb-2">Not using OpenClaw?</h4>
            <p className="text-gray-400 text-sm">
              Buildd&apos;s webhook dispatch works with any agent that accepts HTTP POST requests.
              The payload format is simple JSON &mdash; integrate with your own agents, n8n workflows,
              or any automation platform.{" "}
              <a href="https://docs.buildd.dev" className="text-gray-300 underline hover:text-white">
                See the docs &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="flex flex-wrap gap-4">
          <a
            href="https://buildd.dev/app"
            className="px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-semibold rounded-lg transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://docs.buildd.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
          >
            Read the Docs
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              buildd &mdash; Task queue + shared memory for AI agents
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/memory" className="hover:text-white transition-colors">Memory</a>
              <a
                href="https://docs.buildd.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Docs
              </a>
              <a
                href="https://github.com/buildd-ai/buildd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a href="mailto:hello@buildd.dev" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
