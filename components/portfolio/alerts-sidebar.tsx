"use client";

import {
    AlertCircle,
    AlertTriangle,
    ArrowRight,
    ArrowDownLeft,
    ArrowRightLeft,
} from "lucide-react";
import { useFinance } from "@/lib/finance-context";

export function PortfolioAlertsSidebar() {
    const { insights, transactions } = useFinance();

    // Get recent transactions
    const recentTransactions = transactions.slice(0, 3);

    // Get warning alerts
    const warningInsights = insights.filter((i) => i.type === "alert");
    const hasPortfolioWarning = warningInsights.length > 0;

    return (
        <div className="space-y-8">
            {hasPortfolioWarning && (
                <div className="bg-destructive/10 border border-destructive/30 p-6 rounded-lg relative">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-destructive/20 rounded-lg">
                            <AlertCircle className="w-6 h-6 text-destructive" />
                        </div>
                        <div>
                            <h4 className="font-bold text-destructive text-sm mb-1">
                                {warningInsights[0]?.title}
                            </h4>
                            <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                                {warningInsights[0]?.description}
                            </p>
                            <button className="w-full py-2 bg-destructive text-destructive-foreground text-[10px] font-black uppercase tracking-widest rounded-lg transition-transform active:scale-95">
                                Take Action
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-tertiary/10 border border-tertiary/30 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-tertiary/20 rounded-lg">
                        <AlertTriangle className="w-6 h-6 text-tertiary" />
                    </div>
                    <div>
                        <h4 className="font-bold text-tertiary text-sm mb-1">
                            Recommendation
                        </h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                            {insights.find((i) => i.type !== "alert")
                                ?.description ||
                                "Keep monitoring your portfolio performance."}
                        </p>
                        <div className="mt-4 flex gap-3">
                            <span className="text-[10px] font-bold text-tertiary border-b border-tertiary/30 cursor-pointer hover:opacity-80">
                                LEARN MORE
                            </span>
                            <span className="text-[10px] font-bold text-tertiary border-b border-tertiary/30 cursor-pointer hover:opacity-80">
                                DISMISS
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-overlay p-6 rounded-lg border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                            AI
                        </span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-on-surface">
                            Financial Insights
                        </p>
                        <p className="text-[10px] text-primary font-bold">
                            LATEST ANALYSIS
                        </p>
                    </div>
                </div>
                <blockquote className="text-xs italic text-on-surface-variant leading-relaxed mb-4">
                    "
                    {insights[0]?.description ||
                        "Monitor your portfolio performance regularly for optimal results."}
                    "
                </blockquote>
                <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all cursor-pointer">
                    <span className="text-[10px] font-black tracking-widest uppercase">
                        View Details
                    </span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-4">
                <h4 className="text-[10px] font-black text-outline uppercase tracking-widest px-1">
                    Recent Transactions
                </h4>
                <div className="space-y-1">
                    {recentTransactions.length > 0 ? (
                        recentTransactions.map((tx) => (
                            <div
                                key={tx.id}
                                className="flex justify-between items-center p-3 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group"
                            >
                                <div className="flex items-center gap-3">
                                    {tx.type === "Income" ? (
                                        <ArrowDownLeft className="text-outline w-5 h-5 group-hover:text-primary transition-colors" />
                                    ) : (
                                        <ArrowRightLeft className="text-outline w-5 h-5 group-hover:text-primary transition-colors" />
                                    )}
                                    <span className="text-xs font-medium text-on-surface">
                                        {tx.category}:{" "}
                                        {tx.description.slice(0, 20)}
                                    </span>
                                </div>
                                <span
                                    className={`text-xs font-bold ${
                                        tx.type === "Income"
                                            ? "text-emerald-600 dark:text-emerald-400"
                                            : "text-on-surface"
                                    }`}
                                >
                                    {tx.type === "Income" ? "+" : "-"}$
                                    {tx.amount.toLocaleString()}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="text-xs text-on-surface-variant">
                            No recent transactions
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
