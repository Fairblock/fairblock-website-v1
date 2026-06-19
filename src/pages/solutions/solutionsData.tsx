import {
  LuShield, LuZap, LuBuilding2, LuLock, LuCode,
  LuCircleCheck, LuKey, LuUsers, LuDatabase, LuCpu,
} from "react-icons/lu";

// ─── SVG graphics (one unique per solution) ───────────────────────────────────

const GRID = (id: string) => (
  <>
    <defs>
      <pattern id={id} width="36" height="36" patternUnits="userSpaceOnUse">
        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="600" height="400" fill={`url(#${id})`} />
  </>
);

export const PaymentsGraphic = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {GRID("p1")}
    <rect x="1" y="1" width="598" height="398" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
    <rect x="0" y="0" width="600" height="40" fill="rgba(0,0,0,0.025)" />
    <circle cx="18" cy="20" r="4" fill="#58BDF6" />
    <text x="30" y="24" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" letterSpacing="1.5">PAYMENT RAIL · ENCRYPTED · LIVE</text>
    <text x="582" y="24" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" textAnchor="end">FAIRBLOCK</text>
    {[["SENDER","AMOUNT","RECIPIENT","STATUS"],].map(cols => (
      cols.map((c, i) => <text key={c} x={[30,190,360,510][i]} y="66" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4" letterSpacing="1">{c}</text>)
    ))}
    <line x1="20" y1="72" x2="580" y2="72" stroke="rgba(0,0,0,0.08)" />
    {[
      ["0xA3F2…E1","$1,284.50","MERCHANT","#58BDF6","SENT ✓"],
      ["0xE91B…4C","ENCRYPTED","NEOBANK","#8892A4","PENDING"],
      ["0xC72D…8F","ENCRYPTED","EXCHANGE","#8892A4","PENDING"],
      ["0xF80A…D3","ENCRYPTED","AI AGENTS","#8892A4","PENDING"],
    ].map(([sender, amt, rcpt, _sc, status], i) => {
      const y = 100 + i * 44;
      const isEnc = amt === "ENCRYPTED";
      return (
        <g key={sender}>
          <text x="30"  y={y} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{sender}</text>
          {isEnc ? (
            <><rect x="188" y={y - 13} width="90" height="17" fill="rgba(88,189,246,0.1)" stroke="#58BDF6" strokeWidth="0.7" />
            <text x="233" y={y} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="middle">ENCRYPTED</text></>
          ) : <text x="190" y={y} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{amt}</text>}
          <text x="360" y={y} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{rcpt}</text>
          {i === 0 ? (
            <><rect x="506" y={y - 13} width="58" height="17" fill="rgba(88,189,246,0.12)" stroke="#58BDF6" strokeWidth="0.7" />
            <text x="535" y={y} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="middle">{status}</text></>
          ) : <text x="510" y={y} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{status}</text>}
          <line x1="20" y1={y + 10} x2="580" y2={y + 10} stroke="rgba(0,0,0,0.035)" />
        </g>
      );
    })}
    <path className="hero-beam-p2" d="M 20 131 H 580" fill="none" stroke="#58BDF6" strokeWidth="1.5" />
    <line x1="20" y1="310" x2="580" y2="310" stroke="rgba(0,0,0,0.07)" />
    <text x="30" y="330" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">4 TRANSACTIONS · END-TO-END ENCRYPTED · COMPLIANT</text>
    <rect x="470" y="318" width="92" height="20" fill="#141210" />
    <text x="516" y="332" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#FBF9F3" textAnchor="middle" letterSpacing="1">FAIRBLOCK</text>
  </svg>
);

