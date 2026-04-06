import {
    Filter,
    ChevronDown,
    GitMerge,
    Calendar,
    Search,
    Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const filterOptions = [
    { label: "All Categories", icon: Filter },
    { label: "Transaction Type", icon: GitMerge },
    { label: "Last 30 Days", icon: Calendar },
];

export function DashboardFilters() {
    return (
        <div className="rounded-xl p-4 flex flex-wrap items-center gap-4 mb-8 shadow-sm bg-surface-container-lowest">
            {filterOptions.map((option, idx) => {
                const Icon = option.icon;
                return (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2  rounded-lg border border-transparent hover:border-outline-variant transition-all cursor-pointer bg-background"
                    >
                        <Icon className="text-on-surface-variant w-4 h-4" />
                        <span className="text-sm font-medium">
                            {option.label}
                        </span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                );
            })}

            <div className="h-6 w-px bg-outline-variant/30 mx-2"></div>

            <div className="flex-1 max-w-xs max-sm:max-w-none bg-background rounded-lg">
                <Input
                    icon={<Search className="w-4 h-4" />}
                    placeholder="Search by description or amount..."
                    type="text"
                />
            </div>

            <Button
                variant="ghost"
                className="ml-auto cursor-pointer"
                size="default"
            >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
            </Button>
        </div>
    );
}
