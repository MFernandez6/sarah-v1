import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border border-[var(--concept-border)] bg-[var(--concept-background)] px-3 py-2 text-base text-[var(--concept-foreground)] ring-offset-background placeholder:text-[var(--concept-muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--concept-primary)] disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
