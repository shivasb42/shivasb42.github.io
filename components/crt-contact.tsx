const INFO_ROWS = [
  { k: "EMAIL", v: "sb10449@nyu.edu", href: "mailto:sb10449@nyu.edu" },
  { k: "PHONE", v: "+1 551-373-2925", href: "tel:+15513732925" },
  { k: "LINKEDIN", v: "linkedin.com/in/shivas-bhat-797280198", href: "https://linkedin.com/in/shivas-bhat-797280198" },
  { k: "GITHUB", v: "github.com/shivasb42", href: "https://github.com/shivasb42" },
  { k: "LOCATION", v: "New York, NY", href: null },
  { k: "AVAILABILITY", v: "Open to Opportunities", href: null },
]

const STATUS_BARS = [
  { name: "AVAILABILITY", val: 100 },
  { name: "ENGINEERING ENERGY", val: 96 },
  { name: "COFFEE LEVEL", val: 85 },
  { name: "PROJECTS ACTIVE", val: 80 },
]

export function CRTContact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 05 -----------------------------------------------
        </div>
        <h2
          className="glow"
          style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          CONTACT.SH
        </h2>
        <div className="text-xs glow-dim tracking-widest mt-1">
          {"LET'S CONNECT AND BUILD SOMETHING GREAT"}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left column: info + status */}
        <div className="space-y-6">

          <div className="p-6 crt-border" style={{ background: "var(--crt-paper)" }}>
            <div className="text-xs tracking-widest glow-dim mb-4">CONTACT INFO</div>
            <div className="space-y-3 text-sm" style={{ color: "var(--crt-brown)" }}>
              {INFO_ROWS.map(({ k, v, href }) => (
                <div key={k} className="flex gap-4">
                  <span
                    className="w-28 shrink-0 text-xs tracking-widest"
                    style={{ color: "var(--crt-brown-dim)" }}
                  >
                    {k}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:underline transition-all"
                      style={{ color: "var(--crt-brown-bright)" }}
                    >
                      {v}
                    </a>
                  ) : (
                    <span>{v}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 crt-border" style={{ background: "var(--crt-paper)" }}>
            <div className="text-xs tracking-widest glow-dim mb-4">SYSTEM STATUS</div>
            <div className="space-y-3">
              {STATUS_BARS.map(({ name, val }) => (
                <div key={name} className="text-xs">
                  <div className="flex justify-between mb-1">
                    <span style={{ color: "var(--crt-brown-dim)" }}>{name}</span>
                    <span style={{ color: "var(--crt-brown)" }}>{val}%</span>
                  </div>
                  <div className="h-1 w-full" style={{ background: "var(--crt-border-col)" }}>
                    <div
                      className="h-full"
                      style={{
                        width: `${val}%`,
                        background: "var(--crt-amber)",
                        boxShadow: "0 0 6px var(--crt-amber)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column: CTA */}
        <div className="p-6 crt-border flex flex-col items-center justify-center text-center" style={{ background: "var(--crt-paper)" }}>
          <div className="text-xs tracking-widest glow-dim mb-6">
            $ ./reach_out.sh
          </div>
          <div
            className="text-4xl md:text-5xl glow mb-4"
            style={{ fontFamily: "VT323, monospace" }}
          >
            GET IN TOUCH
          </div>
          <p className="text-sm mb-8 max-w-sm" style={{ color: "var(--crt-brown)" }}>
            {"I'm open to new opportunities and collaborations. Feel free to reach out via email or connect on LinkedIn."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:sb10449@nyu.edu"
              className="text-xs tracking-[0.2em] px-6 py-3 transition-all duration-100"
              style={{
                border: "1px solid var(--crt-brown)",
                color: "var(--crt-brown-bright)",
                background: "rgba(122,74,30,0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--crt-brown)"
                e.currentTarget.style.color = "var(--crt-bg)"
                e.currentTarget.style.boxShadow = "var(--crt-glow)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(122,74,30,0.07)"
                e.currentTarget.style.color = "var(--crt-brown-bright)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              [ EMAIL ME ]
            </a>
            <a
              href="https://linkedin.com/in/shivas-bhat-797280198"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] px-6 py-3 transition-all duration-100"
              style={{
                border: "1px solid var(--crt-border-col)",
                color: "var(--crt-brown-dim)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--crt-brown)"
                e.currentTarget.style.color = "var(--crt-brown)"
                e.currentTarget.style.boxShadow = "var(--crt-glow-sm)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--crt-border-col)"
                e.currentTarget.style.color = "var(--crt-brown-dim)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              [ LINKEDIN ]
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
