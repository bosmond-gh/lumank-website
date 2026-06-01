export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --orange: #E87722;
          --orange-dark: #C9621A;
          --black: #0A0A0A;
          --dark: #111111;
          --dark2: #1C1C1C;
          --gray: #888;
          --light: #F7F5F2;
          --white: #FFFFFF;
        }
        body { font-family: 'Barlow', sans-serif; background: var(--white); color: var(--black); }
        .font-display { font-family: 'Barlow Condensed', sans-serif; }

        /* HERO */
        .hero { background: var(--black); min-height: 92vh; display: flex; align-items: center; position: relative; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; }
        .hero-bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(232,119,34,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.04) 1px, transparent 1px); background-size: 60px 60px; }
        .hero-bg-glow { position: absolute; top: -200px; right: -100px; width: 700px; height: 700px; background: radial-gradient(circle, rgba(232,119,34,0.12) 0%, transparent 70%); }
        .hero-inner { max-width: 1280px; margin: 0 auto; padding: 80px 32px; width: 100%; position: relative; z-index: 1; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; background: rgba(232,119,34,0.12); border: 1px solid rgba(232,119,34,0.3); border-radius: 100px; padding: 6px 16px; margin-bottom: 32px; }
        .hero-eyebrow span { color: var(--orange); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; }
        .hero-eyebrow-dot { width: 6px; height: 6px; background: var(--orange); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% {opacity:1;} 50% {opacity:0.4;} }
        .hero-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(64px, 8vw,110px); line-height: 0.92; color: white; text-transform: uppercase; letter-spacing: -1px; margin-bottom: 28px; }
        .hero-title .accent { color: var(--orange); display: block; }
        .hero-sub { color: #999; font-size: 18px; font-weight: 300; line-height: 1.7; max-width: 520px; margin-bottom: 48px; }
        .hero-sub strong { color: #ddd; font-weight: 500; }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-primary { background: var(--orange); color: white; text-decoration: none; padding: 16px 36px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-radius: 6px; transition: all 0.2s; display: inline-block; }
        .btn-primary:hover { background: var(--orange-dark); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(232,119,34,0.4); }
        .btn-outline { border: 1px solid #333; color: #ccc; text-decoration: none; padding: 16px 36px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-radius: 6px; transition: all 0.2s; display: inline-block; }
        .btn-outline:hover { border-color: #666; color: white; }
        .hero-stats { display: flex; gap: 48px; margin-top: 72px; padding-top: 48px; border-top: 1px solid #222; }
        .hero-stat-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 42px; color: white; line-height: 1; }
        .hero-stat-num span { color: var(--orange); }
        .hero-stat-label { color: #666; font-size: 13px; margin-top: 4px; text-transform: uppercase; letter-spacing: 1px; }

        /* TRUST BAR */
        .trust-bar { background: var(--orange); padding: 16px 32px; }
        .trust-bar-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 48px; flex-wrap: wrap; }
        .trust-item { display: flex; align-items: center; gap: 10px; color: white; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .trust-icon { font-size: 18px; }
        .trust-sep { color: rgba(255,255,255,0.4); font-size: 20px; }

        /* SERVICES */
        .section { padding: 100px 32px; }
        .section-inner { max-width: 1280px; margin: 0 auto; }
        .section-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--orange); margin-bottom: 16px; }
        .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(36px, 4vw, 54px); text-transform: uppercase; color: var(--black); line-height: 1; margin-bottom: 20px; }
        .section-title em { font-style: normal; color: var(--orange); }
        .section-desc { color: var(--gray); font-size: 17px; font-weight: 300; line-height: 1.7; max-width: 540px; }
        .section-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 48px; margin-bottom: 64px; flex-wrap: wrap; }

        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: #eee; }
        @media(max-width: 900px) { .services-grid { grid-template-columns: 1fr 1fr; } }
        @media(max-width: 600px) { .services-grid { grid-template-columns: 1fr; } }
        .service-card { background: white; padding: 48px 40px; transition: all 0.3s; position: relative; overflow: hidden; cursor: pointer; }
        .service-card::before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--orange); transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card:hover { background: #F7F5F2; }
        .service-icon { width: 52px; height: 52px; background: rgba(232,119,34,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 28px; transition: all 0.3s; }
        .service-card:hover .service-icon { background: var(--orange); }
        .service-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 22px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; color: var(--black); }
        .service-desc { color: var(--gray); font-size: 14px; line-height: 1.7; font-weight: 300; }
        .service-arrow { display: inline-flex; align-items: center; gap: 6px; color: var(--orange); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 24px; text-decoration: none; transition: gap 0.2s; }
        .service-card:hover .service-arrow { gap: 10px; }

        /* WHY US */
        .why-section { background: var(--dark); padding: 100px 32px; }
        .why-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        @media(max-width: 900px) { .why-inner { grid-template-columns: 1fr; } }
        .why-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--orange); margin-bottom: 16px; }
        .why-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(36px, 4vw, 52px); text-transform: uppercase; color: white; line-height: 1; margin-bottom: 24px; }
        .why-title em { font-style: normal; color: var(--orange); }
        .why-text { color: #888; font-size: 16px; font-weight: 300; line-height: 1.8; margin-bottom: 16px; }
        .why-text strong { color: #ccc; font-weight: 500; }
        .why-cta { display: inline-block; margin-top: 24px; }
        .why-features { display: flex; flex-direction: column; gap: 20px; }
        .why-feature { background: rgba(255,255,255,0.04); border: 1px solid #2a2a2a; border-radius: 12px; padding: 28px 32px; display: flex; gap: 20px; align-items: flex-start; transition: border-color 0.2s; }
        .why-feature:hover { border-color: rgba(232,119,34,0.3); }
        .why-feature-icon { width: 44px; height: 44px; min-width: 44px; background: rgba(232,119,34,0.12); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
        .why-feature-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 17px; text-transform: uppercase; letter-spacing: 0.5px; color: white; margin-bottom: 6px; }
        .why-feature-desc { color: #777; font-size: 14px; line-height: 1.6; font-weight: 300; }

        /* REVIEWS */
        .reviews-section { background: var(--light); padding: 100px 32px; }
        .reviews-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 64px; }
        @media(max-width: 700px) { .reviews-grid { grid-template-columns: 1fr; } }
        .review-card { background: white; border-radius: 16px; padding: 40px; border: 1px solid #e8e5e0; }
        .review-stars { display: flex; gap: 4px; margin-bottom: 20px; }
        .review-star { color: var(--orange); font-size: 18px; }
        .review-text { color: #444; font-size: 16px; line-height: 1.8; font-weight: 300; font-style: italic; margin-bottom: 28px; }
        .review-author { display: flex; align-items: center; gap: 14px; }
        .review-avatar { width: 44px; height: 44px; background: var(--orange); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 18px; }
        .review-name { font-weight: 600; font-size: 15px; color: var(--black); }
        .review-service { font-size: 13px; color: var(--gray); margin-top: 2px; }

        /* CTA BAND */
        .cta-band { background: var(--orange); padding: 80px 32px; }
        .cta-band-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 48px; flex-wrap: wrap; }
        .cta-band-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(32px, 4vw, 52px); text-transform: uppercase; color: white; line-height: 1; }
        .cta-band-sub { color: rgba(255,255,255,0.75); font-size: 17px; font-weight: 300; margin-top: 8px; }
        .cta-band-actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
        .btn-white { background: white; color: var(--orange); text-decoration: none; padding: 16px 36px; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-radius: 6px; transition: all 0.2s; display: inline-block; }
        .btn-white:hover { background: var(--black); color: white; }
        .cta-phone { color: rgba(255,255,255,0.8); font-size: 18px; font-weight: 600; font-family: 'Barlow Condensed', sans-serif; text-decoration: none; }
        .cta-phone:hover { color: white; }

        @media(max-width: 768px) {
          .hero-stats { gap: 32px; flex-wrap: wrap; }
          .section { padding: 64px 20px; }
          .why-section, .reviews-section, .cta-band { padding: 64px 20px; }
          .trust-bar { padding: 12px 20px; }
          .trust-bar-inner { gap: 20px; }
          .trust-sep { display: none; }
        }
      `}</style>
