
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLoginButtonProps {
  provider: "google" | "apple" | "oneid";
  label: string;
  icon: JSX.Element;
  onClick?: () => void;
  className?: string;
}

export const SocialLoginButton = ({
  provider,
  label,
  icon,
  onClick,
  className,
}: SocialLoginButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "auth-button relative",
        provider === "oneid" && "bg-oneid-blue hover:bg-oneid-blue/90 text-white dark:text-white border-oneid-blue",
        className
      )}
      onClick={onClick}
    >
      <span className="absolute left-4">{icon}</span>
      {label}
    </Button>
  );
};
