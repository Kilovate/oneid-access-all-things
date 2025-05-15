
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "Alex Johnson",
    username: "alexj",
    email: "alex@example.com",
    subscription: "Free",
  };

  // Mock connected apps
  const connectedApps = [
    {
      name: "Oblivian Reach",
      lastUsed: "2 days ago",
      icon: "🔮",
    },
    {
      name: "SignalLoop",
      lastUsed: "1 week ago",
      icon: "📊",
    },
    {
      name: "KiloChat",
      lastUsed: "3 weeks ago",
      icon: "💬",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-slide-up">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
          <p className="text-muted-foreground mt-1">
            Manage your OneID account and connected applications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Account Details
                <Badge variant={user.subscription === "Pro" ? "default" : "outline"}>
                  {user.subscription}
                </Badge>
              </CardTitle>
              <CardDescription>
                Your personal information and account status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Name</div>
                <div>{user.name}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Username</div>
                <div>@{user.username}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Email</div>
                <div>{user.email}</div>
              </div>
              <div className="pt-2">
                <Button variant="outline" asChild>
                  <Link to="/settings">
                    Edit Account Details
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subscription Status</CardTitle>
              <CardDescription>
                Your current plan and benefits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {user.subscription === "Free" ? (
                <div className="rounded-lg border border-dashed p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">Free Plan</div>
                      <div className="text-sm text-muted-foreground">Basic access to Kilovate apps</div>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/upgrade">
                      Upgrade to Pro
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">Pro Plan</div>
                      <div className="text-sm text-muted-foreground">Full access to all premium features</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Your subscription renews on <span className="font-medium">June 15, 2025</span>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <div className="text-sm font-medium">Pro Plan Benefits:</div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <svg className="h-3.5 w-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Access premium features across all apps
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-3.5 w-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-3.5 w-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Early access to new tools
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Connected Apps</CardTitle>
            <CardDescription>
              Applications connected to your OneID account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {connectedApps.map((app) => (
                <div key={app.name} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl">
                    {app.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{app.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Last used: {app.lastUsed}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Lock className="h-4 w-4 mr-2" />
                    Manage Access
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
