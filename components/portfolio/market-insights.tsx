"use client";

import { useFinance } from "@/lib/finance-context";

export function PortfolioMarketInsights() {
    const { portfolio, monthlyData } = useFinance();

    const lastMonth = monthlyData[monthlyData.length - 1];
    const previousMonth = monthlyData[monthlyData.length - 2];
    const monthlyChange = lastMonth?.balance - previousMonth?.balance || 0;
    const changePercentage =
        previousMonth && previousMonth.balance > 0
            ? ((monthlyChange / previousMonth.balance) * 100).toFixed(1)
            : "0";

    const riskLevel =
        portfolio?.assets.some((a) => a.allocation > 50) || false
            ? "High"
            : portfolio?.assets.some((a) => a.allocation > 25) || false
              ? "Moderate"
              : "Low";

    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
                    Monthly Variance
                </h4>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-headline font-bold text-on-surface">
                        {monthlyChange >= 0 ? "+" : ""}$
                        {Math.abs(monthlyChange).toLocaleString()}
                    </span>
                    <span
                        className={`text-xs font-bold ${
                            monthlyChange >= 0
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-tertiary"
                        }`}
                    >
                        {monthlyChange >= 0 ? "+" : ""}
                        {changePercentage}%
                    </span>
                </div>
                <p className="text-sm text-outline leading-relaxed">
                    Performance adjusted for all allocations and reinvestments.
                </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-tertiary/10 transition-colors"></div>
                <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
                    Risk Exposure
                </h4>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-headline font-bold text-on-surface">
                        {riskLevel}
                    </span>
                    <div
                        className={`w-2 h-2 rounded-full ${
                            riskLevel === "High"
                                ? "bg-tertiary shadow-[0_0_8px_rgba(255,185,94,0.5)]"
                                : riskLevel === "Moderate"
                                  ? "bg-amber-500 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                  : "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                        }`}
                    ></div>
                </div>
                <p className="text-sm text-outline leading-relaxed">
                    {riskLevel === "High"
                        ? "Consider rebalancing for better diversification."
                        : riskLevel === "Moderate"
                          ? "Exposure is within acceptable risk parameters."
                          : "Risk profile is well-distributed and healthy."}
                </p>
            </div>
        </div>
    );
}
