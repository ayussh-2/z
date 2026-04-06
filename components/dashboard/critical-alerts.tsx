"use client";

import {
    AlertCircle,
    TrendingUp,
    AlertTriangle,
    CheckCircle,
} from "lucide-react";
import { useFinance } from "@/lib/finance-context";

export function DashboardCriticalAlerts() {
    const { insights } = useFinance();

    const getIconAndColor = (type: string) => {
        switch (type) {
            case "alert":
                return {
                    Icon: AlertTriangle,
                    bgColor: "bg-tertiary/10",
                    textColor: "text-tertiary",
                };
            case "positive":
                return {
                    Icon: CheckCircle,
                    bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
                    textColor: "text-emerald-600 dark:text-emerald-400",
                };
            case "neutral":
            default:
                return {
                    Icon: AlertCircle,
                    bgColor: "bg-blue-100 dark:bg-blue-900/20",
                    textColor: "text-blue-600 dark:text-blue-400",
                };
        }
    };

    return (
        <div className="space-y-4">
            {insights.length > 0 ? (
                insights.map((insight) => {
                    const { Icon, bgColor, textColor } = getIconAndColor(
                        insight.type,
                    );

                    return (
                        <div
                            key={insight.id}
                            className={`rounded-lg p-6 border ${
                                insight.type === "alert"
                                    ? "border-tertiary/20"
                                    : insight.type === "positive"
                                      ? "border-emerald-200 dark:border-emerald-800"
                                      : "border-blue-200 dark:border-blue-800"
                            } bg-surface-container-lowest`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center ${textColor} shrink-0`}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-on-surface font-headline">
                                        {insight.title}
                                    </h4>
                                    <p className="text-sm text-on-surface-variant mt-1">
                                        {insight.description}
                                    </p>
                                </div>
                                {insight.action && (
                                    <button
                                        className={`font-bold text-sm hover:underline py-2 px-4 shrink-0 ${textColor}`}
                                    >
                                        {insight.action}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="rounded-lg p-6 border border-outline-variant/20 bg-surface-container-lowest">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-on-surface font-headline">
                                You're All Set
                            </h4>
                            <p className="text-sm text-on-surface-variant mt-1">
                                No critical alerts at the moment. Your portfolio
                                is in good shape.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
