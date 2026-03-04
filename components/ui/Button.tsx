import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold rounded-[10px] transition-all duration-200 cursor-pointer select-none";
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-5 py-[10px] text-sm", lg: "px-7 py-[14px] text-base" };
  const variants = {
    primary: "bg-gradient-to-br from-purple-500 to-blue-500 text-white hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]",
    ghost: "border border-white/10 text-slate-100 hover:border-purple hover:bg-purple/10",
  };
  const cls = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return <a href={href} className={cls} {...rest}>{children}</a>;
  }
  return <button className={cls} {...(props as ButtonAsButton)}>{children}</button>;
}
