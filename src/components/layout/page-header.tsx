import { Container } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("texture-muted border-b border-[var(--brand-silver-light)] py-16 sm:py-20", className)}>
      <Container>
        <FadeIn>
          <h1 className="font-[family-name:var(--concept-font-heading)] text-4xl font-bold tracking-tight text-[var(--concept-foreground)] sm:text-5xl">
            {title}
          </h1>
          <div className="silver-rule my-4 w-20" />
          {description && (
            <p className="max-w-2xl text-lg text-[var(--concept-muted-foreground)]">
              {description}
            </p>
          )}
        </FadeIn>
      </Container>
    </div>
  );
}
