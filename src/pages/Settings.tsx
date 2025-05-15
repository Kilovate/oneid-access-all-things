
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/components/ui/sonner";

const Settings = () => {
  // Mock user data
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    twoFactorEnabled: false,
  });

  const [loading, setLoading] = useState({
    profile: false,
    password: false,
    email: false,
  });

  const [formData, setFormData] = useState({
    name: user.name,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    newEmail: user.email,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading({ ...loading, profile: true });
    
    // Simulate API call
    setTimeout(() => {
      setUser({ ...user, name: formData.name });
      setLoading({ ...loading, profile: false });
      toast.success("Profile updated successfully");
    }, 1000);
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      return toast.error("Passwords don't match");
    }
    
    setLoading({ ...loading, password: true });
    
    // Simulate API call
    setTimeout(() => {
      setLoading({ ...loading, password: false });
      setFormData({ ...formData, currentPassword: "", newPassword: "", confirmPassword: "" });
      toast.success("Password updated successfully");
    }, 1000);
  };

  const handleEmailUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading({ ...loading, email: true });
    
    // Simulate API call
    setTimeout(() => {
      setUser({ ...user, email: formData.newEmail });
      setLoading({ ...loading, email: false });
      toast.success("Email updated successfully");
    }, 1000);
  };

  const handleToggle2FA = (checked: boolean) => {
    setUser({ ...user, twoFactorEnabled: checked });
    toast.success(`Two-factor authentication ${checked ? "enabled" : "disabled"}`);
  };

  return (
    <DashboardLayout activePage="settings">
      <div className="space-y-8 animate-slide-up">
        <div>
          <h1 className="text-3xl font-bold">Account Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account preferences and security options
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <form onSubmit={handleProfileUpdate}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading.profile}>
                {loading.profile ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Manage your password and security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input 
                  id="currentPassword" 
                  name="currentPassword" 
                  type="password" 
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input 
                  id="newPassword" 
                  name="newPassword" 
                  type="password" 
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  type="password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" disabled={loading.password}>
                {loading.password ? "Updating..." : "Change Password"}
              </Button>
            </form>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable two-factor authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch 
                  checked={user.twoFactorEnabled} 
                  onCheckedChange={handleToggle2FA} 
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Email Address</CardTitle>
            <CardDescription>Change your email address</CardDescription>
          </CardHeader>
          <form onSubmit={handleEmailUpdate}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newEmail">New Email Address</Label>
                <Input 
                  id="newEmail" 
                  name="newEmail" 
                  type="email" 
                  value={formData.newEmail}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading.email}>
                {loading.email ? "Updating..." : "Update Email"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <Card className="border-red-200 dark:border-red-900">
          <CardHeader>
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
            <CardDescription>Irreversible account actions</CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove all your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
