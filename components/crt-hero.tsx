"use client";

import { useEffect, useState } from "react";

const TICKER_ITEMS = [
  "▶ MS COMPUTER SCIENCE @ NYU COURANT — 2026",
  "◆ DEVOPS  FULLSTACK  MACHINE LEARNING  CLOUD",
  "▶ KUBERNETES | TERRAFORM | AWS | REACT | PYTHON",
  "◆ BUILDING SCALABLE DISTRIBUTED SYSTEMS",
  "▶ REAL-TIME SYSTEMS. EVENT-DRIVEN ARCHITECTURE.",
  "◆ RECENT: K8S ML PLATFORM  CLOUD COST OPTIMIZER",
  "▶ OPEN TO OPPORTUNITIES — sb10449@nyu.edu",
  "◆ SIGNAL STRENGTH: 100%",
];

export function CRTTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="overflow-hidden border-y text-xs py-2 tracking-widest"
      style={{
        borderColor: "var(--crt-border-col)",
        background: "var(--crt-paper)",
        color: "var(--crt-brown-dim)",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="px-8 shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CRTHero() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12"
      style={{ background: "var(--crt-bg)" }}
    >
      {/* Big title */}
      <div className="text-center relative z-10 w-full max-w-4xl mx-auto">
        {/* System prompt line */}
        <div className="text-xs tracking-[0.3em] mb-6 glow-dim">
          C:\PORTFOLIO\&gt; LOADING_SHIVAS_BHAT{dots}
        </div>

        {/* Main name */}
        <h1
          className="glow flicker leading-none mb-4"
          style={{
            fontFamily: "VT323, monospace",
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            letterSpacing: "0.04em",
            color: "var(--crt-brown-bright)",
          }}
        >
          SHIVAS
        </h1>
        <h1
          className="glow flicker leading-none mb-4"
          style={{
            fontFamily: "VT323, monospace",
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            letterSpacing: "0.04em",
            color: "var(--crt-brown-bright)",
          }}
        >
          BHAT
        </h1>

        {/* Subtitle */}
        <div
          className="glow-sm mb-2"
          style={{
            fontFamily: "VT323, monospace",
            fontSize: "clamp(1.2rem, 4vw, 2rem)",
            color: "var(--crt-brown)",
            letterSpacing: "0.2em",
          }}
        >
          SOFTWARE ENGINEER
        </div>

        <div className="text-xs tracking-widest glow-dim mb-12">
          ◆ MS CS @ NYU COURANT — DEVOPS | FULLSTACK | ML ◆
        </div>

        {/* Terminal box */}
        <div
          className="crt-border text-left p-6 max-w-xl mx-auto text-sm leading-relaxed mb-10"
          style={{ background: "var(--crt-paper)" }}
        >
          <div className="space-y-2">
            <div>
              <span style={{ color: "var(--crt-brown-dim)" }}>$</span>{" "}
              <span className="glow-sm">whoami</span>
            </div>
            <div style={{ color: "var(--crt-brown)" }}>
              Software Engineer with expertise in DevOps, full-stack
              development, and machine learning. Currently pursuing Masters in
              Computer Science at NEW YORK UNIVERSITY Courant.
            </div>
            <div className="mt-3">
              <span style={{ color: "var(--crt-brown-dim)" }}>$</span>{" "}
              <span className="glow-sm">cat ./stack.txt</span>
            </div>
            <div
              style={{ color: "var(--crt-brown-dim)" }}
              className="pl-4 space-y-0.5"
            >
              <div>KUBERNETES_EKS/</div>
              <div>TERRAFORM_AWS/</div>
              <div>REACT_PYTHON_JAVA/</div>
            </div>
            <div className="mt-2">
              <span style={{ color: "var(--crt-brown-dim)" }}>$</span>{" "}
              <span className="glow-sm">./connect.sh</span>
              <span
                style={{
                  display: "inline-block",
                  animation: "blink 1s step-start infinite",
                  color: "var(--crt-brown-bright)",
                }}
              >
                █
              </span>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#experience"
            className="text-xs tracking-[0.2em] px-6 py-3 transition-all duration-100"
            style={{
              border: "1px solid var(--crt-brown)",
              color: "var(--crt-brown-bright)",
              background: "rgba(122,74,30,0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--crt-brown)";
              e.currentTarget.style.color = "var(--crt-bg)";
              e.currentTarget.style.boxShadow = "var(--crt-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(122,74,30,0.07)";
              e.currentTarget.style.color = "var(--crt-brown-bright)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            [ VIEW EXPERIENCE ]
          </a>
          <a
            href="#work"
            className="text-xs tracking-[0.2em] px-6 py-3 transition-all duration-100"
            style={{
              border: "1px solid var(--crt-brown)",
              color: "var(--crt-brown-bright)",
              background: "rgba(122,74,30,0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--crt-brown)";
              e.currentTarget.style.color = "var(--crt-bg)";
              e.currentTarget.style.boxShadow = "var(--crt-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(122,74,30,0.07)";
              e.currentTarget.style.color = "var(--crt-brown-bright)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            [ VIEW WORK ]
          </a>
          <a
            href="#contact"
            className="text-xs tracking-[0.2em] px-6 py-3 transition-all duration-100"
            style={{
              border: "1px solid var(--crt-border-col)",
              color: "var(--crt-brown-dim)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--crt-brown)";
              e.currentTarget.style.color = "var(--crt-brown)";
              e.currentTarget.style.boxShadow = "var(--crt-glow-sm)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--crt-border-col)";
              e.currentTarget.style.color = "var(--crt-brown-dim)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            [ CONTACT ME ]
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest glow-dim"
        style={{ animation: "blink 2s step-start infinite" }}
      >
        ▼ SCROLL DOWN ▼
      </div>
    </section>
  );
}