export const AssetsGraphic = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {GRID("p2")}
    <rect x="1" y="1" width="598" height="398" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
    <rect x="0" y="0" width="600" height="40" fill="rgba(0,0,0,0.025)" />
    <text x="20" y="25" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" letterSpacing="1.5">ASSET PORTFOLIO · HOLDINGS ENCRYPTED</text>
    <text x="580" y="25" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" textAnchor="end">AUM: $•••,•••,•••</text>
    {[["ASSET","20"],["ALLOCATION","280"],["WEIGHT","555"]].map(([l, x]) => (
      <text key={l} x={x} y="65" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4" letterSpacing="1">{l}</text>
    ))}
    <line x1="20" y1="72" x2="580" y2="72" stroke="rgba(0,0,0,0.08)" />
    {[
      ["US TREASURY BOND", 0.72],["EQUITY FUND A", 0.55],["REAL ESTATE TOKEN", 0.38],["PRIVATE CREDIT", 0.62],["STRUCTURED NOTE", 0.44],
    ].map(([label, pct], i) => {
      const y = 96 + (i as number) * 48; const bw = 210;
      return (
        <g key={label as string}>
          <rect x="18" y={y + 2} width="4" height="20" fill="#58BDF6" opacity="0.55" />
          <text x="30" y={y + 16} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{label as string}</text>
          <rect x="278" y={y + 4} width={bw} height="14" fill="rgba(0,0,0,0.04)" />
          <rect x="278" y={y + 4} width={bw * (pct as number)} height="14" fill="#58BDF6" opacity="0.3" />
          <rect x="278" y={y + 4} width={bw * (pct as number)} height="14" fill="none" stroke="#58BDF6" strokeWidth="0.6" />
          <rect x="506" y={y + 3} width="56" height="16" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.6" />
          <text x="534" y={y + 15} fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">••.•%</text>
          <line x1="20" y1={y + 30} x2="580" y2={y + 30} stroke="rgba(0,0,0,0.035)" />
        </g>
      );
    })}
    <rect x="20" y="346" width="560" height="34" fill="rgba(88,189,246,0.05)" stroke="#58BDF6" strokeWidth="0.7" />
    <text x="36" y="367" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6">TOTAL AUM</text>
    <text x="130" y="367" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#141210">$•••,•••,•••</text>
    <text x="564" y="367" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="end">PROTECTED BY FAIRBLOCK ✓</text>
  </svg>
);

export const AgenticGraphic = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {GRID("p3")}
    <rect x="1" y="1" width="598" height="398" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
    <rect x="0" y="0" width="600" height="40" fill="rgba(0,0,0,0.025)" />
    <circle cx="18" cy="20" r="4" fill="#58BDF6" />
    <text x="30" y="24" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" letterSpacing="1.5">FAIRBLOCK AGENTIC API</text>
    <text x="24" y="62" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#58BDF6">POST /v1/agent/execute</text>
    <text x="24" y="80" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{`{`}</text>
    {[
      ['"agent_id"',  '"0xA3F2…E1"',  "#141210"],
      ['"action"',   '"SWAP"',        "#141210"],
      ['"amount"',   '[ENCRYPTED]',   "#58BDF6"],
      ['"strategy"', '[ENCRYPTED]',   "#58BDF6"],
      ['"target"',   '[ENCRYPTED]',   "#58BDF6"],
      ['"deadline"', '[ENCRYPTED]',   "#58BDF6"],
    ].map(([k, v, vc], i) => (
      <g key={k}>
        <text x="24" y={100 + i * 20} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{`  ${k}:`}</text>
        <text x="170" y={100 + i * 20} fontFamily="JetBrains Mono,monospace" fontSize="9" fill={vc}>{v}</text>
      </g>
    ))}
    <text x="24" y="228" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{`}`}</text>
    <line x1="20" y1="242" x2="580" y2="242" stroke="rgba(0,0,0,0.06)" />
    <text x="24" y="264" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">200 OK  -  23ms</text>
    <text x="24" y="284" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{`{`}</text>
    <text x="24" y="304" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{"  \"proof\":"}</text>
    <text x="124" y="304" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">"0x9f2d4a8c1e…"</text>
    <text x="24" y="322" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{"  \"status\":"}</text>
    <text x="132" y="322" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#58BDF6">"EXECUTED"</text>
    <text x="24" y="342" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{`}`}</text>
  </svg>
);

