export function PortfolioLivePulse() {
    return (
        <div className="fixed bottom-8 right-8 flex items-center gap-3 bg-surface-container-highest/80 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/20 shadow-2xl z-50">
            <div className="relative w-2 h-2">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                <div className="relative w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <span className="text-[10px] font-black text-on-surface tracking-[0.2em] uppercase">
                Market Live
            </span>
        </div>
    );
}
