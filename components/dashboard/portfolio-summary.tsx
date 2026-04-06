"use client";

import { useFinance } from "@/lib/finance-context";

export function PortfolioSummary() {
    const { monthlyData, portfolio } = useFinance();

    // Calculate the highest balance for scaling
    const maxBalance = Math.max(...monthlyData.map((m) => m.balance));
    const minBalance = Math.min(...monthlyData.map((m) => m.balance));
    const range = maxBalance - minBalance || 1;

    // Create SVG path for the chart
    const pathData = monthlyData
        .map((point, index) => {
            const x = (index / (monthlyData.length - 1)) * 800;
            const normalizedY = (maxBalance - point.balance) / range;
            const y = normalizedY * 200;
            return `${x},${y}`;
        })
        .join(" ");

    // Get top 3 assets
    const topAssets = portfolio?.assets.slice(0, 3) || [];
    const equitiesAllocation = portfolio?.assets.find(
        (a) => a.class === "Equities",
    );

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-lg h-[450px] flex flex-col">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-xl font-bold font-headline tracking-tight">
                            Balance History
                        </h3>
                        <p className="text-on-surface-variant text-sm">
                            Performance tracking for the last 12 months
                        </p>
                    </div>
                    <div className="flex bg-surface-container-highest p-1 rounded-lg">
                        <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-surface-container-highest text-primary">
                            1Y
                        </button>
                        <button className="px-4 py-1.5 text-xs font-bold rounded-md text-on-surface-variant hover:text-on-surface">
                            5Y
                        </button>
                        <button className="px-4 py-1.5 text-xs font-bold rounded-md text-on-surface-variant hover:text-on-surface">
                            ALL
                        </button>
                    </div>
                </div>
                <div className="flex-1 relative flex items-end gap-1">
                    <div className="absolute inset-0 bg-linear-to-b from-primary/15 to-transparent rounded-lg border-b border-l border-outline-variant/10"></div>
                    <div className="w-full h-[60%] border-t-2 border-primary relative">
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(172,199,255,0.6)]"></div>
                        <svg
                            className="w-full h-full"
                            preserveAspectRatio="none"
                            viewBox="0 0 800 200"
                        >
                            <polyline
                                points={pathData}
                                fill="none"
                                stroke="currentColor"
                                className="text-primary stroke-2"
                            />
                        </svg>
                    </div>
                    <div className="absolute bottom-[-24px] left-0 right-0 flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-2">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-lg flex flex-col">
                <h3 className="text-xl font-bold font-headline tracking-tight mb-6">
                    Asset Allocation
                </h3>
                <div className="flex-1 flex flex-col justify-center items-center relative py-4">
                    <div className="w-48 h-48 rounded-full border-[12px] border-surface-container-highest relative flex items-center justify-center">
                        <div
                            className="absolute inset-[-12px] rounded-full border-[12px] border-primary"
                            style={{
                                clipPath: `polygon(50% 50%, 50% 0%, ${50 + (equitiesAllocation?.allocation || 45) * 0.5}% 0%, ${50 + (equitiesAllocation?.allocation || 45) * 0.5}% 100%, 50% 100%)`,
                            }}
                        ></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black font-headline tracking-tighter">
                                {equitiesAllocation?.allocation || 45}%
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                                Equities
                            </span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 mt-8">
                    {topAssets.map((asset, index) => (
                        <div
                            key={asset.id}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className={`w-2 h-2 rounded-full ${
                                        index === 0
                                            ? "bg-primary"
                                            : index === 1
                                              ? "bg-primary-container"
                                              : "bg-outline-variant"
                                    }`}
                                ></span>
                                <span className="text-sm font-medium">
                                    {asset.name}
                                </span>
                            </div>
                            <span className="text-sm font-bold">
                                ${asset.value.toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
