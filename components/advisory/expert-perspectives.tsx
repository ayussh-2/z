import { ExternalLink } from "lucide-react";

export function AdvisoryExpertPerspectives() {
    return (
        <div className="col-span-12 lg:col-span-5">
            <h3 className="text-xl font-extrabold tracking-tight mb-6 text-on-surface font-serif">
                Expert Perspectives
            </h3>
            
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
                <div className="p-6 border-b border-outline-variant/10">
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            className="w-10 h-10 rounded-full grayscale hover:grayscale-0 transition-all object-cover"
                            alt="close up of a professional male analyst in late 40s with a confident expression"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhSqrbK8ug4kmNfyGEimgM6hDuoyHgSDuRAA7-bUwr-vVqGb0-tSDTmvhIoWPZlTcHu-vLA3lbvNv3Fd6t3gON2tXufD_bL1u1ElUCAF4B7FQXr0nvLjvbhZOsblX7IQDzgb4E6w_JZE0Z1kIlFo1IITdVfIVGlrvXrum449ASq1XuRqXT8csmf__fKj7RUsnWI3-1YWKHwG1q_FrVLSmx1Xq9ogytMGv1p-TRURDHEt3a6XO29u2YdUL-awg4kcD7pn_wKIJWj4w"
                        />
                        <div>
                            <div className="text-sm font-bold text-on-surface">
                                Julian Vane
                            </div>
                            <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                                Global Head of Strategy
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant italic leading-relaxed">
                        "The traditional 60/40 model is under pressure. We are increasing our
                        allocation to private credit and infrastructure as a hedge against
                        structural inflation."
                    </p>
                </div>
                
                <button className="w-full p-4 bg-surface-container-high/50 flex items-center justify-between hover:bg-surface-container-high transition-colors group">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                        View Full Strategy Memo
                    </span>
                    <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                </button>
            </div>
        </div>
    );
}
