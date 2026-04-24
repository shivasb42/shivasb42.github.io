"use client";

const EXPERIENCE = [
  {
    id: "EXP_001",
    role: "PRODUCT ENGINEER & LEAD DEVELOPER",
    company: "TOP CLUB SOCCER FANTASY STARTUP",
    location: "JERSEY CITY, NJ",
    period: "JAN 2025 — PRESENT",
    desc: "Built real-time social feed and live auction marketplace using WebSockets. Developed 1v1 multiplayer system with matchmaking, friend challenges, and AI bots. Designed Redis-backed job system maintaining stable p95 latency with distributed locking.",
    tags: ["WEBSOCKETS", "REDIS", "REAL-TIME", "REACT-NODE-TYPESCRIPT"],
  },
  {
    id: "EXP_002",
    role: "PRODUCT DEVELOPER (INDEPENDENT)",
    company: "B2B FAN ENGAGEMENT PLATFORM",
    location: "JERSEY CITY, NJ",
    period: "2025 — PRESENT",
    desc: "Built and launched a B2B fan-engagement platform used by live match venues to deliver interactive matchday experiences. Worked directly with client stakeholders to scope and deliver features under tight matchday timelines. Delivered white-labeled experiences for CBS, Bayern Munich, Smithfield Hall NYC, Westchester SC, Serie A, Peroni, Michelob Ultra, and The Long Acre. Integrated Stripe payments and end-to-end product flows, handling everything from backend systems to UX and client delivery.",
    tags: ["B2B", "STRIPE", "UX", "BACKEND", "CLIENT DELIVERY"],
  },
  {
    id: "EXP_003",
    role: "SOFTWARE ENGINEER (DEVOPS / SRE)",
    company: "CLOUDERA",
    location: "BANGALORE, INDIA",
    period: "JUL 2023 — JAN 2025",
    desc: "Built and automated reliability tooling for production Kubernetes (EKS) platforms. Developed Terraform-based workflows for incident recovery and infrastructure automation. Implemented Istio-based traffic management with mTLS, routing, and canary releases.",
    tags: ["KUBERNETES", "TERRAFORM", "AWS", "CI/CD", "ISTIO"],
  },
  {
    id: "EXP_004",
    role: "SOFTWARE ENGINEER (FULLSTACK)",
    company: "PERSISTENT SYSTEMS",
    location: "PUNE, INDIA",
    period: "JUN 2022 — JUL 2023",
    desc: "Built full-stack web applications for internal operations, improving workflow efficiency. Implemented JWT-based authentication and optimized frontend-backend interactions, reducing API traffic by 40%.",
    tags: ["FULLSTACK", "REACT", "JWT", "API OPTIMIZATION"],
  },
];

export function CRTExperience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 02 -----------------------------------------------
        </div>
        <h2
          className="glow"
          style={{
            fontFamily: "VT323, monospace",
            fontSize: "clamp(2.5rem,6vw,4.5rem)",
          }}
        >
          EXPERIENCE.LOG
        </h2>
        <div className="text-xs glow-dim tracking-widest mt-1">
          CAREER HISTORY — {EXPERIENCE.length} ENTRIES
        </div>
      </div>

      <div
        className="flex flex-col"
        style={{ border: "1px solid var(--crt-border-col)" }}
      >
        {EXPERIENCE.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            isLast={index === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  isLast,
}: {
  exp: (typeof EXPERIENCE)[0];
  isLast: boolean;
}) {
  return (
    <div
      className="p-6 group cursor-pointer transition-all duration-150"
      style={{
        background: "var(--crt-paper)",
        borderBottom: isLast ? "none" : "1px solid var(--crt-border-col)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = "rgba(122,74,30,0.06)";
        el.style.boxShadow = "inset 0 0 20px rgba(122,74,30,0.06)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = "var(--crt-paper)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <span
              className="text-xs tracking-widest"
              style={{ color: "var(--crt-brown-dim)" }}
            >
              [{exp.id}]
            </span>
            <span
              className="text-xs tracking-widest"
              style={{ color: "var(--crt-brown-dim)" }}
            >
              {exp.period}
            </span>
          </div>
          <div
            className="text-xl md:text-2xl glow-sm group-hover:glow tracking-wider"
            style={{
              fontFamily: "VT323, monospace",
              color: "var(--crt-brown-bright)",
            }}
          >
            {exp.role}
          </div>
        </div>
      </div>

      {/* Company info */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="glow-sm"
          style={{
            color: "var(--crt-brown-bright)",
            fontFamily: "VT323, monospace",
          }}
        >
          @
        </span>
        <span
          className="text-sm tracking-wider"
          style={{ color: "var(--crt-brown)" }}
        >
          {exp.company}
        </span>
        <span className="text-xs" style={{ color: "var(--crt-brown-dim)" }}>
          — {exp.location}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-xs leading-relaxed mb-4"
        style={{ color: "var(--crt-brown)" }}
      >
        {exp.desc}
      </p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5"
            style={{
              border: "1px solid var(--crt-border-col)",
              color: "var(--crt-brown-dim)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
