
import { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <header className="py-4 px-6">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>
      <footer className="py-4 px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Kilovate OneID. All rights reserved.</p>
      </footer>
    </div>
  );
};
