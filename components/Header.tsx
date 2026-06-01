"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@300;400;500;600&display=swap');
        .hdr { background: #0A0A0A; position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid #1a1a1a; }
        .hdr-inner { max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; align-items: center; justify-content: space-between; height: 68px; }
        .hdr-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .hdr-mark { width: 36px; height: 36px; background: #E87722; border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .hdr-mark span { color: white; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 18px; }
        .hdr-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 20px; color: white; letter-spacing: 1px; text-transform: uppercase; }
        .hdr-name em { color: #E87722; font-style: normal; }
        .hdr-right { display: flex; align-items: center; gap: 4px; }
        .hdr-link { color: #999; text-decoration: none; font-family: 'Barlow', sans-serif; font-size: 14px; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: all 0.2s; white-space: nowrap; }
        .hdr-link:hover { color: white; background: #1a1a1a; }
        .hdr-phone { color: #E87722; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 15px; padding: 8px 12px; white-space: nowrap; }
        .hdr-cta { background: #E87722; color: white !important; padding: 9px 20px !important; border-radius: 6px; font-weight: 600; font-size: 14px; margin-left: 8px; }
        .hdr-cta:hover { background: #C9621A !important; }
        .hdr-menu-btn { display: none; background: none; border: 1px solid #333; border-radius: 6px; padding: 8px 10px; cursor: pointer; flex-direction: column; gap: 4px; }
        .hdr-menu-btn span { display: block; width: 20px; height: 2px; background: #999; border-radius: 2px; }
        .hdr-mobile { display: none; background: #0f0f0f; border-top: 1px solid #1a1a1a; padding: 16px 20px; flex-direction: column; gap: 4px; }
        .hdr-mobile.open { display: flex; }
        .hdr-mobile a { color: #999; text-decoration: none; font-family: 'Barlow', sans-serif; font-size: 15px; padding: 12px 16px; border-radius: 6px; }
        .hdr-mobile a:hover { color: white; background: #1a1a1a; }
        @media(max-width: 900px) {
          .hdr-right { display: none; }
          .hdr-menu-btn { display: flex; }
          .hdr-inner { padding: 0 20px; }
        }
      `}</style>
      <header className="hdr">
        <div className="hdr-inner">
          <Link href="/" className="hdr-logo">
            <div className="hdr-mark"><span>L</span></div>
            <span className="hdr-name">LUMANK<em> INC.</em></span>
          </Link>
          <nav className="hdr-right">
            <Link href="/services" className="hdr-link">Services</Link>
            <Link href="/weatherization" className="hdr-link">Weatherization</Link>
            <Link href="/government-contracting" className="hdr-link">Government</Link>
            <Link href="/projects" className="hdr-link">Projects</Link>
            <Link href="/about" className="hdr-link">About</Link>
            <a href="tel:8444586265" className="hdr-link hdr-phone">1(844) 458-6265</a>
            <Link href="/contact" className="hdr-link hdr-cta">Request a Quote</Link>
          </nav>
          <button className="hdr-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
        <nav className={`hdr-mobile ${open ? 'open' : ''}`}>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/weatherization" onClick={() => setOpen(false)}>Weatherization</Link>
          <Link href="/government-contracting" onClick={() => setOpen(false)}>Government Contracting</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{color:'#E87722',fontWeight:600}}>Request a Quote</Link>
          <a href="tel:8444586265" style={{color:'#E87722'}}>📎 1(844) 458-6265</a>
        </nav>
      </header>
    </>
  );
}
