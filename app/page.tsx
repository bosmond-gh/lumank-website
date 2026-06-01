export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root { --orange: #E87722; --orange-dark: #C9621A; --black: #0A0A0A; --dark: #111111; --gray: #888; --light: #F7F5F2; --white: #FFFFFF; }
        body { font-family: 'Barlow', sans-serif; background: var(--white); color: var(--black); }
        .hero { background: var(--black); min-height: 90vh; display: flex; align-items: center; position: relative; overflow: hidden; }
        .hero-bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(232,119,34,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.05) 1px, transparent 1px); background-size: 60px 60px; }
        .hero-bg-glow { position: absolute; top: -200px; right: -100px; width: 700px; height: 700px; background: radial-gradient(circle, rgba(232,119,34,0.12) 0%, transparent 70%); }
        .hero-inner { max-width: 1280px; margin: 0 auto; padding: 80px 32px; width: 100%; position: relative; z-index: 1; }
        .eyebrow { display: inline-flex; align-items: center; gap: 10px; background: rgba(232,119,34,0.12); border: 1px solid rgba(232,119,34,0.3); border-radius: 100px; padding: 6px 16px; margin-bottom: 32px; }
        .eyebrow span { color: #E87722; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; }
        .eyebrow-dot { width: 6px; height: 6px; background: #E87722; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        h1.hero-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(56px,8vw,110px); line-height: 0.92; color: white; text-transform: uppercase; letter-spacing: -1px; margin-bottom: 24px; }
        h1.hero-title .accent { color: #E87722; display: block; }
        .hero-sub { color: #999; font-size: 18px; font-weight: 300; line-height: 1.7; max-width: 520px; margin-bottom: 48px; }
        .hero-sub strong { color: #ddd; font-weight: 500; }
        .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-orange { background: #E87722; color: white; text-decoration: none; padding: 16px 36px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-radius: 6px; display: inline-block; transition: all .2s; }
        .btn-orange:hover { background: #C9621A; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(232,119,34,0.4); }
        .btn-ghost { border: 1px solid #333; color: #ccc; text-decoration: none; padding: 16px 36px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-radius: 6px; display: inline-block; transition: all .2s; }
        .btn-ghost:hover { border-color: #666; color: white; }
        .hero-stats { display: flex; gap: 48px; margin-top: 72px; padding-top: 48px; border-top: 1px solid #222; flex-wrap: wrap; }
        .stat-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 42px; color: white; line-height: 1; }
        .stat-num span { color: #E87722; }
        .stat-label { color: #555; font-size: 12px; margin-top: 4px; text-transform: uppercase; letter-spacing: 1px; }
        .trust-bar { background: #E87722; padding: 14px 32px; }
        .trust-bar-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 40px; flex-wrap: wrap; }
        .trust-item { color: white; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .trust-sep { color: rgba(255,255,255,.35); }
        .sec { padding: 96px 32px; }
        .sec-inner { max-width: 1280px; margin: 0 auto; }
        .sec-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #E87722; margin-bottom: 12px; }
        h2.sec-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(36px,4vw,54px); text-transform: uppercase; color: #0A0A0A; line-height: 1; margin-bottom: 16px; }
        h2.sec-title em { font-style: normal; color: #E87722; }
        .sec-desc { color: #888; font-size: 17px; font-weight: 300; line-height: 1.7; max-width: 520px; }
        .sec-hdr { display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; margin-bottom: 56px; flex-wrap: wrap; }
        .svc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: #e0e0e0; }
        @media(max-width:900px){.svc-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:600px){.svc-grid{grid-template-columns:1fr}}
        .svc-card { background: white; padding: 44px 36px; position: relative; overflow: hidden; text-decoration: none; display: block; transition: background .3s; }
        .svc-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:#E87722; transform:scaleX(0); transform-origin:left; transition:transform .3s; }
        .svc-card:hover::after { transform:scaleX(1); }
        .svc-card:hover { background: #F7F5F2; }
        .svc-icon { width:50px; height:50px; background:rgba(232,119,34,.1); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:24px; transition:background .3s; }
        .svc-card:hover .svc-icon { background:#E87722; }
        .svc-name { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:20px; text-transform:uppercase; color:#0A0A0A; margin-bottom:10px; }
        .svc-desc { color:#888; font-size:14px; line-height:1.7; font-weight:300; }
        .svc-arrow { color:#E87722; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-top:20px; display:inline-block; transition:letter-spacing .2s; }
        .svc-card:hover .svc-arrow { letter-spacing:2px; }
        .dark-sec { background:#111; padding:96px 32px; }
        .dark-grid { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        @media(max-width:900px){.dark-grid{grid-template-columns:1fr}}
        .dark-label { font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:#E87722; margin-bottom:12px; }
        h2.dark-title { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:clamp(36px,4vw,52px); text-transform:uppercase; color:white; line-height:1; margin-bottom:20px; }
        h2.dark-title em { font-style:normal; color:#E87722; }
        .dark-text { color:#777; font-size:16px; font-weight:300; line-height:1.8; margin-bottom:14px; }
        .dark-text strong { color:#bbb; font-weight:500; }
        .features { display:flex; flex-direction:column; gap:16px; }
        .feat { background:rgba(255,255,255,.04); border:1px solid #222; border-radius:12px; padding:24px 28px; display:flex; gap:18px; align-items:flex-start; transition:border-color .2s; }
        .feat:hover { border-color:rgba(232,119,34,.3); }
        .feat-icon { width:42px; height:42px; min-width:42px; background:rgba(232,119,34,.1); border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:18px; }
        .feat-title { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:16px; text-transform:uppercase; color:white; margin-bottom:4px; }
        .feat-desc { color:#666; font-size:13px; line-height:1.6; font-weight:300; }
        .reviews-sec { background:#F7F5F2; padding:96px 32px; }
        .reviews-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:56px; }
        @media(max-width:700px){.reviews-grid{grid-template-columns:1fr}}
        .review { background:white; border-radius:14px; padding:36px; border:1px solid #e5e2dd; }
        .stars { display:flex; gap:3px; margin-bottom:16px; }
        .star { color:#E87722; font-size:17px; }
        .review-text { color:#444; font-size:15px; line-height:1.8; font-weight:300; font-style:italic; margin-bottom:24px; }
        .reviewer { display:flex; align-items:center; gap:12px; }
        .avatar { width:42px; height:42px; background:#E87722; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:17px; }
        .reviewer-name { font-weight:600; font-size:14px; color:#0A0A0A; }
        .reviewer-service { font-size:12px; color:#888; margin-top:2px; }
        .cta-sec { background:#E87722; padding:72px 32px; }
        .cta-inner { max-width:1280px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; }
        h2.cta-title { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(30px,4vw,50px); text-transform:uppercase; color:white; line-height:1; }
        .cta-sub { color:rgba(255,255,255,.75); font-size:16px; font-weight:300; margin-top:8px; }
        .cta-actions { display:flex; gap:16px; align-items:center; flex-wrap:wrap; }
        .btn-white { background:white; color:#E87722; text-decoration:none; padding:14px 32px; font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:15px; text-transform:uppercase; letter-spacing:1px; border-radius:6px; display:inline-block; transition:all .2s; }
        .btn-white:hover { background:#0A0A0A; color:white; }
        .cta-phone { color:rgba(255,255,255,.85); font-size:17px; font-weight:600; font-family:'Barlow Condensed',sans-serif; text-decoration:none; }
        .cta-phone:hover { color:white; }
        @media(max-width:768px){.sec,.dark-sec,.reviews-sec,.cta-sec{padding:64px 20px}.hero-inner{padding:60px 20px}.trust-bar{padding:10px 20px}.trust-sep{display:none}.hero-stats{gap:28px}}
      `}</style>

      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow" />
        <div className="hero-inner">
          <div className="eyebrow"><div className="eyebrow-dot" /><span>Washington State Licensed General Contractor</span></div>
          <h1 className="hero-title">Service You Can Trust,<span className="accent">We Work For You.</span></h1>
          <p className="hero-sub">Lumank Inc. delivers <strong>HVAC, weatherization, deconstruction, EV charger services,</strong> and general contracting across Washington State — built on sustainability and quality.</p>
          <div className="hero-btns">
            <a href="/contact" className="btn-orange">Get a Free Estimate</a>
            <a href="/services" className="btn-ghost">View Our Services</a>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">5<span>+</span></div><div className="stat-label">Years in Business</div></div>
            <div><div className="stat-num">200<span>+</span></div><div className="stat-label">Projects Completed</div></div>
            <div><div className="stat-num">100<span>%</span></div><div className="stat-label">Licensed & Insured</div></div>
            <div><div className="stat-num">WA</div><div className="stat-label">State Certified</div></div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">✓ WA State Licensed</div>
          <div className="trust-sep">·</div>
          <div className="trust-item">✓ Bonded & Insured</div>
          <div className="trust-sep">·</div>
          <div className="trust-item">✓ Mitsubishi Certified HVAC</div>
          <div className="trust-sep">·</div>
          <div className="trust-item">✓ Port of Seattle Partner</div>
          <div className="trust-sep">·</div>
          <div className="trust-item">✓ Women-Led Business</div>
        </div>
      </div>

      <section className="sec" style={{background:'white'}}>
        <div className="sec-inner">
          <div className="sec-hdr">
            <div>
              <div className="sec-label">What We Do</div>
              <h2 className="sec-title">Our <em>Services</em></h2>
              <p className="sec-desc">Comprehensive contracting solutions for residential, commercial, and government clients across Washington State.</p>
            </div>
            <a href="/services" className="btn-orange" style={{whiteSpace:'nowrap'}}>All Services →</a>
          </div>
          <div className="svc-grid">
            {[
              {icon:'🌡️',name:'HVAC',desc:'Mitsubishi-certified heat pump installation, maintenance, and repair. Energy-saving solutions for homes and businesses.',href:'/services/hvac'},
              {icon:'🏗️',name:'General Contracting',desc:'Full-scope construction from concept to completion. Trusted partner for the Port of Seattle and major commercial clients.',href:'/services'},
              {icon:'🏠',name:'Weatherization',desc:'Grant-funded weatherization: insulation, air sealing, and HVAC optimization to cut energy costs and improve comfort.',href:'/weatherization'},
              {icon:'♻️',name:'Deconstruction',desc:'Award-winning sustainable building removal. Maximize material reuse and minimize environmental impact.',href:'/services'},
              {icon:'⚡',name:'EV Charger Services',desc:'Maintenance and repair of EV charging stations for the City of Seattle. Supporting clean energy transportation.',href:'/services'},
              {icon:'🔨',name:'Specialty Contracting',desc:'Customized solutions for unique construction challenges. Innovative technical expertise for any project.',href:'/services'},
            ].map(s => (
              <a key={s.name} href={s.href} className="svc-card">
                <div className="svc-icon">{s.icon}</div>
                <div className="svc-name">{s.name}</div>
                <div className="svc-desc">{s.desc}</div>
                <div className="svc-arrow">Learn More →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-sec">
        <div className="dark-grid">
          <div>
            <div className="dark-label">Who We Are</div>
            <h2 className="dark-title">Sustainable Spaces,<br /><em>Built to Last</em></h2>
            <p className="dark-text">Lumank isn't your typical general contractor. We're a <strong>forward-thinking, women-led company</strong> dedicated to creating comfortable, sustainable spaces that are kind to the environment.</p>
            <p className="dark-text">Established in 2019 in Redmond, Washington, we've grown rapidly through innovative projects and exceptional service — from Mitsubishi heat pump installations to <strong>award-winning deconstruction projects</strong> for the City of Seattle.</p>
            <a href="/about" className="btn-orange" style={{marginTop:'24px',display:'inline-block'}}>Our Story →</a>
          </div>
          <div className="features">
            {[
              {icon:'🌱',title:'Sustainability First',desc:'Every project considers environmental impact. We use energy-efficient technologies and sustainable practices as standard.'},
              {icon:'🏆',title:'Proven Track Record',desc:'Award-winning deconstruction, Port of Seattle partnerships, and City of Seattle contracts demonstrate our excellence.'},
              {icon:'🔧',title:'Expert Technicians',desc:'Mitsubishi-certified HVAC specialists, licensed electricians, and experienced general contractors on every job.'},
              {icon:'📋',title:'Full Compliance',desc:'Fully licensed, bonded, and insured. Complete documentation for government and commercial contracts.'},
            ].map(f => (
              <div key={f.title} className="feat">
                <div className="feat-icon">{f.icon}</div>
                <div><div className="feat-title">{f.title}</div><div className="feat-desc">{f.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-sec">
        <div className="sec-inner">
          <div className="sec-label">Customer Reviews</div>
          <h2 className="sec-title">What Our <em>Clients</em> Say</h2>
          <div className="reviews-grid">
            {[
              {text:'Lumank Inc did an excellent job installing a Heat Pump at my house. Their team was professional, and they paid attention to every detail. I highly recommend them to anyone looking for quality workmanship.',name:'Wayne Fields',service:'Heat Pump Installation'},
              {text:'Lumank Inc installed a Mitsubishi Heat Pump at my home and I am extremely satisfied with the results. They were knowledgeable and efficient, and the work was completed in a timely manner. I would definitely recommend them.',name:'Joshy',service:'Mitsubishi Heat Pump'},
              {text:'Outstanding professionalism and quality of work. The team managed our weatherization project with precision and delivered on time. Our energy bills have dropped significantly since the upgrade.',name:'Sarah M.',service:'Weatherization Services'},
              {text:'Exceptional contracting team. They handled our commercial project with full compliance documentation and stayed within budget. Will be using Lumank for all future projects.',name:'Marcus T.',service:'Commercial Contracting'},
            ].map(r => (
              <div key={r.name} className="review">
                <div className="stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star">{s}</span>)}</div>
                <p className="review-text">"{r.text}"</p>
                <div className="reviewer">
                  <div className="avatar">{r.name[0]}</div>
                  <div><div className="reviewer-name">{r.name}</div><div className="reviewer-service">{r.service}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="cta-inner">
          <div>
            <h2 className="cta-title">Ready to Start<br />Your Project?</h2>
            <p className="cta-sub">Free estimates. Licensed & insured. Washington State's trusted contractor.</p>
          </div>
          <div className="cta-actions">
            <a href="/contact" className="btn-white">Request a Free Estimate</a>
            <a href="tel:8444586265" className="cta-phone">📞 1(844) 458-6265</a>
          </div>
        </div>
      </section>
    </>
  );
}