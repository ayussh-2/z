"use client";

import { Mail, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFinance } from "@/lib/finance-context";

export function LoginForm() {
    const router = useRouter();
    const { login } = useFinance();
    const [role, setRole] = useState<"Viewer" | "Admin">("Viewer");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }

        // Simulate authentication
        try {
            login(email, password, role);
            setError("");
            // Redirect to dashboard
            router.push("/dashboard");
        } catch (err) {
            setError("Login failed. Please try again.");
        }
    };

    return (
        <>
            {/* Role Toggle Switch */}
            <div className="w-full mb-8 relative">
                <div className="flex p-1.5 bg-surface-container-low rounded-xl border border-outline-variant/10 relative">
                    <div
                        className={`absolute inset-y-1.5 w-[calc(50%-6px)] bg-surface rounded-lg shadow-sm transition-all duration-300 transform ${
                            role === "Viewer"
                                ? "left-1.5"
                                : "left-[calc(50%+0px)]"
                        }`}
                    ></div>
                    <button
                        type="button"
                        onClick={() => setRole("Viewer")}
                        className={`relative z-10 flex-1 py-2 text-sm transition-all ${
                            role === "Viewer"
                                ? "font-semibold text-on-surface"
                                : "font-medium text-on-surface-variant hover:text-on-surface"
                        }`}
                    >
                        Viewer
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole("Admin")}
                        className={`relative z-10 flex-1 py-2 text-sm transition-all ${
                            role === "Admin"
                                ? "font-semibold text-on-surface"
                                : "font-medium text-on-surface-variant hover:text-on-surface"
                        }`}
                    >
                        Admin
                    </button>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 text-center">
                    {role === "Viewer"
                        ? "View-only access to dashboard"
                        : "Full access to manage transactions"}
                </p>
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-4 p-3 bg-tertiary/10 border border-tertiary/30 rounded-lg">
                    <p className="text-sm font-medium text-tertiary">{error}</p>
                </div>
            )}

            {/* Login Form */}
            <form className="w-full space-y-6" onSubmit={handleLogin}>
                {/* Email Field */}
                <div className="space-y-2">
                    <label className="block text-xs font-semibold tracking-wide text-secondary uppercase ml-1">
                        Email Address
                    </label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline-variant group-focus-within:text-primary transition-colors" />
                        <input
                            className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-surface transition-all outline-none text-sm"
                            placeholder="client@wealthlink.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                        <label className="block text-xs font-semibold tracking-wide text-secondary uppercase">
                            Password
                        </label>
                        <a
                            className="text-[11px] font-bold text-primary/80 hover:text-primary transition-colors"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline-variant group-focus-within:text-primary transition-colors" />
                        <input
                            className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-surface transition-all outline-none text-sm"
                            placeholder="••••••••••••"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {/* Primary Action Button */}
                <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    <ShieldCheck className="w-5 h-5" />
                    Secure Login
                </button>
            </form>
        </>
    );
}
