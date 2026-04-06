export function PortfolioSummary() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-lg h-[450px] flex flex-col">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-xl font-bold font-headline tracking-tight">
                            Balance History
                        </h3>
                        <p className="text-on-surface-variant text-sm">
                            Performance tracking for the last 12 months
                        </p>
                    </div>
                    <div className="flex bg-surface-container-highest p-1 rounded-lg">
                        <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-surface-container-highest text-primary">
                            1Y
                        </button>
                        <button className="px-4 py-1.5 text-xs font-bold rounded-md text-on-surface-variant hover:text-on-surface">
                            5Y
                        </button>
                        <button className="px-4 py-1.5 text-xs font-bold rounded-md text-on-surface-variant hover:text-on-surface">
                            ALL
                        </button>
                    </div>
                </div>
                <div className="flex-1 relative flex items-end gap-1">
                    <div className="absolute inset-0 bg-linear-to-b from-primary/15 to-transparent rounded-lg border-b border-l border-outline-variant/10"></div>
                    <div className="w-full h-[60%] border-t-2 border-primary relative">
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(172,199,255,0.6)]"></div>
                        <svg
                            className="w-full h-full"
                            preserveAspectRatio="none"
                            viewBox="0 0 800 200"
                        >
                            <path
                                d="M0,150 C100,140 200,180 300,120 C400,60 500,100 600,40 C700,20 800,50 800,50"
                                fill="none"
                                stroke="currentColor"
                                className="text-primary stroke-2"
                            ></path>
                        </svg>
                    </div>
                    <div className="absolute bottom-[-24px] left-0 right-0 flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-2">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-lg flex flex-col">
                <h3 className="text-xl font-bold font-headline tracking-tight mb-6">
                    Asset Allocation
                </h3>
                <div className="flex-1 flex flex-col justify-center items-center relative py-4">
                    <div className="w-48 h-48 rounded-full border-[12px] border-surface-container-highest relative flex items-center justify-center">
                        <div
                            className="absolute inset-[-12px] rounded-full border-[12px] border-primary"
                            style={{
                                clipPath:
                                    "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                            }}
                        ></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black font-headline tracking-tighter">
                                72%
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                                Equities
                            </span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 mt-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-sm font-medium">
                                Equities
                            </span>
                        </div>
                        <span className="text-sm font-bold">$63,900</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                            <span className="text-sm font-medium">
                                Fixed Income
                            </span>
                        </div>
                        <span className="text-sm font-bold">$12,450</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                            <span className="text-sm font-medium">
                                Cash Reserves
                            </span>
                        </div>
                        <span className="text-sm font-bold">$12,400</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
