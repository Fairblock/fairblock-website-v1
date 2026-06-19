import { useState, useEffect } from "react";

// ─── Unique SVG Graphics ──────────────────────────────────────────────────────

const G = {
  grid: (
    <>
      <defs>
        <pattern id="g" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(0,0,0,0.045)" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="560" height="360" fill="url(#g)" />
    </>
  ),
};

/** 01 — Payment ledger with masked amounts */
const PaymentsGraphic = () => (
  <svg viewBox="0 0 560 360" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {G.grid}
    <rect x="1" y="1" width="558" height="358" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    {/* Header */}
    <rect x="0" y="0" width="560" height="38" fill="rgba(0,0,0,0.025)" />
    <circle cx="18" cy="19" r="4" fill="#58BDF6" className="hero-blink-dot" style={{ transformOrigin: "18px 19px" }} />
    <text x="30" y="23" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4" letterSpacing="1.5">PAYMENT RAIL · ENCRYPTED</text>
    <text x="510" y="23" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4" textAnchor="end" letterSpacing="1">FAIRBLOCK</text>
    {/* Column headers */}
    {[["40", "SENDER"], ["190", "AMOUNT"], ["330", "RECIPIENT"], ["480", "STATUS"]].map(([x, l]) => (
      <text key={l} x={x} y="62" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1.2">{l}</text>
    ))}
    <line x1="20" y1="68" x2="540" y2="68" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    {/* Row 1 — plaintext */}
    <text x="40" y="96" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">0xA3F2…E1</text>
    <text x="190" y="96" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">$1,284.50</text>
    <text x="330" y="96" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">MERCHANT</text>
    <rect x="478" y="84" width="44" height="14" fill="rgba(88,189,246,0.12)" stroke="#58BDF6" strokeWidth="0.6" />
    <text x="500" y="95" fontFamily="JetBrains Mono,monospace" fontSize="7" fill="#58BDF6" textAnchor="middle">SENT ✓</text>
    {/* Row 2 — encrypted */}
    <line x1="20" y1="106" x2="540" y2="106" stroke="rgba(0,0,0,0.04)" />
    <text x="40" y="130" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">0xE91B…4C</text>
    <rect x="188" y="118" width="84" height="16" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="230" y="130" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="middle">ENCRYPTED</text>
    <text x="330" y="130" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">NEOBANK</text>
    <text x="480" y="130" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">PENDING</text>
    {/* Row 3 — encrypted */}
    <line x1="20" y1="140" x2="540" y2="140" stroke="rgba(0,0,0,0.04)" />
    <text x="40" y="164" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">0xC72D…8F</text>
    <rect x="188" y="152" width="84" height="16" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="230" y="164" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="middle">ENCRYPTED</text>
    <text x="330" y="164" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">EXCHANGE</text>
    <text x="480" y="164" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">PENDING</text>
    {/* Row 4 — encrypted */}
    <line x1="20" y1="174" x2="540" y2="174" stroke="rgba(0,0,0,0.04)" />
    <text x="40" y="198" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">0xF80A…D3</text>
    <rect x="188" y="186" width="84" height="16" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="230" y="198" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="middle">ENCRYPTED</text>
    <text x="330" y="198" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">AI AGENTS</text>
    <text x="480" y="198" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">PENDING</text>
    {/* Animated beam across row 2 */}
    <path className="hero-beam-p1" d="M 20 125 H 540" fill="none" stroke="#58BDF6" strokeWidth="1.5" strokeLinecap="square" />
    {/* Footer stats */}
    <line x1="20" y1="280" x2="540" y2="280" stroke="rgba(0,0,0,0.08)" />
    <text x="40" y="300" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4" letterSpacing="0.5">4 TRANSACTIONS ENCRYPTED · END-TO-END · COMPLIANT</text>
    <rect x="440" y="290" width="82" height="16" fill="#141210" />
    <text x="481" y="302" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#FBF9F3" textAnchor="middle" letterSpacing="1">FAIRBLOCK</text>
  </svg>
);

/** 02 — Asset portfolio with encrypted allocations */
const AssetsGraphic = () => {
  const rows = [
    { label: "US TREASURY BOND", pct: 0.72, tag: "BOND" },
    { label: "EQUITY FUND A",    pct: 0.55, tag: "EQUITY" },
    { label: "REAL ESTATE",      pct: 0.38, tag: "RWA" },
    { label: "PRIVATE CREDIT",   pct: 0.61, tag: "CREDIT" },
    { label: "STRUCTURED NOTE",  pct: 0.44, tag: "NOTE" },
  ];
  return (
    <svg viewBox="0 0 560 360" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
      {G.grid}
      <rect x="1" y="1" width="558" height="358" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <rect x="0" y="0" width="560" height="38" fill="rgba(0,0,0,0.025)" />
      <text x="20" y="23" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4" letterSpacing="1.5">ASSET PORTFOLIO · HOLDINGS ENCRYPTED</text>
      <text x="540" y="23" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4" textAnchor="end">AUM: $•••,•••,•••</text>
      {/* Column labels */}
      <text x="20" y="60" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1">ASSET</text>
      <text x="260" y="60" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1">ALLOCATION</text>
      <text x="490" y="60" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1" textAnchor="end">WEIGHT</text>
      <line x1="20" y1="66" x2="540" y2="66" stroke="rgba(0,0,0,0.08)" />
      {rows.map((r, i) => {
        const y = 90 + i * 44;
        const bw = 180;
        return (
          <g key={r.label}>
            <rect x="18" y={y - 1} width="4" height="18" fill="#58BDF6" opacity="0.6" />
            <text x="30" y={y + 12} fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#141210">{r.label}</text>
            <rect x="258" y={y + 2} width={bw} height="12" fill="rgba(0,0,0,0.05)" />
            <rect x="258" y={y + 2} width={bw * r.pct} height="12" fill="#58BDF6" opacity="0.35" />
            <rect x="258" y={y + 2} width={bw * r.pct} height="12" fill="none" stroke="#58BDF6" strokeWidth="0.5" />
            <rect x="448" y={y} width="46" height="16" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.6" />
            <text x="471" y={y + 11} fontFamily="JetBrains Mono,monospace" fontSize="7" fill="#58BDF6" textAnchor="middle">••.•%</text>
            <line x1="20" y1={y + 22} x2="540" y2={y + 22} stroke="rgba(0,0,0,0.04)" />
          </g>
        );
      })}
      <rect x="20" y="316" width="520" height="28" fill="rgba(88,189,246,0.06)" stroke="#58BDF6" strokeWidth="0.7" />
      <text x="40" y="334" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" letterSpacing="0.8">TOTAL AUM</text>
      <text x="200" y="334" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#141210">$•••,•••,•••</text>
      <text x="400" y="334" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="end">PROTECTED BY FAIRBLOCK ✓</text>
    </svg>
  );
};

/** 03 — Agentic API terminal */
const AgenticGraphic = () => (
  <svg viewBox="0 0 560 360" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {G.grid}
    <rect x="1" y="1" width="558" height="358" fill="rgba(20,18,16,0.97)" stroke="rgba(88,189,246,0.2)" strokeWidth="1" />
    <rect x="0" y="0" width="560" height="36" fill="rgba(88,189,246,0.06)" />
    {["#FF5F57","#FFBD2E","#28C840"].map((c, i) => (
      <circle key={c} cx={16 + i * 18} cy="18" r="5" fill={c} opacity="0.7" />
    ))}
    <text x="220" y="22" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="rgba(88,189,246,0.6)" textAnchor="middle" letterSpacing="1.5">FAIRBLOCK AGENTIC API</text>
    {/* Request block */}
    <text x="20" y="60" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#58BDF6">POST /v1/agent/execute</text>
    <text x="20" y="80" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">{"{"}</text>
    {[
      ['  "agent_id"',  '"0xA3F2…E1"',       "#FBF9F3"],
      ['  "action"',   '"SWAP"',              "#FBF9F3"],
      ['  "amount"',   '[ENCRYPTED]',         "#58BDF6"],
      ['  "strategy"', '[ENCRYPTED]',         "#58BDF6"],
      ['  "target"',   '[ENCRYPTED]',         "#58BDF6"],
      ['  "deadline"', '[ENCRYPTED]',         "#58BDF6"],
    ].map(([k, v, vc], i) => (
      <g key={k}>
        <text x="20" y={100 + i * 18} fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">{k}:</text>
        <text x="160" y={100 + i * 18} fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill={vc}>{v}</text>
      </g>
    ))}
    <text x="20" y="212" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">{"}"}</text>
    {/* Divider */}
    <line x1="20" y1="226" x2="540" y2="226" stroke="rgba(88,189,246,0.15)" />
    {/* Response block */}
    <text x="20" y="248" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#28C840">200 OK</text>
    <text x="20" y="266" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">{"{"}</text>
    <text x="20" y="284" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">{"  \"proof\":"}</text>
    <text x="110" y="284" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#FBF9F3">"0x9f2d4a…"</text>
    <text x="20" y="302" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">{"  \"status\":"}</text>
    <text x="118" y="302" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#58BDF6">"EXECUTED"</text>
    <text x="20" y="320" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">{"}"}</text>
    {/* Cursor */}
    <rect x="20" y="333" width="8" height="12" fill="#58BDF6" opacity="0.8" className="hero-blink-dot" style={{ transformOrigin: "24px 339px", borderRadius: 0 }} />
  </svg>
);