export const TokenGraphic = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {GRID("p4")}
    <rect x="1" y="1" width="598" height="398" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
    <rect x="0" y="0" width="600" height="40" fill="rgba(0,0,0,0.025)" />
    <text x="20" y="25" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" letterSpacing="1.5">TOKEN ISSUANCE · PRE-TGE ENCRYPTED</text>
    <rect x="468" y="12" width="112" height="18" fill="#141210" />
    <text x="524" y="25" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#FBF9F3" textAnchor="middle" letterSpacing="0.8">PRE-TGE LOCKED</text>
    {[["RECIPIENT","20"],["ALLOCATION","280"],["SHARE","544"]].map(([l, x]) => (
      <text key={l} x={x} y="65" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4" letterSpacing="1">{l}</text>
    ))}
    <line x1="20" y1="72" x2="580" y2="72" stroke="rgba(0,0,0,0.08)" />
    {[["TEAM",200],["INVESTORS",160],["COMMUNITY",230],["TREASURY",140],["LIQUIDITY",100]].map(([label, w], i) => {
      const y = 96 + (i as number) * 48;
      return (
        <g key={label as string}>
          <text x="20" y={y + 16} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{label as string}</text>
          <rect x="278" y={y + 4} width={w as number} height="16" fill="#58BDF6" opacity="0.15" />
          {[...Array(Math.floor((w as number) / 12))].map((_, j) => (
            <rect key={j} x={279 + j * 12} y={y + 5} width="10" height="14" fill="#58BDF6" opacity="0.12" />
          ))}
          <rect x="278" y={y + 4} width={w as number} height="16" fill="none" stroke="#58BDF6" strokeWidth="0.7" />
          <rect x="508" y={y + 4} width="64" height="16" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.6" />
          <text x="540" y={y + 16} fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">••.•%</text>
          <line x1="20" y1={y + 30} x2="580" y2={y + 30} stroke="rgba(0,0,0,0.035)" />
        </g>
      );
    })}
    <rect x="20" y="344" width="560" height="36" fill="rgba(0,0,0,0.025)" stroke="rgba(0,0,0,0.07)" strokeWidth="0.8" />
    <text x="36" y="366" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">TGE DATE: [ENCRYPTED]</text>
    <text x="240" y="366" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">CLIFF: [ENCRYPTED]</text>
    <text x="420" y="366" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#58BDF6">ANTI-FRONTRUN ✓</text>
  </svg>
);

export const LendingGraphic = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {GRID("p5")}
    <rect x="1" y="1" width="598" height="398" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
    <rect x="0" y="0" width="600" height="40" fill="rgba(0,0,0,0.025)" />
    <text x="20" y="25" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" letterSpacing="1.5">PRIVATE LENDING · CONFIDENTIAL ASSESSMENT</text>
    {/* Left card */}
    <rect x="20" y="54" width="264" height="148" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.09)" strokeWidth="0.8" />
    <text x="36" y="76" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4" letterSpacing="1">CREDIT ASSESSMENT</text>
    <line x1="36" y1="82" x2="268" y2="82" stroke="rgba(0,0,0,0.06)" />
    {[["Score",110],["History",138],["Risk tier",166]].map(([l, y]) => (
      <g key={l}>
        <text x="36" y={y} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{l}:</text>
        <rect x="104" y={(y as number) - 13} width="132" height="17" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.6" />
        <text x="170" y={y} fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">ENCRYPTED</text>
      </g>
    ))}
    {/* Right card */}
    <rect x="316" y="54" width="264" height="148" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.09)" strokeWidth="0.8" />
    <text x="332" y="76" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4" letterSpacing="1">COLLATERAL POSITION</text>
    <line x1="332" y1="82" x2="574" y2="82" stroke="rgba(0,0,0,0.06)" />
    {[["Amount","$•••,•••",110],["Asset","ENCRYPTED",138],["LTV","••.•%",166]].map(([l, v, y]) => (
      <g key={l}>
        <text x="332" y={y} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{l}:</text>
        <rect x="392" y={(y as number) - 13} width="132" height="17" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.6" />
        <text x="458" y={y} fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#58BDF6" textAnchor="middle">{v}</text>
      </g>
    ))}
    {/* Loan terms */}
    <rect x="20" y="222" width="560" height="116" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.09)" strokeWidth="0.8" />
    <text x="36" y="244" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4" letterSpacing="1">LOAN TERMS</text>
    <line x1="36" y1="250" x2="564" y2="250" stroke="rgba(0,0,0,0.06)" />
    {[["RATE","$•.••%",0],["TERM","••mo",140],["AMOUNT","$•••,•••",280],["SCHEDULE","ENCRYPTED",420]].map(([k, v, xo]) => (
      <g key={k}>
        <text x={36 + (xo as number)} y="272" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">{k}</text>
        <text x={36 + (xo as number)} y="294" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#141210">{v}</text>
      </g>
    ))}
    <rect x="420" y="306" width="148" height="20" fill="#141210" />
    <text x="494" y="320" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#FBF9F3" textAnchor="middle" letterSpacing="1">APPROVED ✓</text>
    <path className="hero-beam-p3" d="M 20 220 H 580" fill="none" stroke="#58BDF6" strokeWidth="1" />
    <text x="20" y="362" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">LENDER CANNOT SEE BORROWER IDENTITY, POSITION SIZE, OR COLLATERAL TYPE</text>
  </svg>
);

