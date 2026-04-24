"use client";

const STATS = [
  { label: "YEARS EXPERIENCE", value: "3+", unit: "YEARS" },
  { label: "COMPANIES WORKED", value: "3", unit: "TOTAL" },
  { label: "CERTIFICATIONS", value: "3", unit: "AWS + MORE" },
  {
    label: "EDUCATION",
    value: "NEW YORK UNIVERSITY",
    unit: "Masters in Computer Science 2026",
  },
];

const TOOLS = [
  { name: "KUBERNETES", role: "CONTAINER ORCHESTRATION", status: "ACTIVE" },
  { name: "TERRAFORM", role: "INFRASTRUCTURE AS CODE", status: "ACTIVE" },
  { name: "AWS", role: "CLOUD PLATFORM", status: "ACTIVE" },
  { name: "REACT", role: "FRONTEND DEVELOPMENT", status: "ACTIVE" },
  { name: "PYTHON", role: "BACKEND + ML", status: "ACTIVE" },
  { name: "DOCKER", role: "CONTAINERIZATION", status: "ACTIVE" },
];

export function CRTAbout() {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 04 -----------------------------------------------
        </div>
        <h2
          className="glow"
          style={{
            fontFamily: "VT323, monospace",
            fontSize: "clamp(2.5rem,6vw,4.5rem)",
          }}
        >
          ABOUT.TXT
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left: bio + stats */}
        <div>
          <div
            className="p-6 crt-border text-sm leading-relaxed space-y-4 mb-8"
            style={{
              background: "var(--crt-paper)",
              color: "var(--crt-brown)",
            }}
          >
            <div className="text-xs tracking-widest glow-dim mb-2">
              $ cat bio.txt
            </div>
            <p>
              {
                "I'm Shivas Bhat — a Software Engineer currently pursuing my MS in Computer Science at NYU Courant (Expected Graduation December 2026)."
              }
            </p>
            <p>
              I specialize in DevOps/SRE, full-stack development, and machine
              learning. I build scalable distributed systems, real-time
              applications, and production-grade ML platforms on Kubernetes.
            </p>
            <p>
              Built a B2B fan-engagement platform used by live match venues
              including CBS, Bayern Munich, Smithfield Hall NYC, Serie A,
              Peroni, and Michelob Ultra to deliver interactive matchday
              experiences.
            </p>
            <p style={{ color: "var(--crt-brown-dim)" }}>
              AWS Cloud Practitioner certified. Previously at Cloudera and
              Persistent Systems. Passionate about building reliable,
              high-performance systems.
            </p>
            <div
              className="pt-3"
              style={{ borderTop: "1px solid var(--crt-border-col)" }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs tracking-widest"
                style={{ color: "var(--crt-amber)" }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "var(--crt-amber)",
                    boxShadow: "0 0 6px var(--crt-amber)",
                    animation: "blink 2s step-start infinite",
                  }}
                />
                OPEN TO OPPORTUNITIES — sb10449@nyu.edu
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div
            className="grid grid-cols-2 gap-0"
            style={{ border: "1px solid var(--crt-border-col)" }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="p-4"
                style={{
                  borderRight: "1px solid var(--crt-border-col)",
                  borderBottom: "1px solid var(--crt-border-col)",
                  background: "var(--crt-paper)",
                }}
              >
                <div
                  className="glow"
                  style={{ fontFamily: "VT323, monospace", fontSize: "2rem" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--crt-brown-dim)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: tools list */}
        <div>
          <div className="text-xs tracking-widest glow-dim mb-4">
            $ ls ./tools — {TOOLS.filter((t) => t.status === "ACTIVE").length}{" "}
            ACTIVE
          </div>
          <div
            className="space-y-0"
            style={{ border: "1px solid var(--crt-border-col)" }}
          >
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="p-4 group cursor-pointer transition-all duration-100"
                style={{
                  borderBottom: "1px solid var(--crt-border-col)",
                  background: "var(--crt-paper)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(122,74,30,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--crt-paper)";
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="group-hover:glow-sm transition-all"
                      style={{
                        fontFamily: "VT323, monospace",
                        fontSize: "1.2rem",
                        color: "var(--crt-brown-bright)",
                      }}
                    >
                      {tool.name}
                    </span>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "var(--crt-brown-dim)" }}
                    >
                      {tool.role}
                    </div>
                  </div>
                  <span
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: "var(--crt-brown-dim)" }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{
                        background:
                          tool.status === "ACTIVE"
                            ? "var(--crt-amber)"
                            : "var(--crt-brown-dim)",
                        boxShadow:
                          tool.status === "ACTIVE"
                            ? "0 0 6px var(--crt-amber)"
                            : "none",
                      }}
                    />
                    {tool.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