/** 04 — Token issuance allocation */
const TokenGraphic = () => {
  const rows = [
    { label: "TEAM",        w: 200 },
    { label: "INVESTORS",   w: 160 },
    { label: "COMMUNITY",   w: 220 },
    { label: "TREASURY",    w: 140 },
    { label: "LIQUIDITY",   w: 100 },
  ];
  return (
    <svg viewBox="0 0 560 360" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
      {G.grid}
      <rect x="1" y="1" width="558" height="358" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <rect x="0" y="0" width="560" height="38" fill="rgba(0,0,0,0.025)" />
      <text x="20" y="23" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4" letterSpacing="1.5">TOKEN ISSUANCE · ALLOCATION ENCRYPTED</text>
      <rect x="448" y="12" width="92" height="16" fill="#141210" />
      <text x="494" y="24" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#FBF9F3" textAnchor="middle" letterSpacing="1">PRE-TGE LOCKED</text>
      <text x="20" y="58" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1">RECIPIENT</text>
      <text x="200" y="58" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1">ALLOCATION BAR</text>
      <text x="460" y="58" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1" textAnchor="end">% SHARE</text>
      <line x1="20" y1="64" x2="540" y2="64" stroke="rgba(0,0,0,0.08)" />
      {rows.map((r, i) => {
        const y = 88 + i * 42;
        return (
          <g key={r.label}>
            <text x="20" y={y + 12} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{r.label}</text>
            <rect x="198" y={y} width={r.w} height="18" fill="#58BDF6" opacity="0.18" />
            <rect x="198" y={y} width={r.w} height="18" fill="none" stroke="#58BDF6" strokeWidth="0.7" />
            {[...Array(Math.floor(r.w / 10))].map((_, j) => (
              <rect key={j} x={198 + j * 10 + 1} y={y + 1} width="8" height="16" fill="#58BDF6" opacity="0.12" />
            ))}
            <rect x="440" y={y} width="60" height="18" fill="rgba(88,189,246,0.06)" stroke="#58BDF6" strokeWidth="0.6" />
            <text x="470" y={y + 12} fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">••.•%</text>
            <line x1="20" y1={y + 26} x2="540" y2={y + 26} stroke="rgba(0,0,0,0.04)" />
          </g>
        );
      })}
      <rect x="20" y="306" width="520" height="34" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" />
      <text x="40" y="328" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">TGE DATE: [ENCRYPTED]</text>
      <text x="230" y="328" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">VESTING: [ENCRYPTED]</text>
      <text x="430" y="328" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6">ANTI-FRONTRUN ✓</text>
    </svg>
  );
};

