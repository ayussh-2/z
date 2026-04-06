"use client";

import { useFinance } from "@/lib/finance-context";

export function PortfolioCategoryAllocation() {
    const { portfolio } = useFinance();

    const colorClasses = [
        "hero-gradient",
        "bg-primary/60",
        "bg-primary/40",
        "bg-primary/20",
        "bg-outline-variant",
    ];

    return (
        <div className="bg-surface-container-low p-8 rounded-lg">
            <div className="flex justify-between items-center mb-10">
                <h3 className="font-headline text-xl font-bold text-on-surface">
                    Asset Allocation
                </h3>
                <div className="flex gap-2">
                    <button className="px-4 py-1.5 bg-surface-container-highest text-primary text-xs font-bold rounded border border-outline-variant/30">
                        CURRENT
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {portfolio?.assets.map((asset, index) => (
                    <div key={asset.id} className="space-y-2">
                        <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                            <span>{asset.name}</span>
                            <span className="text-on-surface">
                                ${asset.value.toLocaleString()} (
                                {asset.allocation}%)
                            </span>
                        </div>
                        <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                            <div
                                className={`h-full ${colorClasses[index % colorClasses.length]}`}
                                style={{ width: `${asset.allocation}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
