import { Search, Bell, Mail, UserCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function TopNav() {
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
                    <button className="hover:text-blue-500 transition-all active:scale-95">
                        <UserCircle className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
