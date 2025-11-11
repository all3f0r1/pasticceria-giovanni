import { ReactNode } from "react";

interface MenuSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function MenuSection({ title, icon, children, className = "" }: MenuSectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-primary/30">
        {icon && <div className="text-primary">{icon}</div>}
        <h2 
          className="text-3xl md:text-4xl font-bold text-primary"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          {title}
        </h2>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </section>
  );
}
