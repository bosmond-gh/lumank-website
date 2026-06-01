import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@300;400;500&display=swap');
        .ftr { background: #0A0A0A; padding: 80px 32px 40px; border-top: 1px solid #1a1a1a; }
        .ftr-inner { max-width: 1280px; margin: 0 auto; }
        .ftr-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 64px; margin-bottom: 64px; }
        .ftr-brand { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 24px; color: white; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px; }
        .ftr-brand em { color: #E87722; font-style: normal; }
        .ftr-tagline { color: #444; font-family: 'Barlow', sans-serif; font-size: 14px; line-height: 1.7; font-weight: 300; max-width: 240px; margin-bottom: 20px; }
        .ftr-contact { color: #555; font-family: 'Barlow', sans-serif; font-size: 13px; line-height: 1.9; }
        .ftr-contact a { color: #E87722; text-decoration: none; }
        .ftr-contact a:hover { color: #f9a055; }
        .ftr-col-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #444; margin-bottom: 18px; }
        .ftr-links { display: flex; flex-direction: column; gap: 10px; }
        .ftr-links a { color: #555; text-decoration: none; font-family: 'Barlow', sans-serif; font-size: 14px; font-weight: 300; transition: color 0.2s; }
        .ftr-links a:hover { color: #E87722; }
        .ftr-bottom { border-top: 1px solid #141414; padding-top: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .ftr-copy { color: #333; font-family: 'Barlow', sans-serif; font-size: 13px; }
        .ftr-badge { background: rgba(232,119,34,0.12); border: 1px solid rgba(232,119,34,0.2); border-radius: 100px; padding: 4px 12px; color: #E87722; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
        @media(max-width: 900px) { .ftr-top { grid-template-columns: 1fr 1fr; gap: 40px; } .ftr { padding: 64px 20px 32px; } }
        @media(max-width: 600px) { .ftr-top { grid-template-columns: 1fr; } }
      `}</style>
      <footer className="ftr">
        <div className="ftr-inner">
          <div className="ftr-top">
            <div>
              <div className="ftr-brand">LUMANK<em> INC.</em></div>
              <div className="ftr-tagline">Sustainable spaces, built to last. Washington State’s trusted general contractor since 2019.</div>
              <div className="ftr-contact">
                7345 164th AVE NE STE 145488<br />
                Redmond, WA 98052<br />
                <a href="tel:8444586265">1(844) 458-6265</a><br />
                <a href="mailto:info@lumank.com">info@lumank.com</a>
              </div>
            </div>
            <div>
              <div className="ftr-col-title">Services</div>
              <div className="ftr-links">
                <Link href="/services/hvac">HVAC</Link>
                <Link href="/weatherization">Weatherization</Link>
                <Link href="/services">General Contracting</Link>
                <Link href="/services">Deconstruction</Link>
                <Link href="/services">EV Charger Services</Link>
                <Link href="/services">Specialty Contracting</Link>
              </div>
            </div>
            <div>
              <div className="ftr-col-title">Company</div>
              <div className="ftr-links">
                <Link href="/about">About Us</Link>
                <Link href="/projects">Our Projects</Link>
                <Link href="/government-contracting">Government</Link>
                <Link href="/contact">Contact</Link>
                <a href="http://www.lumankhvac.com" target="_blank" rel="noopener">HVACSite ↗</a>
              </div>
            </div>
            <div>
              <div className="ftr-col-title">Contact</div>
              <div className="ftr-links">
                <a href="tel:8444586265">1(844) 458-6265</a>
                <a href="tel:8772513888">877-251-3888</a>
                <Link href="/contact">Request a Quote</Link>
              </div>
            </div>
          </div>
          <div className="ftr-bottom">
            <div className="ftr-copy">© {new Date().getFullYear()} Lumank Inc. All rights reserved. WA State Licensed General Contractor.</div>
            <div className="ftr-badge">Women-Led Business</div>
          </div>
        </div>
      </footer>
    </>
  );
}
