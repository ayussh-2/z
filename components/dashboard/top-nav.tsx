"use client";

import { Search, Bell, Mail, UserCircle, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useFinance } from "@/lib/finance-context";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function TopNav() {
    const { user, role, logout } = useFinance();
    const router = useRouter();
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <header className="fixed top-0 right-0 w-[calc(100%-250px)] z-40 bg-surface-container-lowest border-b border-outline-variant/10 flex justify-end items-center h-16 px-8 ml-[250px] transition-colors">
            <div className="flex items-center gap-6">
                <div className="relative group">
                    <span className="absolute inset-y-0 left-3 flex items-center text-outline">
                        <Search className="w-4 h-4 text-outline" />
                    </span>
                    <input
                        className="bg-background border-none rounded-xl pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-2 focus:ring-primary"
                        placeholder="Search accounts..."
                        type="text"
                    />
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                    <ThemeToggle />
                    <button className="hover:text-blue-500 transition-all active:scale-95">
                        <Bell className="w-6 h-6" />
                    </button>
                    <button className="hover:text-blue-500 transition-all active:scale-95">
                        <Mail className="w-6 h-6" />
                    </button>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="hover:text-blue-500 transition-all active:scale-95"
                        >
                            <UserCircle className="w-6 h-6" />
                        </button>

                        {showUserMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest border border-outline-variant/30 rounded-lg shadow-lg p-2 z-50">
                                <div className="px-4 py-3 border-b border-outline-variant/10">
                                    <p className="text-sm font-semibold text-on-surface">
                                        {user?.name}
                                    </p>
                                    <p className="text-xs text-on-surface-variant">
                                        {user?.email}
                                    </p>
                                    <p className="text-xs text-primary font-semibold mt-1">
                                        Role: {role}
                                    </p>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-2 text-left flex items-center gap-2 text-on-surface hover:bg-surface-container-high rounded-md transition-colors mt-2"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
