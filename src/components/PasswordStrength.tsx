
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const [strength, setStrength] = useState(0);
  const [label, setLabel] = useState("Too weak");

  useEffect(() => {
    // Calculate password strength
    let score = 0;
    
    if (!password) {
      setStrength(0);
      setLabel("Too weak");
      return;
    }

    // Length check
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // Character variety checks
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    // Update strength score (max 5)
    const finalScore = Math.min(5, Math.floor(score));
    setStrength(finalScore);
    
    // Update label
    const labels = ["Too weak", "Weak", "Fair", "Good", "Strong", "Very strong"];
    setLabel(labels[finalScore]);
    
  }, [password]);

  return (
    <div className="mt-2 space-y-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-all duration-300",
              index <= strength
                ? strength === 1
                  ? "bg-red-500"
                  : strength === 2
                  ? "bg-orange-500"
                  : strength === 3
                  ? "bg-yellow-500"
                  : strength === 4
                  ? "bg-green-500"
                  : "bg-emerald-500"
                : "bg-gray-200 dark:bg-gray-700"
            )}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
};