/** 05 — Lending dashboard */
const LendingGraphic = () => (
  <svg viewBox="0 0 560 360" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {G.grid}
    <rect x="1" y="1" width="558" height="358" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    <rect x="0" y="0" width="560" height="38" fill="rgba(0,0,0,0.025)" />
    <text x="20" y="23" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4" letterSpacing="1.5">PRIVATE LENDING · CONFIDENTIAL ASSESSMENT</text>
    {/* Left card — credit */}
    <rect x="20" y="52" width="240" height="130" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
    <text x="36" y="74" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1.2">CREDIT ASSESSMENT</text>
    <line x1="36" y1="80" x2="244" y2="80" stroke="rgba(0,0,0,0.06)" />
    <text x="36" y="102" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#141210">Score:</text>
    <rect x="100" y="90" width="120" height="18" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="160" y="103" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">ENCRYPTED</text>
    <text x="36" y="130" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#141210">History:</text>
    <rect x="100" y="118" width="120" height="18" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="160" y="131" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">ENCRYPTED</text>
    <text x="36" y="158" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#141210">Risk tier:</text>
    <rect x="106" y="146" width="120" height="18" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="166" y="159" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">ENCRYPTED</text>
    {/* Right card — collateral */}
    <rect x="300" y="52" width="240" height="130" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
    <text x="316" y="74" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1.2">COLLATERAL POSITION</text>
    <line x1="316" y1="80" x2="524" y2="80" stroke="rgba(0,0,0,0.06)" />
    <text x="316" y="102" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#141210">Amount:</text>
    <rect x="382" y="90" width="120" height="18" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="442" y="103" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">$•••,•••</text>
    <text x="316" y="130" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#141210">Asset:</text>
    <rect x="364" y="118" width="120" height="18" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="424" y="131" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">ENCRYPTED</text>
    <text x="316" y="158" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#141210">LTV:</text>
    <rect x="350" y="146" width="120" height="18" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="410" y="159" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">••.•%</text>
    {/* Loan terms bottom */}
    <rect x="20" y="200" width="520" height="100" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
    <text x="36" y="222" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1.2">LOAN TERMS</text>
    <line x1="36" y1="228" x2="524" y2="228" stroke="rgba(0,0,0,0.06)" />
    {[["RATE", "$•.••%"], ["TERM", "••mo"], ["AMOUNT", "$•••,•••"], ["REPAYMENT", "ENCRYPTED"]].map(([k, v], i) => (
      <g key={k}>
        <text x={36 + i * 128} y="252" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4">{k}</text>
        <text x={36 + i * 128} y="272" fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#141210">{v}</text>
      </g>
    ))}
    <rect x="380" y="282" width="140" height="16" fill="#141210" />
    <text x="450" y="294" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#FBF9F3" textAnchor="middle" letterSpacing="1">APPROVED ✓</text>
    {/* Animated beam */}
    <path className="hero-beam-p3" d="M 20 198 H 540" fill="none" stroke="#58BDF6" strokeWidth="1" strokeLinecap="square" />
    {/* Footer */}
    <text x="20" y="326" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">LENDER CANNOT SEE BORROWER IDENTITY OR POSITION SIZE</text>
  </svg>
);

