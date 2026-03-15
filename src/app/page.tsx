export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <style>{`
        .btn-copper { background-color: #c8956a; }
        .btn-copper:hover { background-color: #b8854f; }
      `}</style>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(26, 24, 22, 0.92)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" width={28} height={28} className="rounded-[6px]" />
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-outfit)' }}>buildd</span>
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              <a href="#how-it-works" className="text-sm transition-colors hover:text-[#ede8e2]" style={{ color: '#a89f96' }}>
                How it works
              </a>
              <a href="https://docs.buildd.dev" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-[#ede8e2]" style={{ color: '#a89f96' }}>
                Docs
              </a>
              <a href="/pricing" className="text-sm transition-colors hover:text-[#ede8e2]" style={{ color: '#a89f96' }}>
                Pricing
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

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32" style={{ minHeight: '60vh' }}>
        <div className="mb-10 w-24 md:w-32">
          <picture>
            <source media="(min-width: 768px)" srcSet="/hero/logo-desktop.webp" type="image/webp" />
            <source srcSet="/hero/logo-mobile.webp" type="image/webp" />
            <img src="/hero/logo-desktop.png" alt="buildd" className="w-full h-auto" width={1200} height={1418} />
          </picture>
        </div>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-light italic leading-tight mb-6"
          style={{ fontFamily: 'var(--font-fraunces)', color: '#ede8e2' }}
        >
          Dispatch missions, not tasks
        </h1>
        <p
          className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ fontFamily: 'var(--font-outfit)', color: '#a89f96' }}
        >
          Set objectives. Agents break them into tasks, connect to your tools via MCP, and ship outcomes while you sleep.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://buildd.dev/app"
            className="btn-copper inline-flex items-center px-6 py-3 text-sm font-medium text-white rounded-md transition-colors"
          >
            Start building
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md transition-colors"
            style={{ color: '#ede8e2', border: '1px solid rgba(255, 245, 230, 0.12)' }}
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Mission Types */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* BUILD */}
          <div
            className="rounded-[14px] p-6"
            style={{
              backgroundColor: '#2a2724',
              border: '1px solid rgba(255, 245, 230, 0.06)',
              borderLeft: '2px solid #5ec495',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5ec495' }} />
              <span
                className="text-[10px] font-medium uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#a89f96' }}
              >
                BUILD
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#ede8e2' }}>Ship features</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              Set an objective. Agents decompose it into tasks, write code, open PRs, and iterate until it ships.
            </p>
          </div>

          {/* WATCH */}
          <div
            className="rounded-[14px] p-6"
            style={{
              backgroundColor: '#2a2724',
              border: '1px solid rgba(255, 245, 230, 0.06)',
              borderLeft: '2px solid #e0b35a',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e0b35a' }} />
              <span
                className="text-[10px] font-medium uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#a89f96' }}
              >
                WATCH
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#ede8e2' }}>Monitor signals</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              Scan emails, track invoices, watch for alerts. Agents connect via MCP and surface what needs your attention.
            </p>
          </div>

          {/* BRIEF */}
          <div
            className="rounded-[14px] p-6"
            style={{
              backgroundColor: '#2a2724',
              border: '1px solid rgba(255, 245, 230, 0.06)',
              borderLeft: '2px solid #d4a574',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4a574' }} />
              <span
                className="text-[10px] font-medium uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#a89f96' }}
              >
                BRIEF
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#ede8e2' }}>Produce intel</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              Dispatch research. Agents scan the landscape, find changes, and deliver findings as artifacts you can act on.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-20">
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
            <h3 className="font-semibold mb-2 text-sm" style={{ color: '#ede8e2' }}>Install &amp; connect</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              One command. Authenticates CLI, MCP, and agents.
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'rgba(200, 149, 106, 0.12)', border: '1px solid rgba(200, 149, 106, 0.25)' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#c8956a' }}>2</span>
            </div>
            <h3 className="font-semibold mb-2 text-sm" style={{ color: '#ede8e2' }}>Set a mission</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              Build, Watch, or Brief. Agents plan the approach.
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'rgba(200, 149, 106, 0.12)', border: '1px solid rgba(200, 149, 106, 0.25)' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#c8956a' }}>3</span>
            </div>
            <h3 className="font-semibold mb-2 text-sm" style={{ color: '#ede8e2' }}>Ship while you sleep</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#a89f96' }}>
              Agents execute, open PRs, deliver artifacts. You review.
            </p>
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div
          className="rounded-[14px] overflow-hidden"
          style={{ backgroundColor: '#211f1c', border: '1px solid rgba(255, 245, 230, 0.07)' }}
        >
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="select-none" style={{ color: '#5e5850' }} aria-hidden="true">$</span>
              <code className="text-sm md:text-base" style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#ede8e2' }}>
                curl -fsSL https://buildd.dev/install.sh | bash
              </code>
            </div>
            <div className="flex items-center gap-3">
              <span className="select-none" style={{ color: '#5e5850' }} aria-hidden="true">$</span>
              <code className="text-sm md:text-base" style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#a89f96' }}>
                buildd login
              </code>
            </div>
          </div>
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
              <a href="/memory" className="transition-colors hover:text-[#a89f96]">Memory</a>
              <a href="https://docs.buildd.dev" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#a89f96]">Docs</a>
              <a href="https://github.com/buildd-ai/buildd" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#a89f96]">GitHub</a>
              <a href="mailto:hello@buildd.dev" className="transition-colors hover:text-[#a89f96]">Contact</a>
              <a href="/privacy" className="transition-colors hover:text-[#a89f96]">Privacy</a>
              <a href="/terms" className="transition-colors hover:text-[#a89f96]">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
