
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Upgrade = () => {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("monthly");
  const [loading, setLoading] = useState(false);
  
  const plans = [
    {
      name: "Basic",
      price: { monthly: "Free", yearly: "Free" },
      features: [
        "Access to core features",
        "Limited app connections",
        "Standard support",
      ],
      isRecommended: false,
      buttonText: "Current Plan",
      disabled: true,
    },
    {
      name: "Pro",
      price: { monthly: "$9.99", yearly: "$99.99" },
      features: [
        "Access premium features across all apps",
        "Unlimited app connections",
        "Priority support",
        "Early access to new tools",
        "Advanced security features",
      ],
      isRecommended: true,
      buttonText: "Upgrade Now",
      disabled: false,
    },
    {
      name: "Enterprise",
      price: { monthly: "$24.99", yearly: "$249.99" },
      features: [
        "All Pro features",
        "Team management",
        "Custom integrations",
        "Dedicated account manager",
        "99.9% uptime SLA",
        "SSO and advanced security",
      ],
      isRecommended: false,
      buttonText: "Contact Sales",
      disabled: false,
    },
  ];

  const handleUpgrade = (planName: string) => {
    if (planName === "Enterprise") {
      toast.info("Our sales team will contact you shortly", {
        description: "Thank you for your interest in our Enterprise plan."
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setLoading(false);
      toast.success(`Upgraded to ${planName} plan successfully!`);
    }, 1500);
  };

  const getSavingsPercentage = (plan: any) => {
    if (plan.name === "Basic") return null;
    
    const monthlyPrice = parseFloat(plan.price.monthly.replace("$", ""));
    const yearlyPrice = parseFloat(plan.price.yearly.replace("$", ""));
    const monthlyCostForYear = monthlyPrice * 12;
    const savings = ((monthlyCostForYear - yearlyPrice) / monthlyCostForYear) * 100;
    
    return Math.round(savings);
  };

  return (
    <DashboardLayout activePage="upgrade">
      <div className="space-y-8 animate-slide-up">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Upgrade Your OneID</h1>
          <p className="text-muted-foreground mt-1 max-w-md mx-auto">
            Choose the plan that best fits your needs and unlock premium features across all Kilovate apps
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex p-1 bg-muted rounded-lg">
            <Button
              variant={selectedPlan === "monthly" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedPlan("monthly")}
              className="min-w-24"
            >
              Monthly
            </Button>
            <Button
              variant={selectedPlan === "yearly" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedPlan("yearly")}
              className="min-w-24 relative"
            >
              Yearly
              <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const savings = getSavingsPercentage(plan);
            return (
              <Card
                key={plan.name}
                className={`flex flex-col ${
                  plan.isRecommended
                    ? "border-oneid-blue dark:border-blue-500 shadow-lg scale-105"
                    : ""
                }`}
              >
                {plan.isRecommended && (
                  <div className="bg-oneid-blue text-white px-4 py-1 text-sm text-center font-medium">
                    Recommended
                  </div>
                )}
                <CardContent className="flex-1 pt-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">
                        {plan.price[selectedPlan]}
                      </span>
                      {plan.name !== "Basic" && (
                        <span className="text-muted-foreground">
                          {selectedPlan === "monthly" ? "/mo" : "/year"}
                        </span>
                      )}
                    </div>
                    {selectedPlan === "yearly" && savings && (
                      <div className="text-green-600 dark:text-green-400 text-sm mt-1">
                        Save {savings}% annually
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mt-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4 pb-6">
                  <Button
                    className={`w-full ${plan.name === "Basic" ? "bg-gray-400 hover:bg-gray-400" : ""}`}
                    disabled={plan.disabled || loading}
                    onClick={() => handleUpgrade(plan.name)}
                  >
                    {loading && plan.name === "Pro" ? "Processing..." : plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">OneID Pro Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Access All Premium Features</h4>
              <p className="text-sm text-muted-foreground">
                Get full access to all premium features across the entire Kilovate ecosystem.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Priority Support</h4>
              <p className="text-sm text-muted-foreground">
                Get help faster with dedicated support for Pro users.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Early Access</h4>
              <p className="text-sm text-muted-foreground">
                Be the first to try new features and tools before they're widely released.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Enhanced Security</h4>
              <p className="text-sm text-muted-foreground">
                Advanced security features to keep your account and data safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Upgrade;