/** 06 — Payroll ledger */
const PayrollGraphic = () => {
  const rows = [
    { id: "EMP_001", dept: "ENGINEERING", paid: true },
    { id: "EMP_002", dept: "FINANCE",     paid: true },
    { id: "EMP_003", dept: "OPERATIONS",  paid: true },
    { id: "EMP_004", dept: "RESEARCH",    paid: true },
    { id: "EMP_005", dept: "LEGAL",       paid: false },
  ];
  return (
    <svg viewBox="0 0 560 360" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
      {G.grid}
      <rect x="1" y="1" width="558" height="358" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <rect x="0" y="0" width="560" height="38" fill="rgba(0,0,0,0.025)" />
      <text x="20" y="23" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4" letterSpacing="1.5">PAYROLL LEDGER · JUNE 2026</text>
      <text x="540" y="23" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4" textAnchor="end">CYCLE: MONTHLY</text>
      {[["20","EMPLOYEE"],["140","DEPARTMENT"],["280","SALARY"],["440","STATUS"]].map(([x, l]) => (
        <text key={l} x={x} y="58" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4" letterSpacing="1.2">{l}</text>
      ))}
      <line x1="20" y1="64" x2="540" y2="64" stroke="rgba(0,0,0,0.08)" />
      {rows.map((r, i) => {
        const y = 86 + i * 36;
        return (
          <g key={r.id}>
            <text x="20" y={y + 10} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{r.id}</text>
            <text x="140" y={y + 10} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{r.dept}</text>
            {/* Salary bar — encrypted */}
            <rect x="278" y={y - 2} width="130" height="16" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.6" />
            {[...Array(13)].map((_, j) => (
              <rect key={j} x={279 + j * 10} y={y - 1} width="9" height="14" fill="#58BDF6" opacity="0.1 " />
            ))}
            <text x="343" y={y + 10} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="middle">████████████</text>
            {r.paid ? (
              <>
                <rect x="440" y={y - 2} width="60" height="16" fill="rgba(88,189,246,0.1)" stroke="#58BDF6" strokeWidth="0.6" />
                <text x="470" y={y + 10} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="middle">PAID ✓</text>
              </>
            ) : (
              <text x="440" y={y + 10} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4">PENDING</text>
            )}
            <line x1="20" y1={y + 22} x2="540" y2={y + 22} stroke="rgba(0,0,0,0.04)" />
          </g>
        );
      })}
      <rect x="20" y="274" width="520" height="32" fill="rgba(0,0,0,0.025)" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" />
      <text x="36" y="294" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">TOTAL PAYROLL</text>
      <rect x="180" y="280" width="100" height="18" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
      <text x="230" y="293" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">$•••,•••</text>
      <text x="320" y="294" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">TREASURY BALANCE</text>
      <rect x="450" y="280" width="90" height="18" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.7" />
      <text x="495" y="293" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">$•,•••,•••</text>
      <text x="20" y="332" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">SALARY DATA ENCRYPTED · ONLY COMPLIANCE OFFICER HAS DECRYPTION KEY</text>
    </svg>
  );
};

