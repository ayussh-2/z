import { ArrowRight } from "lucide-react";
import { TransactionsTable } from "@/components/dashboard/transactions-table";
import { DashboardHero } from "@/components/dashboard/hero-section";
import { DashboardMetricsGrid } from "@/components/dashboard/metrics-grid";
import { PortfolioSummary } from "@/components/dashboard/portfolio-summary";
import { DashboardCriticalAlerts } from "@/components/dashboard/critical-alerts";

export default function DashboardPage() {
    return (
        <div className="max-w-[1400px] mx-auto space-y-8 w-full">
            <DashboardHero />
            <DashboardMetricsGrid />
            <PortfolioSummary />
            <DashboardCriticalAlerts />

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-headline tracking-tight">
                        Recent Activity
                    </h3>
                    <button className="text-primary text-sm font-bold flex items-center gap-1 group">
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                <TransactionsTable />
            </div>
        </div>
    );
}
