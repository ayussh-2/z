import {
    Transaction,
    MonthlyData,
    CategorySpending,
    Insight,
    Portfolio,
    Asset,
} from "./types";

// Mock transactions data
export const mockTransactions: Transaction[] = [
    {
        id: "1",
        date: new Date(2026, 3, 1),
        amount: 5000,
        category: "Salary",
        type: "Income",
        description: "Monthly Salary",
        note: "March 2026",
    },
    {
        id: "2",
        date: new Date(2026, 3, 2),
        amount: 1200,
        category: "Rent",
        type: "Expense",
        description: "Apartment Rent",
        note: "Monthly rent payment",
    },
    {
        id: "3",
        date: new Date(2026, 3, 3),
        amount: 250,
        category: "Groceries",
        type: "Expense",
        description: "Whole Foods",
    },
    {
        id: "4",
        date: new Date(2026, 3, 5),
        amount: 75,
        category: "Dining",
        type: "Expense",
        description: "Restaurant - Lunch",
    },
    {
        id: "5",
        date: new Date(2026, 3, 6),
        amount: 120,
        category: "Utilities",
        type: "Expense",
        description: "Electric Bill",
    },
    {
        id: "6",
        date: new Date(2026, 3, 8),
        amount: 3000,
        category: "Bonus",
        type: "Income",
        description: "Performance Bonus",
    },
    {
        id: "7",
        date: new Date(2026, 3, 10),
        amount: 89,
        category: "Transportation",
        type: "Expense",
        description: "Gas",
    },
    {
        id: "8",
        date: new Date(2026, 3, 12),
        amount: 450,
        category: "Healthcare",
        type: "Expense",
        description: "Doctor Visit & Prescription",
    },
    {
        id: "9",
        date: new Date(2026, 3, 15),
        amount: 200,
        category: "Entertainment",
        type: "Expense",
        description: "Movie Tickets & Streaming",
    },
    {
        id: "10",
        date: new Date(2026, 3, 18),
        amount: 500,
        category: "Shopping",
        type: "Expense",
        description: "Clothing Store",
    },
    {
        id: "11",
        date: new Date(2026, 3, 20),
        amount: 150,
        category: "Dining",
        type: "Expense",
        description: "Dinner with friends",
    },
    {
        id: "12",
        date: new Date(2026, 3, 22),
        amount: 1500,
        category: "Travel",
        type: "Expense",
        description: "Flight Booking",
    },
    {
        id: "13",
        date: new Date(2026, 3, 25),
        amount: 300,
        category: "Investment",
        type: "Income",
        description: "Dividend Payment",
    },
    {
        id: "14",
        date: new Date(2026, 3, 28),
        amount: 50,
        category: "Groceries",
        type: "Expense",
        description: "Whole Foods",
    },
];

// Mock monthly data for charts
export const mockMonthlyData: MonthlyData[] = [
    { month: "Jan", income: 8000, expenses: 5200, balance: 42000 },
    { month: "Feb", income: 8500, expenses: 5500, balance: 45000 },
    { month: "Mar", income: 9000, expenses: 6000, balance: 48000 },
    { month: "Apr", income: 8000, expenses: 4800, balance: 51200 },
    { month: "May", income: 9500, expenses: 7000, balance: 53700 },
    { month: "Jun", income: 8200, expenses: 5300, balance: 56600 },
    { month: "Jul", income: 8800, expenses: 6200, balance: 59200 },
    { month: "Aug", income: 9200, expenses: 5900, balance: 62500 },
    { month: "Sep", income: 8500, expenses: 6100, balance: 65000 },
    { month: "Oct", income: 9800, expenses: 7200, balance: 67600 },
    { month: "Nov", income: 10000, expenses: 6800, balance: 70800 },
    { month: "Dec", income: 11000, expenses: 7500, balance: 74300 },
];

// Mock category spending
export const generateCategorySpending = (
    transactions: Transaction[],
): CategorySpending[] => {
    const categoryMap = new Map<string, { amount: number; count: number }>();

    transactions
        .filter((t) => t.type === "Expense")
        .forEach((t) => {
            const existing = categoryMap.get(t.category) || {
                amount: 0,
                count: 0,
            };
            categoryMap.set(t.category, {
                amount: existing.amount + t.amount,
                count: existing.count + 1,
            });
        });

    const total = Array.from(categoryMap.values()).reduce(
        (sum, item) => sum + item.amount,
        0,
    );
    const spending: CategorySpending[] = Array.from(categoryMap.entries()).map(
        ([category, data]) => ({
            category: category as any,
            amount: data.amount,
            percentage: total > 0 ? (data.amount / total) * 100 : 0,
            transactionCount: data.count,
        }),
    );

    return spending.sort((a, b) => b.amount - a.amount);
};

