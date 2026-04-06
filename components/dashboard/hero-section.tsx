import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHero() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h1 className="text-4xl font-extrabold font-headline tracking-tighter text-on-surface mb-2">
                    Portfolio Overview
                </h1>
                <p className="text-on-surface-variant max-w-md">
                    Your wealth has increased by{" "}
                    <span className="text-primary font-semibold">
                        +4.2%
                    </span>{" "}
                    this month. Assets are performing within optimal risk
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
