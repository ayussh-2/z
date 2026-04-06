import { LoginBrandAnchor } from "@/components/login/brand-anchor";
import { LoginForm } from "@/components/login/login-form";
import { LoginCardFooter } from "@/components/login/login-card-footer";
import { LoginPageFooter } from "@/components/login/page-footer";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background text-on-surface">
            <main className="flex-grow flex items-center justify-center p-6 w-full relative z-10">
                {/* Login Card */}
                <div className="relative w-full max-w-[440px] bg-surface rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl shadow-primary/5 border-t-[3px] border-t-primary">
                    <div className="p-10 flex flex-col items-center">
                        <LoginBrandAnchor />
                        <LoginForm />
                        <LoginCardFooter />
                    </div>
                </div>
            </main>

            <LoginPageFooter />
        </div>
    );
}
