import { TrendingUp } from "lucide-react";

export function PortfolioHero() {
    return (
        <div className="mb-12">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-on-surface-variant font-headline text-sm uppercase tracking-[0.2em] mb-2">
                        Total Managed Equity
                    </h2>
                    <h1 className="text-6xl font-headline font-extrabold text-on-surface tracking-tighter">
                        $2,840,192.54
                    </h1>
                </div>
                <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        <TrendingUp className="w-4 h-4" />
                        +12.4% MoM
                    </span>
                </div>
            </div>
            <div className="h-[2px] w-full bg-linear-to-r from-primary to-transparent opacity-20"></div>
        </div>
    );
}
