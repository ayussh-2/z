import { AdvisoryHeroInsights } from "@/components/advisory/hero-insights";
import { AdvisoryAIRebalancing } from "@/components/advisory/ai-rebalancing";
import { AdvisoryExpertPerspectives } from "@/components/advisory/expert-perspectives";
import { AdvisoryAllocationHeatmap } from "@/components/advisory/allocation-heatmap";

export default function AdvisoryPage() {
    return (
        <div className="max-w-7xl mx-auto w-full relative">
            <AdvisoryHeroInsights />

            <div className="grid grid-cols-12 gap-8 mb-12">
                <AdvisoryAIRebalancing />
                <AdvisoryExpertPerspectives />
            </div>

            <AdvisoryAllocationHeatmap />
        </div>
    );
}
