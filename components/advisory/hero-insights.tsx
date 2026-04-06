import { ArrowLeft, ArrowRight, TrendingUp, ArrowRightIcon } from "lucide-react";

export function AdvisoryHeroInsights() {
    return (
        <section className="mb-12">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <span className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        Live Intelligence
                    </span>
                    <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface max-w-2xl font-serif">
                        Structural Shifts: The New Macro Landscape
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
                <div className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-[400px]">
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                        alt="abstract architectural visualization of blue glass structures with deep shadows and sharp geometric lines reflecting light"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3jBsUerEjfFPHvphM5XVjzaZBBPMhxhofjhZqyKeFq0x_U78slIKY24ndW-rGV4tT-gkWxW9PRzfZKV9Md_DpNa6LAgA9fxA_5dXGuYJzlhxgWfW_4zetkdzdA-k6PtXPr8W3WSNHenWPLcfJNh3_7FeumibQKHtbUVwGnGUmzyb3_tqGLVTzjIn28Fl-ydsUf8aIeJoadSvTW42azdk2yNy1gscwxJHIvNhjWqdBtN_LDHGZz86iSajzNVUyDTOOwiSP0WiTOYY"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="flex gap-4 mb-4">
                            <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded uppercase tracking-wider">
                                Analysis
                            </span>
                            <span className="px-2 py-1 bg-tertiary/20 text-tertiary text-[10px] font-bold rounded uppercase tracking-wider">
                                High Impact
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-on-surface">
                            Navigating Interest Rate Volatility: A Sovereign Debt Perspective
                        </h3>
                        <p className="text-on-surface-variant max-w-xl mb-6 leading-relaxed">
                            Our quarterly outlook examines the decoupling of central bank
                            policies and the resulting alpha opportunities in fixed income
                            markets.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                <img
                                    className="w-8 h-8 rounded-full border-2 border-surface object-cover"
                                    alt="professional portrait of senior male financial analyst in dark suit"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6n6qdVtjnvumDKduOXsves2nspfDOYz4qSlnwpxP72_U6wrR2umiKoully0rtl63afHwmoVRzSOfeB6Qg1jhLlw3MsDmgb94j1k4gWNGyZk_CIbcM9kVl6CBm_nwcleo3EKIxDsrWivKTsGndozaEGeVkTFi7ZHbFH20i6eQ9lhV-2BLELBRZgLr-bDN3matG_ApBI3YmMmlfq2U-CoTpXqBjRVRVATMI8Q9CUzHw3Bc4Y61lh0t9HOi0YtOUtPsbynHSijzbfus"
                                />
                                <img
                                    className="w-8 h-8 rounded-full border-2 border-surface object-cover"
                                    alt="professional portrait of female portfolio manager with serious expression"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqme-9P6nIV_VJCFRDTUA4nUcQ7PWSAaqmnZ1gOPC-9n2GQp5uQeF_I2dZJavTt-uw1QM46F0twitALNO_oYvcDWsLooqeboC_u9cQjBZ5xLciNxtRmlMgs6sm69hLRx_d6pgHRsXuKMZTdWGYbEea6YcRRUIVdoUpNHIzGv3whnChiNkWtL9Y5DNEW7UEkTFzFCVmNeb9LuIo-_XboPwBVB_bu6LqdF6hLdu5KjOirQAC39pAVZDWxBx7audaSWC_J47OX_lvD0M"
                                />
                            </div>
                            <span className="text-xs text-on-surface-variant">
                                Expert Consensus:{" "}
                                <span className="text-primary font-bold">Strong Overweight</span>
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
                            78.4%
                        </div>
                        <div className="text-sm text-primary font-bold mb-4">
                            Institutional Bullishness
                        </div>
                        <div className="mt-auto">
                            <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[78%]"></div>
                            </div>
                            <p className="text-[10px] text-on-surface-variant mt-3 leading-tight uppercase tracking-wider">
                                Based on last 24h derivative flow analysis
                            </p>
                        </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-xl flex-1 border-l-2 border-tertiary">
                        <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest block mb-2">
                            Critical Update
                        </span>
                        <h4 className="font-bold text-lg leading-tight mb-2 text-on-surface">
                            Semiconductor Supply Chain Disruptions
                        </h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                            Immediate impact on technology sector rebalancing. Action
                            recommended.
                        </p>
                        <button className="text-tertiary text-xs font-bold flex items-center gap-1 group">
                            Read Intelligence Brief
                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
