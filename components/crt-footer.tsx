export function CRTFooter() {
  return (
    <footer
      className="px-6 py-12"
      style={{ borderTop: "1px solid var(--crt-border-col)", background: "var(--crt-paper)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div
              className="glow text-3xl mb-2"
              style={{ fontFamily: "VT323, monospace" }}
            >
              SHIVAS.ME
            </div>
            <div className="text-xs glow-dim tracking-widest mb-4">
              SOFTWARE ENGINEER
            </div>
            <div className="text-xs" style={{ color: "var(--crt-brown-dim)" }}>
              Building scalable distributed systems<br />
              and production-grade applications.
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs tracking-widest glow-dim mb-4">NAVIGATE</div>
            <div className="space-y-2 text-xs" style={{ color: "var(--crt-brown)" }}>
              {[
                { label: "HOME", href: "#home" },
                { label: "EXPERIENCE", href: "#experience" },
                { label: "WORK", href: "#work" },
                { label: "SKILLS", href: "#skills" },
                { label: "ABOUT", href: "#about" },
                { label: "CONTACT", href: "#contact" },
              ].map(({ label, href }) => (
                <div key={label}>
                  <a href={href} className="hover:glow-sm transition-all">
                    {">"} {label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className="text-xs tracking-widest glow-dim mb-4">FIND ME</div>
            <div className="space-y-2 text-xs" style={{ color: "var(--crt-brown)" }}>
              {[
                { label: "EMAIL", href: "mailto:sb10449@nyu.edu" },
                { label: "LINKEDIN", href: "https://linkedin.com/in/shivas-bhat-797280198" },
                { label: "GITHUB", href: "https://github.com/shivasb42" },
              ].map(({ label, href }) => (
                <div key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:glow-sm transition-all">
                    {">"} {label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs"
          style={{
            borderTop: "1px solid var(--crt-border-col)",
            color: "var(--crt-brown-dim)",
          }}
        >
          <div>© 2024–2026 SHIVAS BHAT — ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--crt-amber)",
                boxShadow: "0 0 6px var(--crt-amber)",
                animation: "blink 2s step-start infinite",
              }}
            />
            <span>OPEN TO OPPORTUNITIES</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