export const PayrollGraphic = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {GRID("p6")}
    <rect x="1" y="1" width="598" height="398" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
    <rect x="0" y="0" width="600" height="40" fill="rgba(0,0,0,0.025)" />
    <text x="20" y="25" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" letterSpacing="1.5">PAYROLL LEDGER · JUNE 2026 · ENCRYPTED</text>
    <text x="580" y="25" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" textAnchor="end">5 EMPLOYEES</text>
    {[["EMP ID","20"],["DEPARTMENT","130"],["SALARY","320"],["STATUS","520"]].map(([l, x]) => (
      <text key={l} x={x} y="65" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4" letterSpacing="1">{l}</text>
    ))}
    <line x1="20" y1="72" x2="580" y2="72" stroke="rgba(0,0,0,0.08)" />
    {[["EMP_001","ENGINEERING",true],["EMP_002","FINANCE",true],["EMP_003","OPERATIONS",true],["EMP_004","RESEARCH",true],["EMP_005","LEGAL",false]].map(([id, dept, paid], i) => {
      const y = 96 + (i as number) * 44;
      return (
        <g key={id as string}>
          <text x="20" y={y + 12} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{id as string}</text>
          <text x="130" y={y + 12} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{dept as string}</text>
          <rect x="318" y={y} width="154" height="18" fill="rgba(88,189,246,0.07)" stroke="#58BDF6" strokeWidth="0.6" />
          {[...Array(15)].map((_, j) => <rect key={j} x={319 + j * 10} y={y + 1} width="9" height="16" fill="#58BDF6" opacity="0.09" />)}
          <text x="395" y={y + 13} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="middle">████████████████</text>
          {paid ? (
            <><rect x="514" y={y} width="60" height="18" fill="rgba(88,189,246,0.1)" stroke="#58BDF6" strokeWidth="0.6" />
            <text x="544" y={y + 13} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#58BDF6" textAnchor="middle">PAID ✓</text></>
          ) : <text x="520" y={y + 13} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4">PENDING</text>}
          <line x1="20" y1={y + 26} x2="580" y2={y + 26} stroke="rgba(0,0,0,0.035)" />
        </g>
      );
    })}
    <rect x="20" y="320" width="560" height="36" fill="rgba(0,0,0,0.025)" stroke="rgba(0,0,0,0.07)" strokeWidth="0.8" />
    <text x="36" y="342" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">TOTAL PAYROLL</text>
    <rect x="164" y="328" width="108" height="20" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.6" />
    <text x="218" y="342" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#58BDF6" textAnchor="middle">$•••,•••</text>
    <text x="316" y="342" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8892A4">TREASURY</text>
    <rect x="400" y="328" width="108" height="20" fill="rgba(88,189,246,0.08)" stroke="#58BDF6" strokeWidth="0.6" />
    <text x="454" y="342" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#58BDF6" textAnchor="middle">$•,•••,•••</text>
    <text x="20" y="378" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#8892A4">ONLY AUTHORISED OFFICERS HOLD THE DECRYPTION KEY</text>
  </svg>
);

