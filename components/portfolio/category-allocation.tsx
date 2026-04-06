export function PortfolioCategoryAllocation() {
    const allocations = [
        { label: "Venture Equity", value: "$1.2M (42%)", percentage: "42%", colorClass: "hero-gradient" },
        { label: "Fixed Income", value: "$850k (30%)", percentage: "30%", colorClass: "bg-primary/60" },
        { label: "Real Estate", value: "$420k (15%)", percentage: "15%", colorClass: "bg-primary/40" },
        { label: "Commodities", value: "$280k (10%)", percentage: "10%", colorClass: "bg-primary/20" },
        { label: "Cash & Equivalents", value: "$90k (3%)", percentage: "3%", colorClass: "bg-outline-variant" },
    ];

    return (
        <div className="bg-surface-container-low p-8 rounded-lg">
            <div className="flex justify-between items-center mb-10">
                <h3 className="font-headline text-xl font-bold text-on-surface">
                    Category Allocation
                </h3>
                <div className="flex gap-2">
                    <button className="px-4 py-1.5 bg-surface-container-highest text-primary text-xs font-bold rounded border border-outline-variant/30">
                        LATEST QUARTER
                    </button>
                    <button className="px-4 py-1.5 text-on-surface-variant text-xs font-bold rounded hover:bg-surface-container-highest transition-colors">
                        YTD
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {allocations.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                            <span>{item.label}</span>
                            <span className="text-on-surface">{item.value}</span>
                        </div>
                        <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                            <div
                                className={`h-full ${item.colorClass}`}
                                style={{ width: item.percentage }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
