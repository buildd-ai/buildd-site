export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(26, 24, 22, 0.92)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <span className="block w-7 h-7 rounded-[6px] overflow-hidden bg-[#1a1816]">
              <img src="/logo.png" alt="" width={28} height={28} className="block w-full h-full" />
            </span>
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-outfit)' }}>buildd</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/#how-it-works" className="text-sm transition-colors hover:text-[#ede8e2]" style={{ color: '#a89f96' }}>
              How it works
            </a>
            <a href="https://docs.buildd.dev" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-[#ede8e2]" style={{ color: '#a89f96' }}>
              Docs
            </a>
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32" style={{ minHeight: '60vh' }}>
        <p
          className="text-[11px] font-medium uppercase tracking-[0.15em] mb-6"
          style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: '#5e5850' }}
        >
          PRICING
        </p>
        <h1
          className="text-4xl md:text-5xl font-light italic leading-tight mb-4"
          style={{ fontFamily: 'var(--font-fraunces)', color: '#ede8e2' }}
        >
          Free while in beta
        </h1>
        <p
          className="text-base md:text-lg max-w-md mb-10 leading-relaxed"
          style={{ fontFamily: 'var(--font-outfit)', color: '#a89f96' }}
        >
          Buildd is free to use during the beta period. Bring your own API keys for AI providers.
        </p>
        <a
          href="https://buildd.dev/app"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white rounded-md transition-colors"
          style={{ backgroundColor: '#c8956a' }}
        >
          Get started
        </a>
      </section>
    </main>
  );
}
