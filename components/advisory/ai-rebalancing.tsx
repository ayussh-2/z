import { Sparkles, Landmark, ShieldCheck } from "lucide-react";

export function AdvisoryAIRebalancing() {
    return (
        <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-extrabold tracking-tight text-on-surface font-serif">
                    AI Portfolio Rebalancing
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-full">
                    <Sparkles className="w-4 h-4 fill-on-surface-variant" />
                    Real-time Optimization
                </div>
            </div>
            
            <div className="space-y-4">
                <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center">
                                <Landmark className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <div className="font-bold text-on-surface">
                                    Equity / Fixed Income Drift
                                </div>
                                <p className="text-xs text-on-surface-variant mt-1">
                                    Portfolio currently 4.2% overweight in Large-Cap Equities.
                                </p>
                            </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <div className="text-xs font-bold text-tertiary mb-3 mt-1">
                                Impact: Medium
                            </div>
                            <button className="px-3 py-1.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-colors">
                                Adjust Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <div className="font-bold text-on-surface">
                                    Tax-Loss Harvesting Opportunity
                                </div>
                                <p className="text-xs text-on-surface-variant mt-1">
                                    Identified $12,400 in potential tax savings across tech holdings.
                                </p>
                            </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <div className="text-xs font-bold text-green-400 mb-3 mt-1">
                                Impact: High
                            </div>
                            <button className="px-3 py-1.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-colors">
                                Review Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
