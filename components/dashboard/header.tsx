import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
    return (
        <div className="flex justify-between items-end mb-10">
            <div>
                <p className="text-sm font-semibold tracking-widest text-primary uppercase font-sans mb-1">
                    Financial Activity
                </p>
                <h1 className="text-4xl font-serif font-extrabold text-on-surface">
                    Transactions Ledger
                </h1>
            </div>
            <Button variant="default" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                Record Entry
            </Button>
        </div>
    );
}
