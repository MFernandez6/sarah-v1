"use client";

import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StripeButtonProps {
  label?: string;
  price?: string;
  productId?: string;
}

export function StripeButton({
  label = "Pay with Stripe",
  price,
  productId = "price_placeholder",
}: StripeButtonProps) {
  return (
    <div className="space-y-2">
      <Button
        type="button"
        className="w-full"
        onClick={() => {
          console.log(`Stripe checkout placeholder: ${productId}`);
        }}
      >
        <CreditCard className="mr-2 h-4 w-4" />
        {label}
        {price && ` — ${price}`}
      </Button>
      <p className="text-center text-xs text-[var(--concept-muted-foreground)]">
        Stripe payment placeholder · Product ID: {productId}
      </p>
    </div>
  );
}
