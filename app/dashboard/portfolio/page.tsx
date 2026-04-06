import { PortfolioHero } from "@/components/portfolio/hero";
import { PortfolioCategoryAllocation } from "@/components/portfolio/category-allocation";
import { PortfolioMarketInsights } from "@/components/portfolio/market-insights";
import { PortfolioAlertsSidebar } from "@/components/portfolio/alerts-sidebar";

export default function PortfolioPage() {
    return (
        <div className=" max-w-7xl mx-auto w-full relative">
            <PortfolioHero />

            <div className="grid grid-cols-12 gap-8 items-start">
                <div className="col-span-12 lg:col-span-8 space-y-8">
                    <PortfolioCategoryAllocation />
                    <PortfolioMarketInsights />
                </div>

                <div className="col-span-12 lg:col-span-4 space-y-8">
                    <PortfolioAlertsSidebar />
                </div>
            </div>
        </div>
    );
}
