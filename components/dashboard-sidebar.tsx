"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Briefcase,
    ArrowLeftRight,
    Users,
    Settings,
    HelpCircle,
    LogOut,
} from "lucide-react";

const NAV_ITEMS = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Portfolio", href: "/dashboard/portfolio", icon: Briefcase },
    {
        name: "Transactions",
        href: "/dashboard/transactions",
        icon: ArrowLeftRight,
        matchPrefix: true,
    },
    { name: "Advisory", href: "/dashboard/advisory", icon: Users },
];

export function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-[250px] h-screen fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant/10 flex flex-col py-8 px-4 z-50">
            <div className="mb-12 px-4">
                <h1 className="text-2xl text-primary font-bold tracking-tight font-serif">
                    WealthLink
                </h1>
                <p className="text-xs font-medium text-on-surface-variant font-sans uppercase tracking-widest mt-1">
                    Private Banking
                </p>
            </div>
            <nav className="flex-1 space-y-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = item.matchPrefix
                        ? pathname === item.href ||
                          pathname.startsWith(item.href)
                        : pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 font-medium transition-colors group rounded-lg ${
                                isActive
                                    ? "text-primary font-semibold border-r-4 border-primary bg-primary/10"
                                    : "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface"
                            }`}
                        >
                            <item.icon
                                className={`w-6 h-6 group-hover:text-primary transition-colors ${
                                    isActive
                                        ? "fill-primary/20 text-primary"
                                        : ""
                                }`}
                            />
                            <span className="font-sans">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="mt-auto space-y-1 pt-4 border-t border-outline-variant/20">
                <button className="w-full text-left flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface transition-colors rounded-lg group">
                    <LogOut className="w-6 h-6 group-hover:text-primary transition-colors" />
                    <span className="font-sans">Logout</span>
                </button>
            </div>
        </aside>
    );
}
