import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardFilters } from "@/components/dashboard/filters";
import { TransactionsTable } from "@/components/dashboard/transactions-table";

export default function DashboardPage() {
    return (
        <>
            <DashboardHeader />
            <DashboardFilters />
            <TransactionsTable />
        </>
    );
}