// Mock assets
export const mockAssets: Asset[] = [
    {
        id: "1",
        name: "ETF - S&P 500",
        symbol: "SPY",
        class: "Equities",
        value: 35000,
        allocation: 45,
        performance: 12.5,
    },
    {
        id: "2",
        name: "Tech Stocks",
        symbol: "TECH",
        class: "Equities",
        value: 21000,
        allocation: 27,
        performance: 15.2,
    },
    {
        id: "3",
        name: "Bonds ETF",
        symbol: "BND",
        class: "Bonds",
        value: 13000,
        allocation: 17,
        performance: 2.1,
    },
    {
        id: "4",
        name: "Money Market Fund",
        class: "Cash",
        value: 8000,
        allocation: 10,
        performance: 0.5,
    },
    {
        id: "5",
        name: "Real Estate Investment",
        class: "Real Estate",
        value: 4000,
        allocation: 1,
        performance: 3.8,
    },
];

// Generate mock portfolio
export const generatePortfolio = (transactions: Transaction[]): Portfolio => {
    const totalIncome = transactions
        .filter((t) => t.type === "Income")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
        .filter((t) => t.type === "Expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalAssetValue = mockAssets.reduce(
        (sum, asset) => sum + asset.value,
        0,
    );
    const totalValue = totalAssetValue + (totalIncome - totalExpenses);

    return {
        totalValue,
        assets: mockAssets,
        totalIncome,
        totalExpenses,
        netChange: totalIncome - totalExpenses,
        performancePercentage: 8.3,
    };
};

// Generate insights
export const generateInsights = (
    transactions: Transaction[],
    portfolio: Portfolio,
): Insight[] => {
    const insights: Insight[] = [];

    // Highest spending category
    const categorySpending = generateCategorySpending(transactions);
    if (categorySpending.length > 0) {
        const highest = categorySpending[0];
        insights.push({
            id: "1",
            title: "Highest Spending Category",
            description: `You spent $${highest.amount.toFixed(2)} on ${highest.category} this month (${highest.percentage.toFixed(1)}% of expenses).`,
            type: highest.percentage > 30 ? "alert" : "neutral",
        });
    }

    // Income vs Expenses comparison
    if (portfolio.totalIncome > 0) {
        const expenseRatio =
            (portfolio.totalExpenses / portfolio.totalIncome) * 100;
        insights.push({
            id: "2",
            title: "Expense Ratio",
            description: `Your expenses are ${expenseRatio.toFixed(1)}% of your income. ${
                expenseRatio > 80
                    ? "Consider reducing expenses."
                    : "Good financial health!"
            }`,
            type:
                expenseRatio > 90
                    ? "alert"
                    : expenseRatio > 80
                      ? "alert"
                      : "positive",
        });
    }

    // Monthly growth
    if (mockMonthlyData.length >= 2) {
        const lastMonth = mockMonthlyData[mockMonthlyData.length - 1];
        const prevMonth = mockMonthlyData[mockMonthlyData.length - 2];
        const growth =
            ((lastMonth.balance - prevMonth.balance) / prevMonth.balance) * 100;
        insights.push({
            id: "3",
            title: "Balance Growth",
            description: `Your balance grew by ${growth.toFixed(1)}% compared to last month.`,
            type: growth > 0 ? "positive" : "alert",
        });
    }

    // Save opportunities
    const currentMonth = new Date().getMonth();
    const currentYearTransactions = transactions.filter(
        (t) => t.date.getMonth() === currentMonth,
    );
    const isLowSpendingMonth =
        currentYearTransactions.filter((t) => t.type === "Expense").length ===
        0;

    if (!isLowSpendingMonth) {
        insights.push({
            id: "4",
            title: "Investment Opportunity",
            description: `You have $${(portfolio.netChange / 2).toFixed(2)} available to invest. Consider diversifying your portfolio.`,
            type: "positive",
        });
    }

    return insights;
};
