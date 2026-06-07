"use client";

import { useState } from "react";

interface CopyButtonProps {
  value: string;
  label: string;
  className?: string;
}

export function CopyButton({ value, label, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`focus-ring font-mono text-sm text-foreground hover:text-primary transition-colors ${className}`}
      aria-label={`Copy ${label}`}
    >
      {value}
      <span className="ml-2 text-xs text-muted-foreground">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
