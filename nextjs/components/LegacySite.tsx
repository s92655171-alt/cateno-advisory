"use client";
import { useEffect } from "react";

const scripts = ["/js/config.js", "/js/data.js", "/js/i18n.js", "/js/state.js", "/js/pages.js", "/js/content-loader.js"];
export default function LegacySite() {
 useEffect(() => {
  let cancelled = false;
  const load = async () => {
   for (const src of scripts) {
    if (cancelled || document.querySelector(`script[data-cateno-src="${src}"]`)) continue;
    await new Promise<void>((resolve, reject) => {
     const el = document.createElement("script"); el.src = src; el.async = false; el.dataset.catenoSrc = src;
     el.onload = () => resolve(); el.onerror = () => reject(new Error(`Could not load ${src}`)); document.body.appendChild(el);
    });
   }
  };
  load().catch((err) => console.error("CATENO scripts failed to load", err));
  return () => { cancelled = true; };
 }, []);
 return <>
  <a className="skip" href="#main">Skip to content</a>
  <header><div className="w"><a className="logo" href="#home" aria-label="CATENO ADVISORY — Home"><img src="/assets/cateno-logo.svg" alt="CATENO ADVISORY" /></a><button className="burger" id="bg" aria-label="Menu" aria-expanded="false" aria-controls="nv">☰</button><nav id="nv" aria-label="Main" /></div></header>
  <main id="main" tabIndex={-1} />
  <footer><div className="w f" id="ft" /></footer>
 </>;
}
