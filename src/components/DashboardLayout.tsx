
import { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Home, Settings, CreditCard, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  activePage?: "dashboard" | "settings" | "upgrade";
}

export const DashboardLayout = ({ 
  children, 
  activePage = "dashboard" 
}: DashboardLayoutProps) => {
  const navItems = [
    { icon: <Home className="h-5 w-5" />, label: "Dashboard", href: "/dashboard", active: activePage === "dashboard" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings", href: "/settings", active: activePage === "settings" },
    { icon: <CreditCard className="h-5 w-5" />, label: "Upgrade", href: "/upgrade", active: activePage === "upgrade" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between h-16 px-6">
          <Logo />
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="flex-1 py-6 px-4">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    item.active
                      ? "bg-blue-50 text-oneid-blue dark:bg-gray-700 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              asChild
            >
              <Link to="/">
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </Link>
            </Button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-4xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
