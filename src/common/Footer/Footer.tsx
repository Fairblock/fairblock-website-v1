import { FaXTwitter, FaDiscord, FaGithub } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

const NAV_COLS = [
  {
    label: "Product",
    links: [
      { text: "Solutions",    href: "/solutions/stablecoin-payments" },
      { text: "How it works", href: "/how-it-works" },
      { text: "Application Showcase", href: "/capps" },
      { text: "Ecosystem",    href: "/ecosystem" },
      { text: "Articles",     href: "/articles" },
    ],
  },
  {
    label: "Developers",
    links: [
      { text: "Documentation",   href: "https://docs.fairblock.network/" },
      { text: "Start building",  href: "https://docs.fairblock.network/ct/guides/build/building-with-sdk" },
      { text: "GitHub",          href: "https://github.com/Fairblock" },
      { text: "Brand kit",       href: "https://ballistic-sail-a4e.notion.site/Fairblock-Brand-Kit-4602243ba91c44b385dfdc9fccc426dc" },
    ],
  },
  {
    label: "Community",
    links: [
      { text: "X / Twitter", href: "https://x.com/0xfairblock" },
      { text: "Discord",     href: "https://discord.com/invite/fairblock" },
      { text: "Telegram",    href: "https://t.me/+HvfLo4NFTvw3NTU0" },
    ],
  },
];

const SOCIAL = [
  { icon: <FaXTwitter />,       href: "https://x.com/0xfairblock",                        label: "X" },
  { icon: <FaDiscord />,        href: "https://discord.com/invite/fairblock",              label: "Discord" },
  { icon: <RiTelegram2Fill />,  href: "https://t.me/+HvfLo4NFTvw3NTU0",                   label: "Telegram" },
  { icon: <FaGithub />,         href: "https://github.com/Fairblock",                      label: "GitHub" },
];

const Footer = () => (
  <footer className="border-t border-black/10 mt-24">
    <div className="mx-auto max-w-[1920px] px-6 sm:px-10 lg:px-14 py-16">

      {/* Main row */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">

        {/* Brand column */}
        <div className="flex flex-col gap-6 lg:max-w-xs">
          <img
            className="h-7 w-fit"
            src="/common/fairblock-logo.svg"
            alt="Fairblock"
          />
          <p style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#141210", opacity: 0.5 }}>
            Powering incorruptible markets<br />and machines.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4 mt-2">
            {SOCIAL.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ color: "#141210", opacity: 0.45, fontSize: "17px", transition: "opacity .2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.45")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-20">
          {NAV_COLS.map(col => (
            <div key={col.label} className="flex flex-col gap-4">
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9.5px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#8892A4",
              }}>
                {col.label}
              </span>
              <ul className="flex flex-col gap-3">
                {col.links.map(link => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: "'Maison Neue', sans-serif",
                        fontSize: "14px",
                        color: "#141210",
                        opacity: 0.6,
                        textDecoration: "none",
                        transition: "opacity .2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "0.6")}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/8 mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "#8892A4" }}>
          © 2026 Fairblock Network. All rights reserved.
        </p>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "#8892A4" }}>
          hello@fairblock.network
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;
