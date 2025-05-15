
import { useState } from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";
import { SocialLoginButton } from "@/components/SocialLoginButton";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<"email" | "username">("email");
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      toast.success("Login successful!");
      navigate("/dashboard");
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    toast(`${provider} login initiated`, {
      description: "This would connect to the provider's OAuth flow",
    });
  };

  return (
    <AuthLayout>
      <div className="auth-card">
        <div className="text-center mb-8">
          <Logo className="mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-2">Access Everything. OneID.</h1>
          <p className="text-muted-foreground">
            Sign in to access all your apps and services
          </p>
        </div>

        <div className="space-y-4">
          <SocialLoginButton
            provider="google"
            label="Continue with Google"
            icon={
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
            onClick={() => handleSocialLogin("Google")}
          />

          <SocialLoginButton
            provider="apple"
            label="Continue with Apple"
            icon={
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  fill="currentColor"
                  d="M17.05 20.28c-.98.95-2.05.86-3.1.38-1.09-.5-2.1-.48-3.2 0-1.38.62-2.1.53-2.95-.38C3.5 15.62 4.34 8.28 9.45 8c1.26.07 2.09.84 3.03.84.93 0 2.03-.84 3.56-.71 1.03.09 3.65.59 4.47 3.15-3.44 2.24-2.75 7.5.54 8.87-.56.99-1.27 2.03-2.25 3.03-1.02.97-2.18 2.11-3.75 2.11-1.56 0-2.03-1.28-3.56-1.28-1.53 0-2.03 1.28-3.56 1.28H7.88M12.8 7.94c-.15-2.53 1.84-3.77 1.95-3.84-1.6-.54-3.31.88-3.96.88-.64 0-2.18-.88-3.4-.85C5 4.18 2.58 6.15 2.57 9.93c0 1.21.21 2.48.64 3.8.71 2.17 3.32 7.52 5.87 7.47 1.56-.03 2.37-1.14 4.14-1.14 1.77 0 2.5 1.14 4.14 1.14 2.53-.04 4.75-4.73 5.46-6.9-2.98-.11-5.03-2.18-5.02-5.36"/>
              </svg>
            }
            onClick={() => handleSocialLogin("Apple")}
          />

          <SocialLoginButton
            provider="oneid"
            label="Continue with OneID"
            icon={
              <div className="w-4 h-4 rounded bg-white flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-oneid-blue">1</span>
              </div>
            }
            onClick={() => handleSocialLogin("OneID")}
          />

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white dark:bg-oneid-dark text-muted-foreground">
                or continue with
              </span>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <Button
              type="button"
              variant={loginMethod === "email" ? "default" : "outline"}
              className="w-full"
              onClick={() => setLoginMethod("email")}
            >
              Email
            </Button>
            <Button
              type="button"
              variant={loginMethod === "username" ? "default" : "outline"}
              className="w-full"
              onClick={() => setLoginMethod("username")}
            >
              Username
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="emailOrUsername">
                {loginMethod === "email" ? "Email" : "Username"}
              </Label>
              <Input
                id="emailOrUsername"
                name="emailOrUsername"
                type={loginMethod === "email" ? "email" : "text"}
                placeholder={loginMethod === "email" ? "name@example.com" : "Enter your username"}
                autoComplete={loginMethod === "email" ? "email" : "username"}
                required
                value={formData.emailOrUsername}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-oneid-blue hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing In..." : "Sign In Securely"}
            </Button>
          </form>

          <p className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-oneid-blue hover:underline">
              Create a OneID account
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
