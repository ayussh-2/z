import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { TopNav } from "@/components/dashboard/top-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-surface text-on-surface min-h-screen">
            <DashboardSidebar />
            <TopNav />
            <main className="ml-[250px] pt-24 px-12 pb-12 min-h-screen bg-surface-container-low">
                {children}
            </main>
        </div>
    );
}
