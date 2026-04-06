export function PortfolioMarketInsights() {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
                    Monthly Variance
                </h4>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-headline font-bold text-on-surface">
                        +$42,103
                    </span>
                    <span className="text-primary text-xs font-bold">
                        +2.1%
                    </span>
                </div>
                <p className="text-sm text-outline leading-relaxed">
                    Adjusted for dividend reinvestments across the primary tech
                    portfolio.
                </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-tertiary/10 transition-colors"></div>
                <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
                    Risk Exposure
                </h4>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-headline font-bold text-on-surface">
                        Moderate
                    </span>
                    <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(255,185,94,0.5)]"></div>
                </div>
                <p className="text-sm text-outline leading-relaxed">
                    Concentration in high-growth SaaS remains above target threshold.
                </p>
            </div>
        </div>
    );
}