export const InferenceGraphic = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {GRID("p7")}
    <rect x="1" y="1" width="598" height="398" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
    <rect x="0" y="0" width="600" height="40" fill="rgba(0,0,0,0.025)" />
    <text x="20" y="25" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" letterSpacing="1.5">PRIVATE INFERENCE PIPELINE</text>
    <line x1="20" y1="186" x2="580" y2="186" stroke="rgba(88,189,246,0.12)" strokeWidth="1" />
    <path className="hero-beam-p1" d="M 20 186 H 580" fill="none" stroke="#58BDF6" strokeWidth="1.5" />
    {[
      { x: 20,  w: 96, label: "USER DATA",  sub: "SENSITIVE", enc: false },
      { x: 140, w: 90, label: "ENCRYPT",    sub: "0xA3F2…",  enc: true },
      { x: 256, w: 88, label: "AI MODEL",   sub: "WEIGHTS\nENC", enc: true },
      { x: 372, w: 90, label: "DECRYPT",    sub: "PROOF GEN", enc: true },
      { x: 486, w: 94, label: "RESULT",     sub: "VERIFIED", enc: false },
    ].map(s => (
      <g key={s.label}>
        <rect x={s.x} y={148} width={s.w} height={76}
          fill={s.enc ? "rgba(88,189,246,0.06)" : "rgba(0,0,0,0.025)"}
          stroke={s.enc ? "#58BDF6" : "rgba(0,0,0,0.1)"}
          strokeWidth={s.enc ? "1" : "0.8"} />
        <text x={s.x + s.w / 2} y="170" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill={s.enc ? "#58BDF6" : "#141210"}>{s.label}</text>
        {s.sub.includes("\n") ? (
          s.sub.split("\n").map((l, li) => <text key={l} x={s.x + s.w / 2} y={204 + li * 12} textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="7" fill="#8892A4">{l}</text>)
        ) : <text x={s.x + s.w / 2} y="208" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="7" fill="#8892A4">{s.sub}</text>}
        {s.x < 486 && <text x={s.x + s.w + 10} y="190" fontFamily="JetBrains Mono,monospace" fontSize="12" fill="#8892A4">›</text>}
      </g>
    ))}
    {[["INPUT DATA",  "████████████████████",  "#141210", 262],
      ["ENCRYPTED",   "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",  "#58BDF6", 284],
      ["RESULT",      "████████████████████",  "#141210", 306],
      ["PROOF HASH",  "0x9f2d4a8c1e3b7d…",     "#8892A4", 328],
    ].map(([l, v, c, y]) => (
      <g key={l as string}>
        <text x="20" y={y as number} fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">{l as string}</text>
        <text x="110" y={y as number} fontFamily="JetBrains Mono,monospace" fontSize="8" fill={c as string}>{v as string}</text>
      </g>
    ))}
    <rect x="476" y="260" width="104" height="80" fill="rgba(88,189,246,0.07)" stroke="#58BDF6" strokeWidth="0.8" />
    <text x="528" y="294" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#58BDF6" textAnchor="middle">VERIFIED</text>
    <text x="528" y="322" fontFamily="JetBrains Mono,monospace" fontSize="20" fill="#58BDF6" textAnchor="middle">✓</text>
    <text x="20" y="370" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">MODEL OPERATOR NEVER SEES RAW USER DATA · CRYPTOGRAPHIC PROOF OF CORRECT EXECUTION</text>
  </svg>
);

// ─── Solution definitions ─────────────────────────────────────────────────────

export type Feature = {
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>;
  title: string;
  body: string;
};

export type Solution = {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  features: Feature[];
  Graphic: () => React.JSX.Element;
};

