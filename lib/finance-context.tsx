"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
    FinanceContextType,
    UserRole,
    User,
    Transaction,
    TransactionFilters,
    Portfolio,
    MonthlyData,
    CategorySpending,
    Insight,
} from "@/lib/types";
import {
    mockTransactions,
    mockMonthlyData,
    generateCategorySpending,
    generatePortfolio,
    generateInsights,
} from "@/lib/mock-data";

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

// Mock user for different roles
const mockUsers: Record<UserRole, User> = {
    Viewer: {
        id: "user-1",
        email: "viewer@wealthlink.com",
        role: "Viewer",
        name: "John Viewer",
    },
    Admin: {
        id: "user-2",
        email: "admin@wealthlink.com",
        role: "Admin",
        name: "Jane Admin",
    },
};

export function FinanceProvider({ children }: { children: React.ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [filteredTransactions, setFilteredTransactions] = useState<
        Transaction[]
    >([]);
    const [role, setRole] = useState<UserRole>("Viewer");
    const [user, setUser] = useState<User | null>(null);
    const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
    const [monthlyData, setMonthlyData] =
        useState<MonthlyData[]>(mockMonthlyData);
    const [categorySpending, setCategorySpending] = useState<
        CategorySpending[]
    >([]);
    const [insights, setInsights] = useState<Insight[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState<TransactionFilters>({});

    // Initialize data from localStorage or mock data
    useEffect(() => {
        const savedTransactions = localStorage.getItem("transactions");
        const savedRole = localStorage.getItem("userRole") as UserRole | null;
        const savedUser = localStorage.getItem("user");

        const txns = savedTransactions
            ? JSON.parse(savedTransactions)
            : mockTransactions;
        const currentRole = savedRole || "Viewer";
        const currentUser = savedUser
            ? JSON.parse(savedUser)
            : mockUsers["Viewer"];

        // Convert date strings back to Date objects
        const parsedTxns = txns.map((t: any) => ({
            ...t,
            date: new Date(t.date),
        }));

        setTransactions(parsedTxns);
        setRole(currentRole);
        setUser(currentUser);

        // Generate derived data
        const portfolioData = generatePortfolio(parsedTxns);
        setPortfolio(portfolioData);

        const spending = generateCategorySpending(parsedTxns);
        setCategorySpending(spending);

        const appInsights = generateInsights(parsedTxns, portfolioData);
        setInsights(appInsights);
    }, []);

    // Apply filters and search
    useEffect(() => {
        let filtered = [...transactions];

        // Apply type filter
        if (filters.type) {
            filtered = filtered.filter((t) => t.type === filters.type);
        }

        // Apply category filter
        if (filters.category) {
            filtered = filtered.filter((t) => t.category === filters.category);
        }

        // Apply date range filter
        if (filters.startDate) {
            filtered = filtered.filter(
                (t) =>
                    new Date(t.date.toDateString()) >=
                    new Date(filters.startDate!.toDateString()),
            );
        }
        if (filters.endDate) {
            filtered = filtered.filter(
                (t) =>
                    new Date(t.date.toDateString()) <=
                    new Date(filters.endDate!.toDateString()),
            );
        }

        // Apply amount range filter
        if (filters.minAmount) {
            filtered = filtered.filter((t) => t.amount >= filters.minAmount!);
        }
        if (filters.maxAmount) {
            filtered = filtered.filter((t) => t.amount <= filters.maxAmount!);
        }

        // Apply search term
        if (searchTerm) {
            const search = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (t) =>
                    t.description.toLowerCase().includes(search) ||
                    t.category.toLowerCase().includes(search) ||
                    (t.note && t.note.toLowerCase().includes(search)),
            );
        }

        // Sort by date descending
        filtered.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        setFilteredTransactions(filtered);
    }, [transactions, filters, searchTerm]);

    const addTransaction = (transaction: Omit<Transaction, "id">) => {
        if (role !== "Admin") {
            console.warn("Only Admin users can add transactions");
            return;
        }

        const newTransaction: Transaction = {
            ...transaction,
            id: Date.now().toString(),
        };

        const newTransactions = [...transactions, newTransaction];
        setTransactions(newTransactions);
        localStorage.setItem("transactions", JSON.stringify(newTransactions));

        // Update portfolio and insights
        if (portfolio) {
            const updatedPortfolio = generatePortfolio(newTransactions);
            setPortfolio(updatedPortfolio);
            setInsights(generateInsights(newTransactions, updatedPortfolio));
            setCategorySpending(generateCategorySpending(newTransactions));
        }
    };

    const editTransaction = (
        id: string,
        transaction: Omit<Transaction, "id">,
    ) => {
        if (role !== "Admin") {
            console.warn("Only Admin users can edit transactions");
            return;
        }

        const newTransactions = transactions.map((t) =>
            t.id === id ? { ...transaction, id } : t,
        );
        setTransactions(newTransactions);
        localStorage.setItem("transactions", JSON.stringify(newTransactions));

        // Update portfolio and insights
        if (portfolio) {
            const updatedPortfolio = generatePortfolio(newTransactions);
            setPortfolio(updatedPortfolio);
            setInsights(generateInsights(newTransactions, updatedPortfolio));
            setCategorySpending(generateCategorySpending(newTransactions));
        }
    };

    const deleteTransaction = (id: string) => {
        if (role !== "Admin") {
            console.warn("Only Admin users can delete transactions");
            return;
        }

        const newTransactions = transactions.filter((t) => t.id !== id);
        setTransactions(newTransactions);
        localStorage.setItem("transactions", JSON.stringify(newTransactions));

        // Update portfolio and insights
        if (portfolio) {
            const updatedPortfolio = generatePortfolio(newTransactions);
            setPortfolio(updatedPortfolio);
            setInsights(generateInsights(newTransactions, updatedPortfolio));
            setCategorySpending(generateCategorySpending(newTransactions));
        }
    };

    const login = (email: string, password: string, loginRole: UserRole) => {
        const newUser = mockUsers[loginRole];
        setUser(newUser);
        setRole(loginRole);
        localStorage.setItem("user", JSON.stringify(newUser));
        localStorage.setItem("userRole", loginRole);
    };

    const logout = () => {
        setUser(null);
        setRole("Viewer");
        localStorage.removeItem("user");
        localStorage.removeItem("userRole");
    };

    const setTransactionFilters = (newFilters: TransactionFilters) => {
        setFilters(newFilters);
    };

    const value: FinanceContextType = {
        user,
        role,
        setRole,
        login,
        logout,
        transactions,
        filteredTransactions,
        addTransaction,
        editTransaction,
        deleteTransaction,
        setTransactionFilters,
        portfolio: portfolio || {
            totalValue: 0,
            assets: [],
            totalIncome: 0,
            totalExpenses: 0,
            netChange: 0,
            performancePercentage: 0,
        },
        monthlyData,
        categorySpending,
        insights,
        searchTerm,
        setSearchTerm,
    };

    return (
        <FinanceContext.Provider value={value}>
            {children}
        </FinanceContext.Provider>
    );
}

export function useFinance() {
    const context = useContext(FinanceContext);
    if (context === undefined) {
        throw new Error("useFinance must be used within a FinanceProvider");
    }
    return context;
}
