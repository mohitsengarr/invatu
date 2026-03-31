import React, { useState } from "react";

const APOLLO_LINK = "https://app.apollo.io/#/meet/mohit-sengar-xbf/30-min";

const Landing: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`${APOLLO_LINK}?email=${encodeURIComponent(email)}`, "_blank");
      setSubmitted(true);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: "#2B354F", overflowX: "hidden" }}>
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .slide-left { animation: slideInLeft 0.8s ease-out forwards; }
        .slide-right { animation: slideInRight 0.8s ease-out forwards; }
        .float-anim { animation: float 6s ease-in-out infinite; }
        .pulse-anim { animation: pulse 2s ease-in-out infinite; }
        .gradient-bg {
          background: linear-gradient(135deg, #5533FF, #7B5CFF, #5533FF);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 40px;
          background: #5533FF;
          color: white;
          border: none;
          border-radius: 160px;
          font-size: 18px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(85, 51, 255, 0.3);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(85, 51, 255, 0.45);
          background: #4422EE;
        }
        .cta-btn-outline {
          background: transparent;
          color: #5533FF;
          border: 2px solid #5533FF;
          box-shadow: none;
        }
        .cta-btn-outline:hover {
          background: #5533FF;
          color: white;
          box-shadow: 0 8px 32px rgba(85, 51, 255, 0.3);
        }
        .cta-btn-white {
          background: white;
          color: #5533FF;
          box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        }
        .cta-btn-white:hover {
          background: #F0EDFF;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        .cta-btn-large {
          padding: 20px 56px;
          font-size: 20px;
        }

        .section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-badge {
          display: inline-block;
          padding: 6px 18px;
          background: #F0EDFF;
          color: #5533FF;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .section-title {
          font-size: 42px;
          font-weight: 800;
          color: #161C2D;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .section-subtitle {
          font-size: 18px;
          color: #6B7A99;
          line-height: 1.7;
          max-width: 600px;
        }

        .card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 4px 40px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          border: 1px solid #F0F0F5;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 48px rgba(85,51,255,0.1);
          border-color: #E0DBFF;
        }

        .nav-link {
          color: #2B354F;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'Poppins', sans-serif;
        }
        .nav-link:hover { color: #5533FF; }

        .stat-number {
          font-size: 48px;
          font-weight: 800;
          color: #5533FF;
          line-height: 1;
        }

        .marquee-track {
          display: flex;
          gap: 60px;
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .marquee-track img {
          height: 36px;
          opacity: 0.5;
          filter: grayscale(100%);
          transition: all 0.3s;
        }
        .marquee-track img:hover {
          opacity: 1;
          filter: grayscale(0%);
        }

        .step-connector {
          width: 2px;
          height: 60px;
          background: linear-gradient(to bottom, #5533FF, #E0DBFF);
          margin: 0 auto;
        }

        .testimonial-card {
          background: linear-gradient(135deg, #F8F7FF, #FFFFFF);
          border-radius: 24px;
          padding: 40px;
          border: 1px solid #E8E5FF;
          position: relative;
        }
        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 16px;
          left: 28px;
          font-size: 80px;
          color: #E0DBFF;
          font-family: Georgia, serif;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .section { padding: 60px 16px; }
          .section-title { font-size: 28px; }
          .section-subtitle { font-size: 16px; }
          .stat-number { font-size: 36px; }
          .cta-btn { padding: 14px 28px; font-size: 16px; }
          .cta-btn-large { padding: 16px 36px; font-size: 17px; }
        }
      `}</style>

      {/* ===== HEADER / NAV ===== */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #F0F0F5",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "16px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg, #5533FF, #7B5CFF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 800, fontSize: 18,
            }}>I</div>
            <span style={{ fontWeight: 700, fontSize: 20, color: "#161C2D" }}>Invatu</span>
          </div>

          <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <button className="nav-link" onClick={() => scrollTo("services")}>Services</button>
            <button className="nav-link" onClick={() => scrollTo("process")}>Process</button>
            <button className="nav-link" onClick={() => scrollTo("results")}>Results</button>
            <button className="nav-link" onClick={() => scrollTo("testimonials")}>Clients</button>
            <a href={APOLLO_LINK} target="_blank" rel="noopener noreferrer"
              className="cta-btn" style={{ padding: "10px 28px", fontSize: 14 }}>
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: "linear-gradient(180deg, #FAFAFF 0%, #FFFFFF 100%)",
        paddingTop: 100, position: "relative", overflow: "hidden",
      }}>
        {/* Background decorations */}
        <div style={{
          position: "absolute", top: 100, right: -100, width: 500, height: 500,
          background: "radial-gradient(circle, rgba(85,51,255,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: -50, left: -100, width: 400, height: 400,
          background: "radial-gradient(circle, rgba(85,51,255,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />

        <div className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div className="fade-in-up">
              <div className="section-badge">Trusted by 50+ Businesses</div>
              <h1 style={{
                fontSize: 56, fontWeight: 900, lineHeight: 1.1,
                color: "#161C2D", marginBottom: 24,
              }}>
                Build <span style={{
                  background: "linear-gradient(135deg, #5533FF, #7B5CFF)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>Powerful</span> Software<br/>That Scales
              </h1>
              <p style={{ fontSize: 20, color: "#6B7A99", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
                From idea to deployment — we build robust, secure applications using
                cutting-edge technology stacks. 10+ years of expertise in MEAN, MERN & .NET.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 48 }}>
                <a href={APOLLO_LINK} target="_blank" rel="noopener noreferrer"
                  className="cta-btn cta-btn-large pulse-anim">
                  Book Free Consultation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>

              <div style={{ display: "flex", gap: 40 }}>
                {[
                  { num: "50+", label: "Projects Delivered" },
                  { num: "10+", label: "Years Experience" },
                  { num: "99%", label: "Client Satisfaction" },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: "#5533FF" }}>{s.num}</div>
                    <div style={{ fontSize: 13, color: "#6B7A99", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="slide-right" style={{ position: "relative" }}>
              <div className="float-anim" style={{
                background: "linear-gradient(135deg, #5533FF 0%, #7B5CFF 50%, #9B85FF 100%)",
                borderRadius: 24, padding: 4, boxShadow: "0 20px 80px rgba(85,51,255,0.25)",
              }}>
                <img src="https://invatu.com/img/screens/dash/4.png" alt="Dashboard"
                  style={{ width: "100%", borderRadius: 20, display: "block" }} />
              </div>
              <div style={{
                position: "absolute", bottom: -20, left: -30,
                background: "white", borderRadius: 16, padding: "16px 24px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "#E8FFE8", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#161C2D" }}>Deployed to Production</div>
                  <div style={{ fontSize: 12, color: "#6B7A99" }}>CI/CD Pipeline Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGO MARQUEE ===== */}
      <section style={{ padding: "40px 0", background: "#FAFAFF", overflow: "hidden" }}>
        <p style={{ textAlign: "center", fontSize: 14, color: "#9BA5B7", fontWeight: 500, marginBottom: 24 }}>
          TRUSTED TECHNOLOGY PARTNERS
        </p>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track">
            {[
              "https://invatu.com/img/logos/webpack.svg",
              "https://invatu.com/img/logos/javascript.svg",
              "https://invatu.com/img/logos/es6.svg",
              "https://invatu.com/img/logos/node-sass.svg",
              "https://invatu.com/img/integration/slack.svg",
              "https://invatu.com/img/integration/zapier.svg",
              "https://invatu.com/img/integration/bitnami.svg",
              "https://invatu.com/img/integration/blossom.svg",
              "https://invatu.com/img/integration/dropbox.svg",
              "https://invatu.com/img/logos/webpack.svg",
              "https://invatu.com/img/logos/javascript.svg",
              "https://invatu.com/img/logos/es6.svg",
              "https://invatu.com/img/logos/node-sass.svg",
              "https://invatu.com/img/integration/slack.svg",
              "https://invatu.com/img/integration/zapier.svg",
              "https://invatu.com/img/integration/bitnami.svg",
              "https://invatu.com/img/integration/blossom.svg",
              "https://invatu.com/img/integration/dropbox.svg",
            ].map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEM / AGITATE ===== */}
      <section style={{ background: "#161C2D", color: "white" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <div className="section-badge" style={{ background: "rgba(85,51,255,0.2)", color: "#B3A1FF" }}>
            The Problem
          </div>
          <h2 className="section-title" style={{ color: "white", maxWidth: 800, margin: "0 auto 24px" }}>
            Most Software Projects Fail Because of <span style={{ color: "#FF6B6B" }}>Poor Technology Choices</span>
          </h2>
          <p style={{ fontSize: 18, color: "#9BA5B7", lineHeight: 1.8, maxWidth: 700, margin: "0 auto 48px" }}>
            67% of software projects go over budget. 33% fail entirely. The root cause?
            Outdated stacks, poor architecture, and teams that can't scale.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "⚠️", title: "Legacy Code Debt", desc: "Old frameworks slow you down and cost 3x more to maintain" },
              { icon: "🔓", title: "Security Breaches", desc: "80% of breaches come from known vulnerabilities in outdated dependencies" },
              { icon: "🐌", title: "Slow Time to Market", desc: "Without CI/CD and modern tools, deployments take weeks instead of minutes" },
            ].map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)", borderRadius: 20, padding: 36,
                border: "1px solid rgba(255,255,255,0.08)", textAlign: "left",
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "#9BA5B7", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES (SOLUTION) ===== */}
      <section id="services" style={{ background: "#FFFFFF" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-badge">Our Services</div>
            <h2 className="section-title">Your Path to <span style={{ color: "#5533FF" }}>Success</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              We provide end-to-end software solutions that scale with your business
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                  </svg>
                ),
                title: "Creative Design",
                desc: "World-class UI/UX designs for mobile and desktop applications that your users will love.",
                features: ["Responsive Design", "User Research", "Prototyping"],
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                ),
                title: "Powerful Software",
                desc: "Robust applications using the latest MEAN, MERN, and .NET stacks with 10+ years of expertise.",
                features: ["Full-Stack Dev", "API Integration", "Cloud Native"],
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                ),
                title: "Advanced Security",
                desc: "Enterprise-grade security built into every layer of your application from day one.",
                features: ["Pen Testing", "Encryption", "Compliance"],
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ),
                title: "Enterprise Integration",
                desc: "Complete REST/SOAP integration and automation solutions across all your platforms.",
                features: ["API Gateway", "Webhooks", "ETL Pipelines"],
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V10M12 20V4M6 20v-6"/>
                  </svg>
                ),
                title: "Application Monitoring",
                desc: "Complete monitoring solutions to keep your apps running at peak performance 24/7.",
                features: ["Real-time Alerts", "Performance", "Analytics"],
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                ),
                title: "CI/CD Deployment",
                desc: "Hassle-free continuous deployment pipelines so you ship features, not firefight releases.",
                features: ["Auto Deploy", "Rollbacks", "Staging Envs"],
              },
            ].map((service, i) => (
              <div key={i} className="card" style={{ textAlign: "left" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: "#F0EDFF", display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#161C2D", marginBottom: 12 }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: 15, color: "#6B7A99", lineHeight: 1.6, marginBottom: 20 }}>
                  {service.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {service.features.map((f, j) => (
                    <span key={j} style={{
                      padding: "4px 12px", background: "#F8F7FF", borderRadius: 100,
                      fontSize: 12, color: "#5533FF", fontWeight: 500,
                    }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (PROCESS) ===== */}
      <section id="process" style={{ background: "#FAFAFF" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-badge">How It Works</div>
            <h2 className="section-title">From Idea to Launch in <span style={{ color: "#5533FF" }}>4 Steps</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Our proven process eliminates guesswork and gets you to market faster
            </p>
          </div>

          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {[
              { step: "01", title: "Discovery Call", desc: "We learn about your business, goals, and technical requirements. Free, no obligation.", color: "#5533FF" },
              { step: "02", title: "Architecture & Design", desc: "We design the optimal tech stack, system architecture, and create interactive prototypes.", color: "#7B5CFF" },
              { step: "03", title: "Agile Development", desc: "Bi-weekly sprints with demos. You see progress and provide feedback every step of the way.", color: "#9B85FF" },
              { step: "04", title: "Deploy & Scale", desc: "CI/CD deployment, monitoring, and ongoing support to keep your application running smoothly.", color: "#5533FF" },
            ].map((item, i) => (
              <React.Fragment key={i}>
                <div style={{
                  display: "flex", gap: 32, alignItems: "flex-start",
                  padding: 32, background: "white", borderRadius: 20,
                  border: "1px solid #F0F0F5", transition: "all 0.3s",
                }}>
                  <div style={{
                    minWidth: 64, height: 64, borderRadius: 16,
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}33)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontSize: 22, fontWeight: 800,
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: "#161C2D", marginBottom: 8 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 16, color: "#6B7A99", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
                {i < 3 && <div className="step-connector" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS / SOCIAL PROOF ===== */}
      <section id="results" className="gradient-bg" style={{ color: "white" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <div className="section-badge" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
            Proven Results
          </div>
          <h2 className="section-title" style={{ color: "white" }}>Numbers That Speak</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 64, maxWidth: 500, margin: "0 auto 64px" }}>
            We don't just build software — we deliver measurable business outcomes
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              { num: "50+", label: "Projects Shipped", sub: "Across 12 industries" },
              { num: "99%", label: "On-Time Delivery", sub: "Average across all projects" },
              { num: "3x", label: "Faster Development", sub: "Compared to industry avg" },
              { num: "24/7", label: "Support & Monitoring", sub: "For all active clients" },
            ].map((s, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: 36,
                backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)",
              }}>
                <div style={{ fontSize: 48, fontWeight: 900, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APP SHOWCASE ===== */}
      <section style={{ background: "#FFFFFF", overflow: "hidden" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <div className="section-badge">Portfolio</div>
          <h2 className="section-title">Market-Leading <span style={{ color: "#5533FF" }}>Apps We've Built</span></h2>
          <p className="section-subtitle" style={{ margin: "0 auto 48px" }}>
            A glimpse at the applications we've designed and developed for our clients
          </p>
        </div>
        <div style={{ overflow: "hidden", paddingBottom: 60 }}>
          <div style={{
            display: "flex", gap: 24, animation: "marquee 40s linear infinite",
            width: "max-content",
          }}>
            {[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6].map((n, i) => (
              <img key={i} src={`https://invatu.com/img/screens/app/${(n % 6) + 1}.png`} alt=""
                style={{
                  height: 400, borderRadius: 20, boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" style={{ background: "#FAFAFF" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-badge">What Clients Say</div>
            <h2 className="section-title">Trusted by <span style={{ color: "#5533FF" }}>Industry Leaders</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              {
                quote: "Invatu delivered our platform 40% faster than our previous vendor. The code quality and architecture are exceptional.",
                name: "Sarah Chen",
                role: "CTO, FinTrack",
                avatar: "SC",
              },
              {
                quote: "Their security-first approach saved us from a major compliance issue. Couldn't recommend them more highly.",
                name: "James Rodriguez",
                role: "VP Engineering, SecureNet",
                avatar: "JR",
              },
              {
                quote: "The monitoring and CI/CD pipeline they built reduced our deployment time from 2 hours to 5 minutes.",
                name: "Priya Patel",
                role: "Director of Ops, DataFlow",
                avatar: "PP",
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <p style={{ fontSize: 16, color: "#4A5568", lineHeight: 1.7, marginBottom: 24, paddingTop: 24, position: "relative", zIndex: 1 }}>
                  {t.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #5533FF, #9B85FF)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontWeight: 700, fontSize: 14,
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: "#161C2D" }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "#6B7A99" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA / BOOK CALL ===== */}
      <section style={{
        background: "linear-gradient(135deg, #161C2D 0%, #1E2640 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -100, right: -100, width: 400, height: 400,
          background: "radial-gradient(circle, rgba(85,51,255,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: -100, left: -100, width: 300, height: 300,
          background: "radial-gradient(circle, rgba(85,51,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />

        <div className="section" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-badge" style={{ background: "rgba(85,51,255,0.2)", color: "#B3A1FF" }}>
            Limited Availability
          </div>
          <h2 className="section-title" style={{ color: "white", maxWidth: 700, margin: "0 auto 16px" }}>
            Ready to Build Something <span style={{
              background: "linear-gradient(135deg, #7B5CFF, #B3A1FF)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Extraordinary</span>?
          </h2>
          <p style={{ fontSize: 18, color: "#9BA5B7", lineHeight: 1.7, maxWidth: 550, margin: "0 auto 40px" }}>
            Book a free 30-minute consultation. We'll review your project requirements
            and show you exactly how we can help.
          </p>

          {/* Email capture + CTA */}
          <form onSubmit={handleSubmit} style={{
            display: "flex", gap: 12, maxWidth: 500, margin: "0 auto 32px",
            justifyContent: "center",
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                flex: 1, padding: "16px 24px", borderRadius: 160,
                border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)",
                color: "white", fontSize: 16, fontFamily: "'Poppins', sans-serif",
                outline: "none",
              }}
            />
            <button type="submit" className="cta-btn cta-btn-large">
              {submitted ? "Booked!" : "Book Call"}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>

          <p style={{ fontSize: 14, color: "#6B7A99" }}>
            No spam, no obligation. Just a conversation about your project.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 48 }}>
            {["Free Consultation", "No Long-term Contracts", "NDA Protected"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "#9BA5B7", fontSize: 14 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#0F1320", color: "#6B7A99", padding: "60px 20px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: "linear-gradient(135deg, #5533FF, #7B5CFF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontWeight: 800, fontSize: 16,
              }}>I</div>
              <span style={{ fontWeight: 700, fontSize: 18, color: "white" }}>Invatu Technologies</span>
            </div>
            <p style={{ fontSize: 14 }}>Building the future, one application at a time.</p>
          </div>

          <div style={{ display: "flex", gap: 24, fontSize: 14 }}>
            <a href="mailto:mohit.sengar@invatu.com" style={{ color: "#9BA5B7", textDecoration: "none" }}>
              mohit.sengar@invatu.com
            </a>
            <a href={APOLLO_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#5533FF", textDecoration: "none", fontWeight: 600 }}>
              Book a Call
            </a>
          </div>
        </div>
        <div style={{
          maxWidth: 1200, margin: "32px auto 0", paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          fontSize: 13, textAlign: "center",
        }}>
          © {new Date().getFullYear()} Invatu Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;
