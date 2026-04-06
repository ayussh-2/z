import { AlertCircle } from "lucide-react";

export function DashboardCriticalAlerts() {
    return (
        <div className="bg-surface-container-lowest rounded-lg p-6 border border-tertiary/20">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                    <AlertCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-on-surface font-headline">
                        Rebalancing Recommended
                    </h4>
                    <p className="text-sm text-on-surface-variant mt-1">
                        Your Technology exposure has exceeded the 25% threshold.
                        We recommend reallocating $4,200 to Diversified Bonds.
                    </p>
                </div>
                <button className="text-tertiary font-bold text-sm hover:underline py-2 px-4 shrink-0">
                    Review Strategy
                </button>
            </div>
        </div>
    );
}
