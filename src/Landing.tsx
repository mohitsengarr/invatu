import React, { useState, useEffect, useRef } from "react";

// ─── REFERRAL LINK ────────────────────────────────────────────────────
// Replace with your Apollo.io affiliate / referral signup URL
const REFERRAL_LINK = "https://www.apollo.io/?via=invatu";
const MEETING_LINK = "https://app.apollo.io/#/meet/mohit-sengar-xbf/30-min";
// ──────────────────────────────────────────────────────────────────────

/* ── tiny hook: animate numbers when visible ── */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setCount(Math.floor(p * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return { count, ref };
}

const Landing: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const stat1 = useCountUp(600, 1800);
  const stat2 = useCountUp(230, 1800);
  const stat3 = useCountUp(75, 1400);
  const stat4 = useCountUp(64, 1400);

  const handleCTA = () => {
    window.open(REFERRAL_LINK, "_blank");
  };
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`${REFERRAL_LINK}&email=${encodeURIComponent(email)}`, "_blank");
      setSubmitted(true);
    }
  };
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1A1A2E", overflowX: "hidden" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{overflow-x:hidden}

        @keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(235,242,18,.4)}70%{box-shadow:0 0 0 18px rgba(235,242,18,0)}}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes scaleIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}

        .fade-up{animation:fadeInUp .7s ease-out both}
        .delay-1{animation-delay:.15s}
        .delay-2{animation-delay:.3s}
        .delay-3{animation-delay:.45s}
        .float-y{animation:float 5s ease-in-out infinite}

        .cta{
          display:inline-flex;align-items:center;gap:10px;
          padding:16px 36px;background:#EBF212;color:#000;
          border:none;border-radius:10px;font-size:17px;font-weight:700;
          font-family:'Inter',sans-serif;cursor:pointer;
          transition:all .25s;text-decoration:none;
          box-shadow:0 2px 20px rgba(235,242,18,.25);
        }
        .cta:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(235,242,18,.35)}
        .cta-lg{padding:20px 48px;font-size:19px}
        .cta-dark{background:#1A1A2E;color:#fff;box-shadow:0 2px 20px rgba(0,0,0,.15)}
        .cta-dark:hover{background:#2A2A3E;box-shadow:0 8px 32px rgba(0,0,0,.25)}
        .cta-outline{background:transparent;border:2px solid #1A1A2E;color:#1A1A2E;box-shadow:none}
        .cta-outline:hover{background:#1A1A2E;color:#fff}
        .cta-pulse{animation:pulse 2s infinite}

        .section{padding:100px 24px;max-width:1160px;margin:0 auto}
        .badge{display:inline-block;padding:6px 16px;border-radius:100px;font-size:13px;font-weight:600;letter-spacing:.5px}
        .badge-yellow{background:#FAFDE6;color:#6B7209}
        .badge-dark{background:rgba(235,242,18,.15);color:#EBF212}

        .card{background:#fff;border-radius:16px;padding:36px;border:1px solid #F0F0F5;transition:all .3s}
        .card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.06);border-color:#E8E8FF}

        .check-list{list-style:none;padding:0}
        .check-list li{display:flex;align-items:flex-start;gap:10px;margin-bottom:14px;font-size:15px;color:#444;line-height:1.5}
        .check-list li::before{content:'✓';display:flex;align-items:center;justify-content:center;min-width:22px;height:22px;border-radius:6px;background:#FAFDE6;color:#6B7209;font-weight:700;font-size:13px}

        .pricing-card{background:#fff;border-radius:20px;padding:36px;border:1px solid #E8E8F0;text-align:center;transition:all .3s;position:relative}
        .pricing-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.08)}
        .pricing-popular{border:2px solid #EBF212;box-shadow:0 8px 40px rgba(235,242,18,.15)}
        .pricing-popular::before{content:'MOST POPULAR';position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:#EBF212;color:#000;font-size:11px;font-weight:800;padding:4px 16px;border-radius:100px;letter-spacing:1px}

        .marquee-wrap{overflow:hidden;padding:32px 0}
        .marquee-track{display:flex;gap:48px;animation:marquee 25s linear infinite;width:max-content}
        .marquee-track img{height:24px;opacity:.35;filter:grayscale(100%);transition:all .3s}
        .marquee-track img:hover{opacity:1;filter:grayscale(0%)}

        .vs-table{width:100%;border-collapse:collapse;text-align:left}
        .vs-table th,.vs-table td{padding:14px 20px;border-bottom:1px solid #F0F0F5;font-size:15px}
        .vs-table th{font-weight:600;color:#888;font-size:13px;text-transform:uppercase;letter-spacing:.5px}
        .vs-table td:first-child{font-weight:600;color:#1A1A2E}
        .vs-table .highlight{background:#FDFFF0}

        @media(max-width:768px){
          .section{padding:60px 16px}
          .hide-mobile{display:none!important}
          .grid-2{grid-template-columns:1fr!important}
          .grid-3{grid-template-columns:1fr!important}
          .grid-4{grid-template-columns:1fr 1fr!important}
          .hero-grid{grid-template-columns:1fr!important;text-align:center}
          .hero-title{font-size:36px!important}
        }
      `}</style>

      {/* ═══════════ HEADER ═══════════ */}
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: "rgba(255,255,255,.97)", backdropFilter: "blur(14px)",
          borderBottom: "1px solid #F0F0F5",
        }}
      >
        <div
          style={{
            maxWidth: 1160, margin: "0 auto", padding: "14px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div
              style={{
                width: 32, height: 32, borderRadius: 8,
                background: "linear-gradient(135deg,#5533FF,#7B5CFF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 800, fontSize: 16,
              }}
            >
              I
            </div>
            <span style={{ fontWeight: 700, fontSize: 18, color: "#1A1A2E" }}>Invatu</span>
          </a>

          <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="hide-mobile">
            <button onClick={() => scrollTo("features")} style={navBtn}>Features</button>
            <button onClick={() => scrollTo("compare")} style={navBtn}>Compare</button>
            <button onClick={() => scrollTo("pricing")} style={navBtn}>Pricing</button>
            <button onClick={() => scrollTo("faq")} style={navBtn}>FAQ</button>
            <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="cta" style={{ padding: "10px 24px", fontSize: 14 }}>
              Try Apollo Free →
            </a>
          </nav>
        </div>
      </header>

      {/* ═══════════ HERO ═══════════ */}
      <section
        style={{
          minHeight: "100vh", display: "flex", alignItems: "center",
          background: "linear-gradient(180deg,#FDFFF5 0%,#FFFFFF 60%,#FAFAFF 100%)",
          paddingTop: 100, position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", top: 60, right: -120, width: 500, height: 500,
            background: "radial-gradient(circle,rgba(235,242,18,.12) 0%,transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: -80, left: -80, width: 400, height: 400,
            background: "radial-gradient(circle,rgba(85,51,255,.06) 0%,transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div className="section" style={{ paddingBottom: 40 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 56, alignItems: "center" }}>
            <div className="fade-up">
              <span className="badge badge-yellow">Recommended by Invatu Technologies</span>
              <h1
                className="hero-title"
                style={{
                  fontSize: 52, fontWeight: 900, lineHeight: 1.12,
                  color: "#0D0D1A", marginTop: 20, marginBottom: 24,
                }}
              >
                Stop Guessing.<br />
                Start <span style={{ background: "linear-gradient(90deg,#C9D100,#EBF212)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Closing</span> Deals<br />
                With AI.
              </h1>
              <p style={{ fontSize: 19, color: "#555", lineHeight: 1.7, maxWidth: 500, marginBottom: 36 }}>
                Apollo.io gives you 230M+ verified contacts, AI-powered outreach, and a built-in CRM —
                so you can <strong>book 75% more meetings</strong> while cutting your sales stack cost by 64%.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
                <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="cta cta-lg cta-pulse">
                  Start Free — No Card Needed
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
                <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" className="cta cta-outline">
                  Book a Demo
                </a>
              </div>

              <div style={{ display: "flex", gap: 36 }}>
                {[
                  { n: "600K+", l: "Companies" },
                  { n: "230M+", l: "Contacts" },
                  { n: "Free Plan", l: "Forever" },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#1A1A2E" }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: "#888", fontWeight: 500 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up delay-2" style={{ position: "relative" }}>
              <div className="float-y" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,.12)" }}>
                <img
                  src="https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage-static-for-video.f8895a91.png&w=1920&q=75"
                  alt="Apollo.io Dashboard"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div
                style={{
                  position: "absolute", bottom: -16, left: -20,
                  background: "#fff", borderRadius: 14, padding: "14px 20px",
                  boxShadow: "0 8px 32px rgba(0,0,0,.1)",
                  display: "flex", alignItems: "center", gap: 10,
                }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "#E8FFE8", display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E" }}>Free to Get Started</div>
                  <div style={{ fontSize: 11, color: "#888" }}>No credit card required</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SOCIAL PROOF BAR ═══════════ */}
      <section style={{ background: "#FAFAFA", borderTop: "1px solid #F0F0F5", borderBottom: "1px solid #F0F0F5" }}>
        <p style={{ textAlign: "center", fontSize: 13, color: "#999", fontWeight: 600, paddingTop: 28, letterSpacing: 1 }}>
          TRUSTED BY 600,000+ COMPANIES WORLDWIDE
        </p>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {/* Using well-known company logos from Apollo's integration ecosystem */}
            {Array(2).fill(null).flatMap((_, r) =>
              ["salesforce", "hubspot", "slack", "zapier", "dropbox", "microsoft", "google", "linkedin"].map(
                (name, i) => (
                  <div key={`${r}-${i}`} style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.4 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#888", letterSpacing: 0.5, textTransform: "capitalize" }}>{name}</span>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ PAIN POINTS ═══════════ */}
      <section style={{ background: "#0D0D1A", color: "#fff" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <span className="badge badge-dark">The Problem</span>
          <h2 style={{ fontSize: 40, fontWeight: 800, marginTop: 16, marginBottom: 20, lineHeight: 1.2 }}>
            Your Sales Team Is Drowning in <span style={{ color: "#FF6B6B" }}>Busy Work</span>
          </h2>
          <p style={{ fontSize: 18, color: "#9BA5B7", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 52px" }}>
            Reps spend 65% of their time NOT selling. Juggling 5+ tools, stale data, and manual prospecting
            is killing your pipeline.
          </p>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              { icon: "📊", title: "5+ Tools, Zero Integration", desc: "Your CRM, enrichment tool, dialer, sequencer, and analytics don't talk to each other. Data falls through the cracks." },
              { icon: "👻", title: "Stale, Incomplete Data", desc: "40% of B2B data decays annually. Your team is emailing dead inboxes and calling wrong numbers." },
              { icon: "⏳", title: "Hours of Manual Prospecting", desc: "Your best reps spend 4+ hours daily on research and data entry instead of having conversations." },
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,.04)", borderRadius: 18, padding: 32, border: "1px solid rgba(255,255,255,.06)", textAlign: "left" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "#9BA5B7", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SOLUTION / FEATURES ═══════════ */}
      <section id="features" style={{ background: "#fff" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="badge badge-yellow">The Solution</span>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0D0D1A", marginTop: 16, marginBottom: 16, lineHeight: 1.2 }}>
              One Platform. <span style={{ color: "#6B7209" }}>Everything You Need.</span>
            </h2>
            <p style={{ fontSize: 18, color: "#666", maxWidth: 580, margin: "0 auto", lineHeight: 1.6 }}>
              Apollo.io replaces 5 tools with one unified platform — so your team can focus on closing, not context-switching.
            </p>
          </div>

          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {[
              {
                title: "Outbound Prospecting",
                desc: "AI-powered multichannel campaigns. Built-in deliverability guardrails. Prioritized task lists. Go from list to booked meeting in minutes.",
                features: ["Email Sequences", "AI Writer", "Smart Dialer", "LinkedIn Tasks"],
                img: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftab-1-outbound.05850b0a.png&w=960&q=75",
              },
              {
                title: "Inbound Lead Capture",
                desc: "Identify anonymous visitors. Enrich forms in real-time. Route hot leads instantly with built-in scheduling.",
                features: ["Visitor ID", "Form Enrichment", "Auto-Routing", "Nurture Flows"],
                img: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftab-2-inbound.1d94def9.png&w=960&q=75",
              },
              {
                title: "Data Enrichment",
                desc: "230M+ contacts. 30M+ companies. Verified emails and phone numbers. Always-fresh data that powers smarter targeting.",
                features: ["230M+ Contacts", "Verified Emails", "Phone Numbers", "CRM Sync"],
                img: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftab-3-enrichment.0f3ce531.png&w=960&q=75",
              },
              {
                title: "Deal Execution & AI",
                desc: "Pre-meeting insights. AI call summaries and follow-ups. Pipeline boards. Conversation intelligence for coaching.",
                features: ["Call Recording", "AI Summaries", "Pipeline View", "Deal Alerts"],
                img: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftab-4-deal.3196dc44.png&w=960&q=75",
              },
            ].map((f, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 20, background: "#F8F8FC" }}>
                  <img src={f.img} alt={f.title} style={{ width: "100%", display: "block" }} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6, marginBottom: 16 }}>{f.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
                  {f.features.map((tag, j) => (
                    <span key={j} style={{ padding: "4px 12px", background: "#FAFDE6", borderRadius: 100, fontSize: 12, color: "#6B7209", fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="cta cta-lg">
              Try All Features Free →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section style={{ background: "#1A1A2E" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <span className="badge badge-dark">Real Results</span>
          <h2 style={{ fontSize: 40, fontWeight: 800, color: "#fff", marginTop: 16, marginBottom: 52, lineHeight: 1.2 }}>
            Companies Using Apollo See
          </h2>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {[
              { ref: stat1.ref, val: `${stat1.count}K+`, label: "Companies Trust Apollo", sub: "And growing every day" },
              { ref: stat2.ref, val: `${stat2.count}M+`, label: "Verified Contacts", sub: "Largest B2B database" },
              { ref: stat3.ref, val: `${stat3.count}%`, label: "More Meetings Booked", sub: "Average uplift for teams" },
              { ref: stat4.ref, val: `${stat4.count}%`, label: "Lower Stack Costs", sub: "By replacing 5 tools" },
            ].map((s, i) => (
              <div
                key={i}
                ref={s.ref as React.Ref<HTMLDivElement>}
                style={{
                  background: "rgba(255,255,255,.05)", borderRadius: 18, padding: 32,
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <div style={{ fontSize: 44, fontWeight: 900, color: "#EBF212", marginBottom: 8 }}>{s.val}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section id="compare" style={{ background: "#FAFAFA" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="badge badge-yellow">Why Switch?</span>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0D0D1A", marginTop: 16, lineHeight: 1.2 }}>
              Apollo vs. Your Current Stack
            </h2>
          </div>

          <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid #E8E8F0", maxWidth: 800, margin: "0 auto" }}>
            <table className="vs-table">
              <thead>
                <tr style={{ background: "#FAFAFA" }}>
                  <th>Capability</th>
                  <th>Typical Stack (5+ Tools)</th>
                  <th className="highlight">Apollo.io</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["B2B Contact Database", "ZoomInfo — $15K+/yr", "Built-in — 230M+ contacts"],
                  ["Email Sequences", "Outreach — $100/user/mo", "Built-in — Unlimited"],
                  ["Sales Dialer", "Aircall — $40/user/mo", "Built-in — AI-powered"],
                  ["Data Enrichment", "Clearbit — $99/mo", "Built-in — Waterfall enrichment"],
                  ["CRM", "HubSpot — $45+/user/mo", "Built-in + integrations"],
                  ["Total Cost", "$300-500/user/mo", "From $0 (Free forever)"],
                  ["Setup Time", "Weeks of integration", "Minutes to first value"],
                ].map(([cap, old, apollo], i) => (
                  <tr key={i}>
                    <td>{cap}</td>
                    <td style={{ color: "#999" }}>{old}</td>
                    <td className="highlight" style={{ color: "#6B7209", fontWeight: 600 }}>{apollo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="cta cta-lg">
              Switch to Apollo — It's Free →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section id="pricing" style={{ background: "#fff" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="badge badge-yellow">Simple Pricing</span>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0D0D1A", marginTop: 16, marginBottom: 12, lineHeight: 1.2 }}>
              Start Free, Scale As You Grow
            </h2>
            <p style={{ fontSize: 17, color: "#666", maxWidth: 520, margin: "0 auto" }}>
              No hidden fees. No annual lock-in on the free plan. Cancel anytime.
            </p>
          </div>

          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {[
              {
                name: "Free", price: "$0", period: "forever", popular: false,
                features: ["900 credits/yr", "AI Assistant", "2 Sequences", "Basic Filters", "Gmail Extension"],
              },
              {
                name: "Basic", price: "$49", period: "/user/mo", popular: false,
                features: ["30K credits/yr", "Unlimited Sequences", "CRM Integrations", "Email Warmup", "Intent Data"],
              },
              {
                name: "Professional", price: "$79", period: "/user/mo", popular: true,
                features: ["48K credits/yr", "A/Z Testing", "Automated Workflows", "Call Recording & AI", "Analytics & Reports"],
              },
              {
                name: "Organization", price: "$119", period: "/user/mo", popular: false,
                features: ["72K credits/yr", "SSO & Security", "Custom Dashboards", "8K min call recording", "Unlimited meetings"],
              },
            ].map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.popular ? "pricing-popular" : ""}`}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A2E", marginBottom: 8 }}>{plan.name}</h3>
                <div style={{ fontSize: 40, fontWeight: 900, color: "#0D0D1A", marginBottom: 4 }}>{plan.price}</div>
                <div style={{ fontSize: 14, color: "#888", marginBottom: 24 }}>{plan.period}</div>
                <ul className="check-list" style={{ textAlign: "left", marginBottom: 24 }}>
                  {plan.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a
                  href={REFERRAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cta ${plan.popular ? "" : "cta-dark"}`}
                  style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "12px 20px" }}
                >
                  {plan.price === "$0" ? "Get Started Free" : "Start Free Trial"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section style={{ background: "#FAFAFA" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="badge badge-yellow">What Users Say</span>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0D0D1A", marginTop: 16, lineHeight: 1.2 }}>
              600,000+ Teams Can't Be Wrong
            </h2>
          </div>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              {
                quote: "The average number of meetings booked increased by 75% once we made the move over to Apollo.",
                name: "Andrew Froning", role: "BDR Leader @ Cyera", stat: "75% more meetings",
              },
              {
                quote: "Apollo enriches everything we have: contacts, leads, accounts. We don't really have to touch it, it just works.",
                name: "Mark Turner", role: "VP Revenue Ops @ Built In", stat: "Fully automated",
              },
              {
                quote: "We replaced our entire tech stack with Apollo. 4x more contact data while cutting platform costs by 64%.",
                name: "Sylvain Giuliani", role: "Head of Growth @ Census", stat: "64% cost savings",
              },
            ].map((t, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E8E8F0", position: "relative" }}>
                <div style={{ position: "absolute", top: 14, left: 24, fontSize: 64, color: "#F0F0F5", fontFamily: "Georgia,serif", lineHeight: 1 }}>"</div>
                <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 20, paddingTop: 20, position: "relative", zIndex: 1 }}>
                  {t.quote}
                </p>
                <div style={{ display: "inline-block", padding: "4px 12px", background: "#FAFDE6", borderRadius: 100, fontSize: 12, fontWeight: 700, color: "#6B7209", marginBottom: 16 }}>
                  {t.stat}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center", color: "#EBF212", fontWeight: 700, fontSize: 14 }}>
                    {t.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1A2E" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section id="faq" style={{ background: "#fff" }}>
        <div className="section" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="badge badge-yellow">FAQ</span>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#0D0D1A", marginTop: 16, lineHeight: 1.2 }}>
              Common Questions
            </h2>
          </div>

          {[
            { q: "Is Apollo.io really free?", a: "Yes. Apollo offers a generous free plan with 900 credits/year, AI assistant, 2 sequences, and basic filters. No credit card required. You can use it forever." },
            { q: "How is Apollo's data quality?", a: "Apollo maintains 230M+ verified contacts across 30M+ companies. Their data is continuously updated and verified, with email deliverability rates among the highest in the industry." },
            { q: "Can it replace my current tools?", a: "Most teams replace ZoomInfo, Outreach/SalesLoft, Clearbit, and even parts of their CRM with Apollo — saving 50-64% on their sales stack while getting better results." },
            { q: "How long does setup take?", a: "Most teams get first value within minutes. Connect your email, import your CRM data, and start prospecting immediately. No complex integrations needed." },
            { q: "Is it secure and compliant?", a: "Apollo is SOC 2 Type II certified, GDPR and CCPA compliant, and holds ISO 27001 certification. Enterprise plans include SSO and advanced security." },
          ].map((faq, i) => (
            <details
              key={i}
              style={{
                borderBottom: "1px solid #F0F0F5", padding: "20px 0", cursor: "pointer",
              }}
            >
              <summary style={{ fontSize: 17, fontWeight: 600, color: "#1A1A2E", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {faq.q}
                <span style={{ fontSize: 22, color: "#CCC", transition: "transform .2s" }}>+</span>
              </summary>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, marginTop: 12, paddingRight: 40 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section style={{ background: "#0D0D1A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(235,242,18,.08) 0%,transparent 70%)", borderRadius: "50%" }} />

        <div className="section" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="badge badge-dark">Limited Time</span>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#fff", marginTop: 16, marginBottom: 16, lineHeight: 1.2, maxWidth: 650, margin: "16px auto" }}>
            Your Competitors Are Already Using Apollo.{" "}
            <span style={{ color: "#EBF212" }}>Are You?</span>
          </h2>
          <p style={{ fontSize: 18, color: "#9BA5B7", lineHeight: 1.7, maxWidth: 520, margin: "24px auto 40px" }}>
            Join 600,000+ companies. Start with the free plan — upgrade when you're ready.
            No credit card. No risk.
          </p>

          <form onSubmit={handleEmailSubmit} style={{ display: "flex", gap: 12, maxWidth: 480, margin: "0 auto 28px", justifyContent: "center" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              style={{
                flex: 1, padding: "16px 24px", borderRadius: 10,
                border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.05)",
                color: "#fff", fontSize: 16, fontFamily: "'Inter',sans-serif", outline: "none",
              }}
            />
            <button type="submit" className="cta cta-lg">
              {submitted ? "Let's Go! ✓" : "Get Started"}
            </button>
          </form>

          <p style={{ fontSize: 13, color: "#555" }}>Free forever plan available. No credit card required.</p>

          <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 40, flexWrap: "wrap" }}>
            {["SOC 2 Certified", "GDPR Compliant", "600K+ Companies", "Free Forever Plan"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "#777", fontSize: 13 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EBF212" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer style={{ background: "#080812", color: "#555", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg,#5533FF,#7B5CFF)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 14 }}>I</div>
              <span style={{ fontWeight: 700, fontSize: 16, color: "#999" }}>Invatu Technologies</span>
            </div>
            <p style={{ fontSize: 13 }}>We recommend tools we trust. Apollo.io is one of them.</p>
          </div>
          <div style={{ display: "flex", gap: 20, fontSize: 13 }}>
            <a href="mailto:mohit.sengar@invatu.com" style={{ color: "#777", textDecoration: "none" }}>Contact</a>
            <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#EBF212", textDecoration: "none", fontWeight: 600 }}>Try Apollo Free</a>
          </div>
        </div>
        <div style={{ maxWidth: 1160, margin: "24px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.05)", fontSize: 12, textAlign: "center", color: "#444" }}>
          © {new Date().getFullYear()} Invatu Technologies. This page contains affiliate links.
        </div>
      </footer>
    </div>
  );
};

const navBtn: React.CSSProperties = {
  color: "#444", textDecoration: "none", fontWeight: 500, fontSize: 14,
  cursor: "pointer", background: "none", border: "none", fontFamily: "'Inter',sans-serif",
};

export default Landing;
