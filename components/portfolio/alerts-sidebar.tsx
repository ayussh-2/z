import { AlertCircle, AlertTriangle, ArrowRight, ArrowDownLeft, ArrowRightLeft } from "lucide-react";

export function PortfolioAlertsSidebar() {
    return (
        <div className="space-y-8">
            <div className="bg-destructive/10 border border-destructive/30 p-6 rounded-lg relative">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-destructive/20 rounded-lg">
                        <AlertCircle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                        <h4 className="font-bold text-destructive text-sm mb-1">
                            Portfolio Margin Warning
                        </h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                            Margin utilization has exceeded 85% of total
                            collateral value due to market volatility in
                            sector indices.
                        </p>
                        <button className="w-full py-2 bg-destructive text-destructive-foreground text-[10px] font-black uppercase tracking-widest rounded-lg transition-transform active:scale-95">
                            Rebalance Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-tertiary/10 border border-tertiary/30 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-tertiary/20 rounded-lg">
                        <AlertTriangle className="w-6 h-6 text-tertiary" />
                    </div>
                    <div>
                        <h4 className="font-bold text-tertiary text-sm mb-1">
                            Asset Expiry Reminder
                        </h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                            T-Bill Series 4022-B matures in 72 hours.
                            Automatic rollover is currently disabled.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <span className="text-[10px] font-bold text-tertiary border-b border-tertiary/30 cursor-pointer">
                                MODIFY AUTO-PAY
                            </span>
                            <span className="text-[10px] font-bold text-tertiary border-b border-tertiary/30 cursor-pointer">
                                LIQUIDATE
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-overlay p-6 rounded-lg border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border-2 border-primary/30 p-0.5">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            alt="portrait of female investment advisor"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7LGdpejZeCc5gpGmIIKRDnnLBM7hvRgpW56wpuTdTmDp2ZKunFR8JTwLk0NXhwX9xq8id-uxCY_uCpULKMvBdN_hhcyXLbFGgbuvMMG_AJSko1xs0m_mbR3ZDYBaN3V2bKnBDlZwBnSg_U5foQDz__z2oZ8lxtj3eWhZb7f0IQfVaypnVqrYdIjRlozRBfS6hZBAAmKW1AAhUfuZqIw_3OT1rSjwuy975TpiO9ELFEwVnBOsaflyYYsudJCbKlAAjphPNKpMdxL0"
                        />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-on-surface">
                            Elena Vance
                        </p>
                        <p className="text-[10px] text-primary font-bold">
                            EXECUTIVE ADVISOR
                        </p>
                    </div>
                </div>
                <blockquote className="text-xs italic text-on-surface-variant leading-relaxed mb-4">
                    "The current delta in your Venture holdings suggests a
                    shift toward liquidity might be prudent before the
                    upcoming Q3 earnings cycle."
                </blockquote>
                <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all cursor-pointer">
                    <span className="text-[10px] font-black tracking-widest uppercase">
                        Schedule Review
                    </span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-4">
                <h4 className="text-[10px] font-black text-outline uppercase tracking-widest px-1">
                    Recent Activity
                </h4>
                <div className="space-y-1">
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <ArrowDownLeft className="text-outline w-5 h-5 group-hover:text-primary transition-colors" />
                            <span className="text-xs font-medium text-on-surface">
                                Dividend: AAPL
                            </span>
                        </div>
                        <span className="text-xs font-bold text-primary">
                            +$1,240.00
                        </span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <ArrowRightLeft className="text-outline w-5 h-5 group-hover:text-primary transition-colors" />
                            <span className="text-xs font-medium text-on-surface">
                                Trade: BTC/USD
                            </span>
                        </div>
                        <span className="text-xs font-bold text-on-surface">
                            -$12,000.00
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