/** 07 — Private inference pipeline */
const InferenceGraphic = () => {
  const stages = [
    { x: 30,  label: "USER\nDATA",   sub: "SENSITIVE",  encrypt: false },
    { x: 160, label: "ENCRYPT",      sub: "0xA3F2…",    encrypt: true  },
    { x: 290, label: "AI\nMODEL",    sub: "WEIGHTS ENC",encrypt: true  },
    { x: 420, label: "DECRYPT",      sub: "PROOF GEN",  encrypt: true  },
    { x: 490, label: "RESULT",       sub: "VERIFIED",   encrypt: false },
  ];
  return (
    <svg viewBox="0 0 560 360" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
      {G.grid}
      <rect x="1" y="1" width="558" height="358" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <rect x="0" y="0" width="560" height="38" fill="rgba(0,0,0,0.025)" />
      <text x="20" y="23" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4" letterSpacing="1.5">PRIVATE INFERENCE PIPELINE</text>
      {/* Flow arrow baseline */}
      <path className="hero-beam-p2" d="M 20 180 H 540" fill="none" stroke="#58BDF6" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="20" y1="180" x2="540" y2="180" stroke="rgba(88,189,246,0.15)" strokeWidth="1" />
      {/* Stage boxes */}
      {stages.map((s, i) => {
        const bx = s.x; const by = 140; const bw = i === 0 || i === 4 ? 80 : 90; const bh = 78;
        const cx = bx + bw / 2;
        return (
          <g key={s.label}>
            <rect x={bx} y={by} width={bw} height={bh}
              fill={s.encrypt ? "rgba(88,189,246,0.07)" : "rgba(0,0,0,0.03)"}
              stroke={s.encrypt ? "#58BDF6" : "rgba(0,0,0,0.12)"}
              strokeWidth={s.encrypt ? "1" : "0.8"} />
            <text x={cx} y={by + 22} fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill={s.encrypt ? "#58BDF6" : "#141210"} textAnchor="middle">{s.label.split("\n")[0]}</text>
            {s.label.includes("\n") && <text x={cx} y={by + 36} fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill={s.encrypt ? "#58BDF6" : "#141210"} textAnchor="middle">{s.label.split("\n")[1]}</text>}
            <text x={cx} y={by + bh - 10} fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="#8892A4" textAnchor="middle">{s.sub}</text>
            {i < stages.length - 1 && (
              <text x={bx + bw + (stages[i+1].x - bx - bw) / 2} y={176} fontFamily="JetBrains Mono,monospace" fontSize="14" fill="#8892A4" textAnchor="middle">→</text>
            )}
          </g>
        );
      })}
      {/* Data rows */}
      {[["INPUT DATA",  "████████████████████████",  "#141210"],
        ["ENCRYPTED",   "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",  "#58BDF6"],
        ["RESULT",      "████████████████████████",  "#141210"],
        ["PROOF HASH",  "0x9f2d4a8c1e3b…",           "#8892A4"]].map(([l, v, c], i) => (
        <g key={l}>
          <text x="20" y={254 + i * 20} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4">{l}</text>
          <text x="120" y={254 + i * 20} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill={c}>{v}</text>
        </g>
      ))}
      <rect x="458" y="244" width="82" height="64" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.8" />
      <text x="499" y="270" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">VERIFIED</text>
      <text x="499" y="290" fontFamily="JetBrains Mono,monospace" fontSize="18" fill="#58BDF6" textAnchor="middle">✓</text>
    </svg>
  );
};

