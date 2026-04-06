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

export function TransactionsTable() {
    const transactions = [
        {
            date: "Oct 24, 2023",
            description: "Morgan Stanley Dividends",
            subtext: "Global Equity Yield Portfolio",
            category: "Investment",
            categoryVariant: "blue",
            type: "Credit",
            amount: "+ $14,250.00",
            amountClass: "text-emerald-600 dark:text-emerald-400",
            rowClass: "",
        },
        {
            date: "Oct 22, 2023",
            description: "Private Jet Charter - Blade",
            subtext: "Travel / Concierge",
            category: "Lifestyle",
            categoryVariant: "slate",
            type: "Debit",
            amount: "- $8,400.00",
            amountClass: "text-on-surface",
            rowClass: "bg-surface-container-high/30",
        },
        {
            date: "Oct 20, 2023",
            description: "Aspen Property Management",
            subtext: "Residential Maintenance",
            category: "Real Estate",
            categoryVariant: "purple",
            type: "Debit",
            amount: "- $2,150.00",
            amountClass: "text-on-surface",
            rowClass: "",
        },
        {
            date: "Oct 18, 2023",
            description: "Venture Seed Fund Distribution",
            subtext: "Horizon IV Private Equity",
            category: "Capital Gain",
            categoryVariant: "blue",
            type: "Credit",
            amount: "+ $152,000.00",
            amountClass: "text-emerald-600 dark:text-emerald-400",
            rowClass: "bg-surface-container-high/30",
        },
        {
            date: "Oct 15, 2023",
            description: "Le Bernardin Dinner",
            subtext: "Entertainment / Dining",
            category: "Lifestyle",
            categoryVariant: "slate",
            type: "Debit",
            amount: "- $1,245.50",
            amountClass: "text-on-surface",
            rowClass: "",
        },
        {
            date: "Oct 12, 2023",
            description: "Wire Transfer Inbound",
            subtext: "Ref: SALE-7728-REAL",
            category: "Asset Sale",
            categoryVariant: "emerald",
            type: "Credit",
            amount: "+ $1,250,000.00",
            amountClass: "text-emerald-600 dark:text-emerald-400",
            rowClass: "bg-surface-container-high/30",
        },
    ];

    return (
        <div className="bg-surface-container-low border border-outline-variant/10 rounded-xl shadow-sm overflow-hidden">
            <Table>
                <TableHeader className="bg-surface-container-highest/30">
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="px-8 text-on-surface-variant font-bold">Date</TableHead>
                        <TableHead className="text-on-surface-variant font-bold">Description</TableHead>
                        <TableHead className="text-on-surface-variant font-bold">Category</TableHead>
                        <TableHead className="text-on-surface-variant font-bold">Type</TableHead>
                        <TableHead className="px-8 text-right text-on-surface-variant font-bold">
                            Amount
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((tx, idx) => (
                        <TableRow key={idx} className={tx.rowClass}>
                            <TableCell className="px-8 font-medium text-on-surface">
                                {tx.date}
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-on-surface">
                                        {tx.description}
                                    </span>
                                    <span className="text-xs text-on-surface-variant">
                                        {tx.subtext}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant={tx.categoryVariant as any}>
                                    {tx.category}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-on-surface-variant">
                                {tx.type}
                            </TableCell>
                            <TableCell className="px-8 text-right">
                                <span
                                    className={`text-sm font-bold font-serif ${tx.amountClass}`}
                                >
                                    {tx.amount}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="px-8 py-6 flex items-center justify-between border-t border-outline-variant/10 bg-surface-container-low">
                <span className="text-sm text-on-surface-variant">
                    Showing 1 to 6 of 1,245 entries
                </span>
                <div className="flex gap-2">
                    <Button variant="outline" disabled>
                        Previous
                    </Button>
                    <Button variant="default">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Next</Button>
                </div>
            </div>
        </div>
    );
}
