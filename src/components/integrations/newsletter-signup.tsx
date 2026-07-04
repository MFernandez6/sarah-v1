"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NewsletterSignupProps {
  compact?: boolean;
}

export function NewsletterSignup({ compact = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup placeholder:", email);
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return (
      <p className="text-sm text-[var(--concept-primary)]">
        Thanks for subscribing! (Demo placeholder)
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--concept-muted-foreground)]" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="pl-10"
          aria-label="Email address for newsletter"
        />
      </div>
      <Button type="submit" size={compact ? "sm" : "default"}>
        Subscribe
      </Button>
    </form>
  );
}
