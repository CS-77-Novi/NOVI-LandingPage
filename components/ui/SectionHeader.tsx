interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, sub, center }: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-cyan-400 mb-4">{label}</p>
      <h2 className="font-syne text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-5">
        {title}
      </h2>
      {sub && (
        <p className={`text-slate-400 text-[1.05rem] leading-[1.75] ${center ? "mx-auto" : ""} max-w-xl`}>
          {sub}
        </p>
      )}
    </div>
  );
}
