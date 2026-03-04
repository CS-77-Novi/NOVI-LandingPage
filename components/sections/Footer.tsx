export default function Footer() {
  const quickLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Use Cases", href: "#usecases" },
  ];
  const companyLinks = [
    { label: "Team", href: "#team" },
    { label: "Impact", href: "#impact" },
    { label: "FAQ", href: "#faq" },
    { label: "Request Demo", href: "#cta" },
  ];
  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Data Ethics", href: "#" },
    { label: "FERPA Compliance", href: "#" },
  ];

  return (
    <footer className="relative z-[2] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-syne font-extrabold text-2xl logo-gradient tracking-tight mb-3">
              NOVI
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-[260px]">
              Attention-aware online learning powered by computer vision and ML.
              Built for educators who believe every student deserves to be seen.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-slate-100 mb-5">
              Product
            </h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted hover:text-purple transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-slate-100 mb-5">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted hover:text-purple transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-slate-100 mb-5">
              Legal
            </h3>
            <div className="flex flex-col gap-3">
              {legalLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted hover:text-purple transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 pt-8 border-t border-white/10">
          <p className="text-xs text-muted">
            © 2025 NOVI Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub", "Discord"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-muted hover:text-purple transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
