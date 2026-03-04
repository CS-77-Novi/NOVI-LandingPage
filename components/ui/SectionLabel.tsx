interface SectionLabelProps {
  children: string;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs font-medium tracking-[0.15em] uppercase text-cyan mb-4">
      {children}
    </p>
  );
}
