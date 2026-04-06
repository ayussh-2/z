"use client";

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
import { useFinance } from "@/lib/finance-context";
import { useState } from "react";
import { TransactionType, TransactionCategory } from "@/lib/types";

const categories: TransactionCategory[] = [
    "Salary",
    "Bonus",
    "Investment",
    "Rent",
    "Groceries",
    "Utilities",
    "Transportation",
    "Entertainment",
    "Healthcare",
    "Shopping",
    "Dining",
    "Travel",
    "Taxes",
    "Insurance",
    "Other",
];

const types: TransactionType[] = ["Income", "Expense"];

export function DashboardFilters() {
    const {
        setTransactionFilters,
        setSearchTerm,
        searchTerm,
        filteredTransactions,
    } = useFinance();
    const [activeCategory, setActiveCategory] = useState<
        TransactionCategory | "All Categories"
    >("All Categories");
    const [activeType, setActiveType] = useState<TransactionType | "All Types">(
        "All Types",
    );
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);

    const handleCategoryChange = (
        category: TransactionCategory | "All Categories",
    ) => {
        setActiveCategory(category);
        setTransactionFilters({
            category: category === "All Categories" ? undefined : category,
        });
        setShowCategoryDropdown(false);
    };

    const handleTypeChange = (type: TransactionType | "All Types") => {
        setActiveType(type);
        setTransactionFilters({
            type: type === "All Types" ? undefined : type,
        });
        setShowTypeDropdown(false);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleExportCSV = () => {
        const headers = ["Date", "Description", "Category", "Type", "Amount"];
        const rows = filteredTransactions.map((tx) => [
            new Date(tx.date).toLocaleDateString(),
            tx.description,
            tx.category,
            tx.type,
            `${tx.type === "Income" ? "+" : "-"}$${tx.amount}`,
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `transactions-${new Date().toISOString().split("T")[0]}.csv`;
        a.click();
    };

    return (
        <div className="rounded-xl p-4 flex flex-wrap items-center gap-4 mb-8 shadow-sm bg-surface-container-lowest">
            {/* Category Filter */}
            <div className="relative">
                <button
                    onClick={() =>
                        setShowCategoryDropdown(!showCategoryDropdown)
                    }
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent hover:border-outline-variant transition-all cursor-pointer bg-background"
                >
                    <Filter className="text-on-surface-variant w-4 h-4" />
                    <span className="text-sm font-medium">
                        {activeCategory}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                </button>

                {showCategoryDropdown && (
                    <div className="absolute top-full mt-2 w-48 bg-surface-container-highest border border-outline-variant/30 rounded-lg shadow-lg z-50">
                        <div className="max-h-48 overflow-y-auto">
                            <button
                                onClick={() =>
                                    handleCategoryChange("All Categories")
                                }
                                className="w-full text-left px-4 py-2 hover:bg-surface-container-high text-sm font-medium"
                            >
                                All Categories
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className="w-full text-left px-4 py-2 hover:bg-surface-container-high text-sm"
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Type Filter */}
            <div className="relative">
                <button
                    onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent hover:border-outline-variant transition-all cursor-pointer bg-background"
                >
                    <GitMerge className="text-on-surface-variant w-4 h-4" />
                    <span className="text-sm font-medium">{activeType}</span>
                    <ChevronDown className="w-4 h-4" />
                </button>

                {showTypeDropdown && (
                    <div className="absolute top-full mt-2 w-40 bg-surface-container-highest border border-outline-variant/30 rounded-lg shadow-lg z-50">
                        <button
                            onClick={() => handleTypeChange("All Types")}
                            className="w-full text-left px-4 py-2 hover:bg-surface-container-high text-sm font-medium"
                        >
                            All Types
                        </button>
                        {types.map((type) => (
                            <button
                                key={type}
                                onClick={() => handleTypeChange(type)}
                                className="w-full text-left px-4 py-2 hover:bg-surface-container-high text-sm"
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="h-6 w-px bg-outline-variant/30 mx-2"></div>

            <div className="flex-1 max-w-xs max-sm:max-w-none bg-background rounded-lg relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline-variant" />
                <input
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by description..."
                    type="text"
                    className="w-full pl-10 pr-4 py-2 bg-background rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"
                />
            </div>

            <Button
                variant="ghost"
                className="ml-auto cursor-pointer"
                onClick={handleExportCSV}
                disabled={filteredTransactions.length === 0}
            >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
            </Button>
        </div>
    );
}
