"use client";

import {
    ArrowLeft,
    ArrowRight,
    TrendingUp,
    ArrowRightIcon,
} from "lucide-react";
import { useFinance } from "@/lib/finance-context";

export function AdvisoryHeroInsights() {
    const { insights, portfolio } = useFinance();

    const bullishPercentage = Math.min(
        Math.round(
            (insights.filter((i) => i.type === "positive").length /
                (insights.length || 1)) *
                100,
        ),
        95,
    );
    const criticalInsight = insights.find((i) => i.type === "alert");

    return (
        <section className="mb-12">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <span className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        Live Intelligence
                    </span>
                    <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface max-w-2xl font-serif">
                        Your Portfolio Intelligence Dashboard
                    </h2>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 bg-surface-container-low text-on-surface-variant rounded-lg hover:text-primary transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-surface-container-low text-on-surface-variant rounded-lg hover:text-primary transition-colors">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
                {/* Main Feature */}
                <div className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-[400px] bg-gradient-to-br from-primary/10 to-primary/5 flex items-end">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full relative z-10">
                        <div className="flex gap-4 mb-4">
                            <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded uppercase tracking-wider">
                                Analysis
                            </span>
                            <span
                                className={`px-2 py-1 ${portfolio?.performancePercentage || 0 > 5 ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-tertiary/20 text-tertiary"} text-[10px] font-bold rounded uppercase tracking-wider`}
                            >
                                {portfolio?.performancePercentage || 0 > 5
                                    ? "Strong Performance"
                                    : "Monitor"}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-on-surface">
                            Portfolio Performance Overview
                        </h3>
                        <p className="text-on-surface-variant max-w-xl mb-6 leading-relaxed">
                            {insights[0]?.description ||
                                "Your portfolio is configured for optimal growth with balanced risk exposure."}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-sm font-bold text-primary">
                                    AI
                                </span>
                            </div>
                            <span className="text-xs text-on-surface-variant">
                                Analysis Status:{" "}
                                <span className="text-primary font-bold">
                                    Current
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Secondary Insight */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                    <div className="bg-surface-container-low p-6 rounded-xl flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                                Market Sentiment
                            </span>
                            <TrendingUp className="text-primary w-5 h-5" />
                        </div>
                        <div className="text-5xl font-extrabold tracking-tighter text-on-surface mb-2">
                            {bullishPercentage}%
                        </div>
                        <div className="text-sm text-primary font-bold mb-4">
                            Positive Insights
                        </div>
                        <div className="mt-auto">
                            <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-full transition-all"
                                    style={{ width: `${bullishPercentage}%` }}
                                ></div>
                            </div>
                            <p className="text-[10px] text-on-surface-variant mt-3 leading-tight uppercase tracking-wider">
                                Based on financial metrics analysis
                            </p>
                        </div>
                    </div>

                    {criticalInsight && (
                        <div className="bg-surface-container-low p-6 rounded-xl flex-1 border-l-2 border-tertiary">
                            <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest block mb-2">
                                Alert
                            </span>
                            <h4 className="font-bold text-lg leading-tight mb-2 text-on-surface">
                                {criticalInsight.title}
                            </h4>
                            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                                {criticalInsight.description}
                            </p>
                            <button className="text-tertiary text-xs font-bold flex items-center gap-1 group">
                                Review Recommendation
                                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
