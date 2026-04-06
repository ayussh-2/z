"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useFinance } from "@/lib/finance-context";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export function TransactionsTable() {
    const { filteredTransactions, role, deleteTransaction } = useFinance();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTransactions = filteredTransactions.slice(
        startIndex,
        startIndex + itemsPerPage,
    );

    const getCategoryColor = (category: string): any => {
        const colorMap: Record<string, string> = {
            Salary: "blue",
            Bonus: "emerald",
            Investment: "cyan",
            Rent: "slate",
            Groceries: "green",
            Utilities: "amber",
            Transportation: "orange",
            Entertainment: "purple",
            Healthcare: "red",
            Shopping: "pink",
            Dining: "rose",
            Travel: "indigo",
            Taxes: "gray",
            Insurance: "violet",
            Other: "zinc",
        };
        return colorMap[category] || "slate";
    };

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const formatAmount = (amount: number, type: "Income" | "Expense") => {
        const prefix = type === "Income" ? "+" : "-";
        return `${prefix} $${amount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`;
    };

    const getAmountClass = (type: "Income" | "Expense") => {
        return type === "Income"
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-on-surface";
    };

    return (
        <div className="bg-surface-container-low border border-outline-variant/10 rounded-xl shadow-sm overflow-hidden">
            <Table>
                <TableHeader className="bg-surface-container-highest/30">
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="px-8 text-on-surface-variant font-bold">
                            Date
                        </TableHead>
                        <TableHead className="text-on-surface-variant font-bold">
                            Description
                        </TableHead>
                        <TableHead className="text-on-surface-variant font-bold">
                            Category
                        </TableHead>
                        <TableHead className="text-on-surface-variant font-bold">
                            Type
                        </TableHead>
                        <TableHead className="px-8 text-right text-on-surface-variant font-bold">
                            Amount
                        </TableHead>
                        {role === "Admin" && (
                            <TableHead className="text-center text-on-surface-variant font-bold">
                                Actions
                            </TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedTransactions.length > 0 ? (
                        paginatedTransactions.map((tx, idx) => (
                            <TableRow key={tx.id}>
                                <TableCell className="px-8 font-medium text-on-surface">
                                    {formatDate(tx.date)}
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-on-surface">
                                            {tx.description}
                                        </span>
                                        {tx.note && (
                                            <span className="text-xs text-on-surface-variant">
                                                {tx.note}
                                            </span>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={getCategoryColor(tx.category)}
                                    >
                                        {tx.category}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-on-surface-variant">
                                    {tx.type}
                                </TableCell>
                                <TableCell className="px-8 text-right">
                                    <span
                                        className={`text-sm font-bold font-serif ${getAmountClass(
                                            tx.type,
                                        )}`}
                                    >
                                        {formatAmount(tx.amount, tx.type)}
                                    </span>
                                </TableCell>
                                {role === "Admin" && (
                                    <TableCell className="text-center">
                                        <button
                                            onClick={() =>
                                                deleteTransaction(tx.id)
                                            }
                                            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={role === "Admin" ? 6 : 5}
                                className="text-center py-8 text-on-surface-variant"
                            >
                                No transactions found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="px-8 py-6 flex items-center justify-between border-t border-outline-variant/10 bg-surface-container-low">
                <span className="text-sm text-on-surface-variant">
                    Showing{" "}
                    {paginatedTransactions.length > 0 ? startIndex + 1 : 0} to{" "}
                    {Math.min(
                        startIndex + itemsPerPage,
                        filteredTransactions.length,
                    )}{" "}
                    of {filteredTransactions.length} entries
                </span>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        disabled={currentPage === 1}
                        onClick={() =>
                            setCurrentPage(Math.max(1, currentPage - 1))
                        }
                    >
                        Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                            <Button
                                key={page}
                                variant={
                                    currentPage === page ? "default" : "outline"
                                }
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </Button>
                        ),
                    )}
                    <Button
                        variant="outline"
                        disabled={currentPage === totalPages}
                        onClick={() =>
                            setCurrentPage(
                                Math.min(totalPages, currentPage + 1),
                            )
                        }
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
