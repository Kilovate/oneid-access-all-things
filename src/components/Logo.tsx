
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export const Logo = ({ className, withText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-oneid-blue to-blue-600 flex items-center justify-center shadow-md">
        <span className="text-lg font-bold text-white">1</span>
      </div>
      {withText && (
        <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
          OneID
        </span>
      )}
    </div>
  );
};