export const SOLUTIONS: Solution[] = [
  {
    id: "stablecoin-payments", number: "01",
    title: "Private Stablecoin Payments",
    headline: "Transact without exposure.",
    description: "Enable institutions and individuals to send stablecoins without exposing amounts, counterparties, or payment histories on the public chain. Fairblock encrypts every transaction end-to-end while preserving onchain verifiability and remaining fully compliant with AML and KYC requirements.",
    features: [
      { Icon: LuShield,   title: "Compliant by design",      body: "Encryption doesn't break KYC or AML. Selective disclosure lets authorized parties verify compliance without exposing data to the public chain." },
      { Icon: LuBuilding2, title: "Institutional rails",     body: "Native integration with neobanks, payment processors, and custodians. Plug-in encryption for any stablecoin flow." },
      { Icon: LuZap,      title: "Real-time settlement",     body: "The lightest scheme that meets requirements is chosen to avoid one-size-fits-all overkill approaches. This results in no multi-minute proofs on the client side and low computation fees." },
    ],
    Graphic: PaymentsGraphic,
  },
  {
    id: "private-assets", number: "02",
    title: "Private Assets",
    headline: "Tokenize without publishing.",
    description: "Issue and manage tokenized real-world assets - equities, bonds, fund shares - with confidential ownership records and encrypted portfolio compositions. Meet institutional confidentiality requirements without sacrificing the composability and auditability of onchain infrastructure.",
    features: [
      { Icon: LuLock,        title: "Confidential ownership",  body: "Holdings, position sizes, and transfer histories remain private onchain while still being cryptographically verifiable." },
      { Icon: LuCircleCheck, title: "Regulatory compliance",   body: "Encrypted assets satisfy reporting obligations via selective disclosure proofs - no need to expose holdings to the public chain." },
      { Icon: LuCode,       title: "DeFi composable",         body: "Private assets work natively with existing DeFi protocols. Use encrypted positions as collateral, swap, or lend - without revealing size." },
    ],
    Graphic: AssetsGraphic,
  },
  {
    id: "agentic-api", number: "03",
    title: "Private Agentic API",
    headline: "Agents that act without revealing strategy.",
    description: "Give AI agents the ability to operate on sensitive financial data and execute confidential transactions without exposing inputs, strategies, or decision logic to the public chain or competing agents. Fairblock's API enables autonomous financial operations with provable correctness.",
    features: [
      { Icon: LuLock,  title: "Encrypted instructions",  body: "Agent strategy, target addresses, and amounts are encrypted end-to-end. Only the cryptographic proof of execution is public." },
      { Icon: LuShield, title: "Trustless execution",    body: "On-chain proofs verify that the agent acted correctly without revealing what it did - preserving strategy confidentiality at scale." },
      { Icon: LuUsers,  title: "Multi-agent privacy",    body: "No information leakage between competing agents. Each agent's actions are isolated and encrypted, preventing front-running by other AI systems." },
    ],
    Graphic: AgenticGraphic,
  },
  {
    id: "token-issuance", number: "04",
    title: "Private Token Issuance",
    headline: "Fair launches, encrypted until live.",
    description: "Launch tokens with confidential allocation tables, vesting schedules, and investor distribution lists. Fairblock prevents front-running and strategic manipulation during token generation events by keeping all issuance parameters encrypted until the precise moment of execution.",
    features: [
      { Icon: LuShield,      title: "Anti-front-running",       body: "All allocation parameters stay encrypted until TGE. No entity can observe or act on distribution data before the launch executes." },
      { Icon: LuKey,         title: "Cryptographically fair",   body: "Vesting schedules and cliff periods are enforced onchain but remain confidential - no competitor can reverse-engineer your cap table." },
      { Icon: LuCircleCheck, title: "Compliance-ready",         body: "KYC and whitelist requirements are satisfied through encrypted proofs. Maintain investor privacy without compromising regulatory controls." },
    ],
    Graphic: TokenGraphic,
  },
  {
    id: "private-lending", number: "05",
    title: "Private Lending",
    headline: "Credit markets without leakage.",
    description: "Enable undercollateralized and institutional lending with confidential credit assessments, hidden collateral positions, and encrypted loan terms - all enforced trustlessly onchain. Borrowers retain privacy over their financial exposure while lenders receive cryptographic guarantees of solvency.",
    features: [
      { Icon: LuLock,    title: "Confidential credit",     body: "Credit scores, risk assessments, and borrower identities remain encrypted while still being verifiable by the lending protocol." },
      { Icon: LuShield,  title: "Protected collateral",    body: "Collateral positions are hidden from competitors. Other market participants cannot observe your exposure or trigger cascading liquidations." },
      { Icon: LuBuilding2, title: "Institutional grade",   body: "Fairblock meets the confidentiality standards required for institutional lending desks operating on public blockchain infrastructure." },
    ],
    Graphic: LendingGraphic,
  },
  {
    id: "payroll-treasury", number: "06",
    title: "Private Payroll and Treasury",
    headline: "On-chain payroll, fully private.",
    description: "Process payroll and manage corporate treasury operations onchain with encrypted salary data, hidden fund movements, and compliant reporting - without exposing sensitive financial information to competitors or the public. Bring the full treasury stack onchain without sacrificing confidentiality.",
    features: [
      { Icon: LuLock,        title: "Employee privacy",        body: "Salary data is fully encrypted. Only the CFO and authorized parties hold decryption keys - no employee can view another's compensation." },
      { Icon: LuShield,      title: "Competitive protection",  body: "Treasury movements, fund allocations, and payment schedules are hidden from competitors and market observers." },
      { Icon: LuCircleCheck, title: "Audit ready",             body: "Compliant reporting is generated via selective disclosure proofs - satisfying auditors without exposing raw payroll data to the public chain." },
    ],
    Graphic: PayrollGraphic,
  },
  {
    id: "private-inference", number: "07",
    title: "Private Inference",
    headline: "AI compute over encrypted data.",
    description: "Run AI model inference over encrypted inputs, keeping user data and model weights confidential throughout the entire computation. Deploy machine learning models over sensitive financial or personal data - delivering accurate, verifiable results without exposing raw inputs to the model operator.",
    features: [
      { Icon: LuDatabase, title: "Data sovereignty",        body: "User inputs are encrypted before leaving the device. The model operator never sees raw data - only the encrypted payload and the verified result." },
      { Icon: LuCpu,      title: "Model confidentiality",   body: "AI model weights remain encrypted throughout inference. IP is protected without restricting model deployment or monetization." },
      { Icon: LuKey,      title: "Verifiable results",      body: "Every inference generates a cryptographic proof of correct execution. Results are trustless - no need to trust the operator or infrastructure." },
    ],
    Graphic: InferenceGraphic,
  },
];
