import React from "react";
import { TrendingUp, AlertCircle, Activity } from "lucide-react";

type MetricCardProps = {
    title: string;
    value: string;
    backgroundIcon?: React.ReactNode;
    footer: React.ReactNode;
};

const metricsData: MetricCardProps[] = [
    {
        title: "Total Wealth",
        value: "$88,750",
        backgroundIcon: <Activity className="text-primary/20 w-10 h-10" />,
        footer: (
            <div className="flex items-center gap-2">
                <TrendingUp className="text-primary w-4 h-4" />
                <span className="text-primary font-bold text-sm">
                    +2.4% vs last month
                </span>
            </div>
        ),
    },
    {
        title: "Total Income",
        value: "$149,800",
        footer: (
            <>
                <div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-primary shadow-[0_0_8px_rgba(172,199,255,0.4)]"></div>
                </div>
                <p className="text-on-surface-variant text-xs mt-3">
                    Target achieved: 85% of annual projection
                </p>
            </>
        ),
    },
    {
        title: "Total Expenses",
        value: "$123,050",
        footer: (
            <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center border border-surface">
                        <AlertCircle className="w-3 h-3 text-on-tertiary-container" />
                    </div>
                </div>
                <span className="text-tertiary font-medium text-sm">
                    Awaiting reconciliation
                </span>
            </div>
        ),
    },
];

export function DashboardMetricsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metricsData.map((metric, index) => (
                <div
                    key={index}
                    className="bg-surface-container-lowest p-8 rounded-lg relative overflow-hidden group hover:bg-surface-container-high transition-colors duration-300"
                >
                    {metric.backgroundIcon && (
                        <div className="absolute top-0 right-0 p-4">
                            {metric.backgroundIcon}
                        </div>
                    )}
                    <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest mb-2">
                        {metric.title}
                    </p>
                    <h2 className="text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-4">
                        {metric.value}
                    </h2>
                    {metric.footer}
                </div>
            ))}
        </div>
    );
}
