"use client";
import { useState } from "react";

export function Printer() {
  const [run, setRun] = useState(0);
  return <div className="printer-wrap">
    <div className="printer-stage" key={run} role="img" aria-label="Animacija printera koji ispisuje naziv Kopirnica Bezistan na papiru">
      <div className="printer-shadow" />
      <div className="printer">
        <div className="printer-top"><span className="top-seam" /></div>
        <div className="printer-front">
          <div className="front-highlight" />
          <div className="printer-display"><span className="display-led" /> READY <span className="display-lines">▰ ▰ ▰</span></div>
          <div className="printer-slot"><span /></div>
          <div className="paper-mask"><div className="paper"><div className="paper-content"><span className="paper-kicker">SARAJEVO · 71000</span><span className="paper-rule" /><span className="paper-title">KOPIRNICA<br/><strong>BEZISTAN.</strong></span><span className="paper-foot">IDEJA. PAPIR. OTISAK.</span></div></div></div>
          <span className="front-lip" />
        </div>
        <div className="printer-side" />
      </div>
      <div className="floor-line" />
    </div>
    <button className="replay" type="button" onClick={() => setRun(v => v + 1)} aria-label="Ponovi animaciju printera"><span aria-hidden="true">↻</span> PONOVI ISPIS</button>
  </div>;
}
