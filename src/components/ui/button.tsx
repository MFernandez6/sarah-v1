import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex max-w-full items-center justify-center gap-2 whitespace-normal rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--concept-primary)] text-[var(--concept-primary-foreground)] hover:opacity-90 shadow-sm",
        secondary:
          "bg-[var(--concept-muted)] text-[var(--concept-foreground)] border border-[var(--concept-border)] hover:bg-[var(--concept-border)]",
        outline:
          "border-2 border-[var(--concept-primary)] text-[var(--concept-primary)] bg-transparent hover:bg-[var(--concept-primary)] hover:text-[var(--concept-primary-foreground)]",
        ghost:
          "text-[var(--concept-foreground)] hover:bg-[var(--concept-muted)]",
        link: "text-[var(--concept-primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 min-h-11 px-5 py-2 sm:px-6",
        sm: "h-11 min-h-11 rounded-md px-4 text-xs sm:h-9 sm:min-h-9",
        lg: "h-12 min-h-12 rounded-md px-5 text-base sm:px-8",
        icon: "h-11 w-11 min-h-11 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
