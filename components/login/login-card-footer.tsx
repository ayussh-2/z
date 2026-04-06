import { Shield, Smartphone } from "lucide-react";

export function LoginCardFooter() {
    return (
        <div className="mt-10 pt-8 border-t border-outline-variant/20 w-full text-center">
            <p className="text-[10px] text-on-surface-variant leading-relaxed tracking-normal font-sans">
                This is a secure, encrypted session. By logging in, you agree to
                our <br />
                <span className="underline cursor-pointer hover:text-on-surface transition-colors">
                    Security Standards
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer hover:text-on-surface transition-colors">
                    Privacy Policy
                </span>
                .
            </p>
            <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-1.5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">
                        AES-256 Encryption
                    </span>
                </div>
                <div className="flex items-center gap-1.5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">
                        MFA Ready
                    </span>
                </div>
            </div>
        </div>
    );
}
