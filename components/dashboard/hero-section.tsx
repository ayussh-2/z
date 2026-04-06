"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFinance } from "@/lib/finance-context";

export function DashboardHero() {
    const { portfolio } = useFinance();

    const performancePercentage = portfolio?.performancePercentage || 0;
    const status =
        performancePercentage > 5
            ? "performing excellently"
            : performancePercentage > 0
              ? "performing well"
              : "needs attention";

    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h1 className="text-4xl font-extrabold font-headline tracking-tighter text-on-surface mb-2">
                    Portfolio Overview
                </h1>
                <p className="text-on-surface-variant max-w-md">
                    Your wealth has increased by{" "}
                    <span className="text-primary font-semibold">
                        +{performancePercentage}%
                    </span>{" "}
                    this month. Assets are {status} within optimal risk
                    parameters.
                </p>
            </div>
            <div className="flex gap-4">
                <Button variant="default">
                    <Plus className="w-5 h-5 mr-2" />
                    Allocate Funds
                </Button>
            </div>
        </div>
    );
}