// ─── Solution Data ────────────────────────────────────────────────────────────

type Feature = { title: string; body: string };
type Solution = {
  id: string; number: string; title: string; tagline: string;
  description: string; features: Feature[];
  Graphic: () => React.JSX.Element;
};

const SOLUTIONS: Solution[] = [
  {
    id: "stablecoin-payments", number: "01",
    title: "Private Stablecoin Payments",
    tagline: "Transact without exposure",
    description: "Enable institutions and individuals to send stablecoins without exposing amounts, counterparty identities, or payment histories on the public ledger. Fairblock encrypts every transaction end-to-end — from initiation through settlement — while preserving on-chain verifiability and remaining fully compliant with AML and KYC requirements.",
    features: [
      { title: "Compliant by design", body: "Encryption does not break KYC or AML. Fairblock's selective disclosure lets authorized parties verify compliance without exposing data to the public chain." },
      { title: "Institutional rails", body: "Native integration with neobanks, payment processors, and custodians. Drop-in encryption for any stablecoin flow." },
      { title: "Real-time settlement", body: "Encrypted transactions settle with the same latency as their plaintext equivalents — no performance penalty for privacy." },
    ],
    Graphic: PaymentsGraphic,
  },
  {
    id: "private-assets", number: "02",
    title: "Private Assets",
    tagline: "Tokenize holdings without publishing them",
    description: "Issue and manage tokenized real-world assets — equities, bonds, fund shares — with confidential ownership records, hidden transfer restrictions, and encrypted portfolio compositions. Meet institutional confidentiality requirements without sacrificing the composability and auditability that on-chain infrastructure provides.",
    features: [
      { title: "Confidential ownership", body: "Holdings, position sizes, and transfer histories remain private on-chain while still being cryptographically verifiable." },
      { title: "Regulatory compliance", body: "Encrypted assets can still satisfy reporting obligations via selective disclosure proofs — no need to expose holdings to the public chain." },
      { title: "DeFi composable", body: "Private assets work natively with existing DeFi protocols. Use encrypted positions as collateral, swap, or lend — without revealing size." },
    ],
    Graphic: AssetsGraphic,
  },
  {
    id: "agentic-api", number: "03",
    title: "Private Agentic API",
    tagline: "AI agents that act without revealing strategy",
    description: "Give AI agents the ability to operate on sensitive financial data and execute confidential transactions without exposing inputs, strategies, or decision logic to the public chain or other agents. Fairblock's API lets agentic systems encrypt their instructions and outputs, enabling autonomous financial operations with provable correctness.",
    features: [
      { title: "Encrypted instructions", body: "Agent strategy, target addresses, and amounts are encrypted end-to-end. Only the cryptographic proof of execution is public." },
      { title: "Trustless execution", body: "On-chain proofs verify that the agent acted correctly without revealing what it did — preserving strategy confidentiality at scale." },
      { title: "Multi-agent privacy", body: "No information leakage between competing agents. Each agent's actions are isolated and encrypted, preventing front-running by other AI systems." },
    ],
    Graphic: AgenticGraphic,
  },
  {
    id: "token-issuance", number: "04",
    title: "Private Token Issuance",
    tagline: "Fair launches with encrypted allocation tables",
    description: "Launch tokens with confidential allocation tables, vesting schedules, and investor distribution lists. Fairblock prevents front-running and strategic manipulation during token generation events by keeping all issuance parameters encrypted until the precise moment of execution.",
    features: [
      { title: "Anti-front-running", body: "All allocation parameters stay encrypted until TGE. No entity can observe or act on distribution data before the launch executes." },
      { title: "Cryptographically fair", body: "Vesting schedules and cliff periods are enforced on-chain but remain confidential — no competitor can reverse-engineer cap table structure." },
      { title: "Compliance-ready", body: "KYC and whitelist requirements are satisfied through encrypted proofs. Maintain investor privacy without compromising regulatory controls." },
    ],
    Graphic: TokenGraphic,
  },
  {
    id: "private-lending", number: "05",
    title: "Private Lending",
    tagline: "Credit markets without information leakage",
    description: "Enable undercollateralized and institutional lending with confidential credit assessments, hidden collateral positions, and encrypted loan terms — all enforced trustlessly on-chain. Borrowers retain privacy over their financial exposure while lenders receive cryptographic guarantees of solvency.",
    features: [
      { title: "Confidential credit", body: "Credit scores, risk assessments, and borrower identities remain encrypted while still being verifiable by the lending protocol." },
      { title: "Protected collateral", body: "Collateral positions are hidden from competitors. Other market participants cannot observe your exposure or trigger cascading liquidations." },
      { title: "Institutional grade", body: "Fairblock meets the confidentiality standards required for institutional lending desks operating on public blockchain infrastructure." },
    ],
    Graphic: LendingGraphic,
  },
  {
    id: "payroll-treasury", number: "06",
    title: "Private Payroll and Treasury",
    tagline: "On-chain payroll without exposure",
    description: "Process payroll and manage corporate treasury operations on-chain with encrypted salary data, hidden fund movements, and compliant reporting — without exposing sensitive financial information to competitors, counterparties, or the public. Bring the full treasury stack on-chain without sacrificing confidentiality.",
    features: [
      { title: "Employee privacy", body: "Salary data is fully encrypted. Only the CFO and authorized parties hold decryption keys — no employee can view another's compensation." },
      { title: "Competitive protection", body: "Treasury movements, fund allocations, and payment schedules are hidden from competitors and market observers." },
      { title: "Audit ready", body: "Compliant reporting is generated via selective disclosure proofs — satisfying auditors without exposing raw payroll data to the public ledger." },
    ],
    Graphic: PayrollGraphic,
  },
  {
    id: "private-inference", number: "07",
    title: "Private Inference",
    tagline: "AI models that compute over encrypted data",
    description: "Run AI model inference over encrypted inputs, keeping user data and model weights confidential throughout the entire computation. Enable organizations to deploy machine learning models over sensitive financial, medical, or personal data — delivering accurate results without ever exposing raw inputs to the model operator or the network.",
    features: [
      { title: "Data sovereignty", body: "User inputs are encrypted before leaving the device. The model operator never sees raw data — only the encrypted payload and the verified result." },
      { title: "Model confidentiality", body: "AI model weights remain encrypted throughout inference. IP is protected without restricting model deployment or monetization." },
      { title: "Verifiable results", body: "Every inference generates a cryptographic proof of correct execution. Results are trustless — no need to trust the operator or the infrastructure." },
    ],
    Graphic: InferenceGraphic,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  const [active, setActive] = useState<Solution>(SOLUTIONS[0]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div className="mx-auto max-w-[1920px]">

      {/* ── Page header ── */}
      <div className="border-b border-black/10 px-6 sm:px-10 lg:px-14 pt-[13vh] pb-10">
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8892A4", marginBottom: "1rem" }}>
          Fairblock Network
        </p>
        <h1 className="font-heading font-normal" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "#141210" }}>
          Solutions
        </h1>
        <p style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "15px", lineHeight: 1.7, color: "#141210", opacity: 0.45, marginTop: "1rem", maxWidth: "560px" }}>
          Institutional-grade confidentiality for every layer of financial infrastructure.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">

        {/* ── Sidebar ── */}
        <aside className="lg:w-[280px] xl:w-[320px] shrink-0 border-b lg:border-b-0 lg:border-r border-black/8 px-6 sm:px-10 lg:px-0 py-8 lg:py-12 lg:sticky lg:top-0 lg:self-start" style={{ maxHeight: "100vh", overflowY: "auto" }}>
          <nav className="flex flex-col lg:px-8 xl:px-10">
            {SOLUTIONS.map(s => {
              const on = s.id === active.id;
              return (
                <button key={s.id} onClick={() => setActive(s)}
                  className="flex items-start gap-3 text-left py-3 group"
                  style={{ background: "none", border: "none", cursor: "pointer", borderLeft: `2px solid ${on ? "#58BDF6" : "transparent"}`, paddingLeft: "12px", transition: "border-color .15s" }}
                >
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8.5px", letterSpacing: "0.1em", color: on ? "#58BDF6" : "#8892A4", paddingTop: "3px", minWidth: "22px", transition: "color .15s" }}>
                    {s.number}
                  </span>
                  <span style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "13.5px", fontWeight: on ? 500 : 400, color: on ? "#141210" : "rgba(20,18,16,0.4)", lineHeight: 1.4, transition: "color .15s" }}>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── Content ── */}
        <main className="flex-1 px-6 sm:px-10 lg:px-14 xl:px-20 py-12 lg:py-16 flex flex-col gap-16">

          {/* Hero row: text left, graphic right */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-start">
            <div className="flex flex-col gap-6">
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#58BDF6" }}>
                {active.number} — {active.tagline}
              </p>
              <h2 className="font-heading font-normal" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "#141210" }}>
                {active.title}
              </h2>
              <p style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "15px", lineHeight: 1.85, color: "#141210", opacity: 0.58 }}>
                {active.description}
              </p>
              <div className="flex gap-3 flex-wrap pt-2">
                <a href="mailto:hello@fairblock.network" className="btn-ink">Contact us</a>
                <a href="https://docs.fairblock.network/docs/welcome/Vision" target="_blank" rel="noopener noreferrer" className="btn-outline">Read the docs</a>
              </div>
            </div>

            {/* Graphic */}
            <div key={active.id} style={{ border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
              <active.Graphic />
            </div>
          </div>

          {/* Feature cards */}
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8892A4", marginBottom: "1.5rem" }}>
              Key capabilities
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/8">
              {active.features.map((f, i) => (
                <div key={i} className="bg-white p-6 lg:p-8 flex flex-col gap-3">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8.5px", color: "#58BDF6", letterSpacing: "0.12em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-normal" style={{ fontSize: "1.15rem", lineHeight: 1.2, letterSpacing: "-0.01em", color: "#141210" }}>
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "13.5px", lineHeight: 1.7, color: "#141210", opacity: 0.5 }}>
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="border-t border-black/8 pt-8 flex items-center justify-between flex-wrap gap-4">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8892A4" }}>
              {active.number} / {SOLUTIONS.length.toString().padStart(2, "0")} — {active.title}
            </p>
            {SOLUTIONS.indexOf(active) < SOLUTIONS.length - 1 && (
              <button onClick={() => setActive(SOLUTIONS[SOLUTIONS.indexOf(active) + 1])}
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8892A4", background: "none", border: "none", cursor: "pointer", transition: "color .15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#141210")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8892A4")}
              >
                Next: {SOLUTIONS[SOLUTIONS.indexOf(active) + 1].title} →
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
