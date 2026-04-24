"use client"

const SKILLS = [
  {
    id: "01",
    title: "CLOUD & DEVOPS",
    desc: "Production Kubernetes (EKS) platforms, Terraform-based infrastructure automation, CI/CD pipelines with GitLab CI, Helm, and zero-downtime deployments.",
    stat: "AWS | KUBERNETES | TERRAFORM | DOCKER",
    icon: "◉",
  },
  {
    id: "02",
    title: "BACKEND DEVELOPMENT",
    desc: "Building scalable APIs, real-time systems with WebSockets, Redis-backed job systems, and event-driven architectures for high-performance applications.",
    stat: "PYTHON | JAVA | NODEJS | REDIS",
    icon: "▓",
  },
  {
    id: "03",
    title: "FRONTEND DEVELOPMENT",
    desc: "Modern web applications with React.js, optimized frontend-backend interactions, and responsive interfaces with clean user experiences.",
    stat: "REACT | JAVASCRIPT | HTML | CSS",
    icon: "◈",
  },
  {
    id: "04",
    title: "MACHINE LEARNING",
    desc: "Deep learning systems with TensorFlow and PyTorch, CNN architectures, computer vision preprocessing, and model optimization for production deployment.",
    stat: "TENSORFLOW | PYTORCH | OPENCV | SCIKIT",
    icon: "▶",
  },
  {
    id: "05",
    title: "DATABASE SYSTEMS",
    desc: "Designing and optimizing relational and NoSQL databases, implementing data consistency patterns, and building efficient query systems.",
    stat: "POSTGRESQL | MYSQL | MONGODB",
    icon: "◆",
  },
  {
    id: "06",
    title: "MONITORING & SECURITY",
    desc: "Production observability with Prometheus, Grafana, Datadog. Security implementation with SSL/TLS, OAuth, JWT authentication systems.",
    stat: "PROMETHEUS | GRAFANA | DATADOG | JWT",
    icon: "◐",
  },
]

export function CRTServices() {
  return (
    <section
      id="skills"
      className="px-6 py-24 max-w-6xl mx-auto"
    >
      <div className="mb-16">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 02 -----------------------------------------------
        </div>
        <h2
          className="glow"
          style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          SKILLS.EXE
        </h2>
        <div className="text-xs glow-dim tracking-widest mt-1">
          DISCIPLINES AND TOOLS
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ border: "1px solid var(--crt-border-col)" }}
      >
        {SKILLS.map((s) => (
          <SkillCard key={s.id} skill={s} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ skill }: { skill: (typeof SKILLS)[0] }) {
  return (
    <div
      className="p-6 group cursor-pointer transition-all duration-150"
      style={{
        background: "var(--crt-paper)",
        border: "1px solid transparent",
        borderColor: "var(--crt-border-col)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = "rgba(122,74,30,0.06)"
        el.style.borderColor = "var(--crt-brown)"
        el.style.boxShadow = "inset 0 0 20px rgba(122,74,30,0.06)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = "var(--crt-paper)"
        el.style.borderColor = "var(--crt-border-col)"
        el.style.boxShadow = "none"
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="text-3xl glow-sm group-hover:glow"
          style={{ color: "var(--crt-brown-bright)", fontFamily: "VT323, monospace" }}
        >
          {skill.icon}
        </div>
        <span className="text-xs" style={{ color: "var(--crt-brown-dim)" }}>
          [{skill.id}]
        </span>
      </div>
      <div
        className="text-lg mb-3 glow-sm group-hover:glow tracking-wider"
        style={{ fontFamily: "VT323, monospace", color: "var(--crt-brown-bright)" }}
      >
        {skill.title}
      </div>
      <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--crt-brown)" }}>
        {skill.desc}
      </p>
      <div
        className="text-xs tracking-widest pt-3"
        style={{
          color: "var(--crt-brown-dim)",
          borderTop: "1px solid var(--crt-border-col)",
        }}
      >
        {skill.stat}
      </div>
    </div>
  )
}
