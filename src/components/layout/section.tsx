import { cn } from "@/lib/utils";

type SectionVariant = "default" | "muted" | "off-white" | "navy";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
}

const variantClasses: Record<SectionVariant, string> = {
  default: "texture-off-white",
  "off-white": "texture-off-white",
  muted: "texture-muted",
  navy: "texture-navy",
};

export function Section({ children, className, id, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16 lg:py-24", variantClasses[variant], className)}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--concept-primary)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[family-name:var(--concept-font-heading)] text-2xl font-bold tracking-tight text-[var(--concept-foreground)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className={cn("silver-rule mt-4", align === "center" ? "mx-auto w-24" : "w-24")} />
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-[var(--concept-muted-foreground)]">
          {description}
        </p>
      )}
    </div>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
