export function AdvisoryAllocationHeatmap() {
    return (
        <section className="bg-surface-container-low p-8 rounded-xl">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-on-surface font-serif">
                        Strategic Allocation Heat Map
                    </h3>
                    <p className="text-sm text-on-surface-variant">
                        Global exposure distribution across asset classes and risk profiles.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-surface-container-highest rounded-sm"></span>
                        <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                            Underweight
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-primary rounded-sm"></span>
                        <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                            Overweight
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-1 h-[240px]">
                {/* Row 1: Equities */}
                <div className="bg-primary/90 p-4 flex flex-col justify-between rounded-tl-xl">
                    <span className="text-[10px] font-bold text-on-primary uppercase tracking-widest">
                        US Large Cap
                    </span>
                    <span className="text-lg font-extrabold text-on-primary">28%</span>
                </div>
                <div className="bg-primary/70 p-4 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-on-primary uppercase tracking-widest">
                        EU Equities
                    </span>
                    <span className="text-lg font-extrabold text-on-primary">14%</span>
                </div>
                <div className="bg-primary/50 p-4 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-on-primary uppercase tracking-widest">
                        Emerging
                    </span>
                    <span className="text-lg font-extrabold text-on-primary">8%</span>
                </div>
                <div className="bg-surface-container-highest p-4 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                        Japan
                    </span>
                    <span className="text-lg font-extrabold text-on-surface">3%</span>
                </div>
                <div className="bg-primary/30 p-4 flex flex-col justify-between rounded-tr-xl">
                    <span className="text-[10px] font-bold text-on-surface uppercase tracking-widest">
                        Small Cap
                    </span>
                    <span className="text-lg font-extrabold text-on-surface">6%</span>
                </div>

                {/* Row 2: Fixed Income */}
                <div className="bg-primary/40 p-4 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-on-surface uppercase tracking-widest">
                        Treasuries
                    </span>
                    <span className="text-lg font-extrabold text-on-surface">12%</span>
                </div>
                <div className="bg-surface-container-highest p-4 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                        Corp Debt
                    </span>
                    <span className="text-lg font-extrabold text-on-surface">4%</span>
                </div>
                <div className="bg-primary/60 p-4 flex flex-col justify-between col-span-2">
                    <span className="text-[10px] font-bold text-on-primary uppercase tracking-widest">
                        Private Credit
                    </span>
                    <span className="text-lg font-extrabold text-on-primary">15%</span>
                </div>
                <div className="bg-surface-container-highest p-4 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                        Munis
                    </span>
                    <span className="text-lg font-extrabold text-on-surface">2%</span>
                </div>

                {/* Row 3: Alts & Cash */}
                <div className="bg-primary/30 p-4 flex flex-col justify-between rounded-bl-xl">
                    <span className="text-[10px] font-bold text-on-surface uppercase tracking-widest">
                        Real Estate
                    </span>
                    <span className="text-lg font-extrabold text-on-surface">5%</span>
                </div>
                <div className="bg-surface-container-highest p-4 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                        Commodities
                    </span>
                    <span className="text-lg font-extrabold text-on-surface">1%</span>
                </div>
                <div className="bg-surface-container-highest p-4 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                        Venture
                    </span>
                    <span className="text-lg font-extrabold text-on-surface">2%</span>
                </div>
                <div className="bg-primary/20 p-4 flex flex-col justify-between col-span-2 rounded-br-xl">
                    <span className="text-[10px] font-bold text-on-surface uppercase tracking-widest">
                        Cash / Equiv
                    </span>
                    <span className="text-lg font-extrabold text-on-surface">4%</span>
                </div>
            </div>
        </section>
    );
}
