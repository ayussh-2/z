// User and Auth Types
export type UserRole = "Viewer" | "Admin";

export interface User {
    id: string;
    email: string;
    role: UserRole;
    name: string;
}

// Transaction Types
export type TransactionType = "Income" | "Expense";
export type TransactionCategory =
    | "Salary"
    | "Bonus"
    | "Investment"
    | "Rent"
    | "Groceries"
    | "Utilities"
    | "Transportation"
    | "Entertainment"
    | "Healthcare"
    | "Shopping"
    | "Dining"
    | "Travel"
    | "Taxes"
    | "Insurance"
    | "Other";

export interface Transaction {
    id: string;
    date: Date;
    amount: number;
    category: TransactionCategory;
    type: TransactionType;
    description: string;
    note?: string;
}

// Portfolio Types
export type AssetClass =
    | "Equities"
    | "Bonds"
    | "Cash"
    | "Real Estate"
    | "Commodities";

export interface Asset {
    id: string;
    name: string;
    symbol?: string;
    class: AssetClass;
    value: number;
    allocation: number; // percentage
    performance: number; // percentage change
}

export interface Portfolio {
    totalValue: number;
    assets: Asset[];
    totalIncome: number;
    totalExpenses: number;
    netChange: number;
    performancePercentage: number;
}

// Analytics/Insights Types
export interface MonthlyData {
    month: string;
    income: number;
    expenses: number;
    balance: number;
}

export interface CategorySpending {
    category: TransactionCategory;
    amount: number;
    percentage: number;
    transactionCount: number;
}

export interface Insight {
    id: string;
    title: string;
    description: string;
    type: "alert" | "positive" | "neutral";
    action?: string;
}

export interface FinanceContextType {
    // Auth
    user: User | null;
    role: UserRole;
    setRole: (role: UserRole) => void;
    login: (email: string, password: string, role: UserRole) => void;
    logout: () => void;

    // Transactions
    transactions: Transaction[];
    filteredTransactions: Transaction[];
    addTransaction: (transaction: Omit<Transaction, "id">) => void;
    editTransaction: (id: string, transaction: Omit<Transaction, "id">) => void;
    deleteTransaction: (id: string) => void;
    setTransactionFilters: (filters: TransactionFilters) => void;

    // Portfolio
    portfolio: Portfolio;

    // Analytics
    monthlyData: MonthlyData[];
    categorySpending: CategorySpending[];
    insights: Insight[];

    // Search/Filter
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export interface TransactionFilters {
    type?: TransactionType;
    category?: TransactionCategory;
    startDate?: Date;
    endDate?: Date;
    minAmount?: number;
    maxAmount?: number;
    searchTerm?: string;
}

// Alert Types
export interface Alert {
    id: string;
    title: string;
    message: string;
    severity: "critical" | "warning" | "info";
    timestamp: Date;
    actionable?: boolean;
    action?: {
        label: string;
        onClick: () => void;
    };
}
