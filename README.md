# Wealth Link - Finance Dashboard

A comprehensive finance dashboard application built with Next.js 16, React 19, and TypeScript. Wealth Link provides portfolio management, transaction tracking, and AI-powered financial insights with role-based access control.

## Overview

Wealth Link is a production-ready finance dashboard featuring complete authentication, state management, transaction filtering, portfolio tracking, and dynamic insights generation. The application uses mock data for demonstration purposes and is structured for easy backend integration.

## Features

### Authentication and Access Control

- Role-based authentication (Viewer and Admin roles)
- Mock authentication system accepting any credentials
- Session persistence with localStorage
- User menu with logout functionality
- Role-specific UI differences

### Dashboard

- Real-time financial metrics
- Total wealth, income, and expense tracking
- 12-month balance history visualization
- Asset allocation overview
- Critical alerts and AI-generated insights
- Recent transaction feed

### Transaction Management

- View all transactions with real-time data binding
- Advanced filtering by transaction type
- Category-based filtering (15 categories)
- Search functionality by description
- Pagination (6 items per page)
- CSV export capability
- Admin delete functionality

### Portfolio Page

- Total equity value display
- Asset allocation breakdown
- Market insights and analysis
- Risk assessment
- Recent transaction activity feed

### Advisory Dashboard

- Portfolio intelligence
- Market sentiment analysis
- Performance tracking
- Alerts and recommendations
- Financial insights

### Additional Features

- Dark mode support with theme toggle
- Responsive design for mobile, tablet, and desktop
- Data persistence using localStorage
- Real-time calculations and metrics
- Smooth transitions and animations
- TypeScript strict mode

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or bun package manager

### Installation

1. Clone or navigate to the project directory:

```bash
cd wealth-link
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## Authentication

The application uses mock authentication for demonstration purposes. Any email and password combination will work.

### Test Credentials - Viewer Role

- Role: Viewer
- Email: viewer@wealthlink.com (or any email)
- Password: password (or any password)
- Access: Read-only access to all features

### Test Credentials - Admin Role

- Role: Admin
- Email: admin@wealthlink.com (or any email)
- Password: password (or any password)
- Access: Full CRUD operations on transactions plus all Viewer features

## Usage Guide

### Dashboard Navigation

- Dashboard: View key metrics, portfolio summary, and recent transactions
- Portfolio: Check asset allocation and market insights
- Transactions: View, filter, and manage transactions
- Advisory: Review AI-generated insights and recommendations

### Filtering Transactions

1. Navigate to the Transactions page
2. Use filter dropdowns to select transaction type or category
3. Use the search bar to find transactions by description
4. Combine multiple filters for precise results
5. Click "Export CSV" to download filtered data

### Role-Based Features

#### Viewer (Read-Only)

- View all dashboard metrics
- Filter and search transactions
- Export data as CSV
- Review portfolio and advisory pages

#### Admin (Full Access)

- All Viewer capabilities
- Delete transactions from the table
- Manage transaction data

### Exporting Data

1. Navigate to the Transactions page
2. Apply desired filters
3. Click the "Export CSV" button
4. Transactions will download as a CSV file

## Project Structure

```
wealth-link/
├── app/
│   ├── layout.tsx                 Root layout with FinanceProvider
│   ├── globals.css               Global styles
│   ├── (login)/
│   │   └── page.tsx              Login page
│   └── dashboard/
│       ├── page.tsx              Main dashboard
│       ├── layout.tsx            Dashboard layout
│       ├── portfolio/
│       │   └── page.tsx          Portfolio page
│       ├── advisory/
│       │   └── page.tsx          Advisory page
│       └── transactions/
│           └── page.tsx          Transactions page
├── components/
│   ├── dashboard/
│   │   ├── hero-section.tsx      Dashboard header
│   │   ├── metrics-grid.tsx      Key metrics display
│   │   ├── portfolio-summary.tsx  Portfolio overview
│   │   ├── critical-alerts.tsx   Alerts display
│   │   ├── transactions-table.tsx Transaction list
│   │   ├── filters.tsx           Filtering interface
│   │   └── top-nav.tsx           Top navigation
│   ├── portfolio/
│   │   ├── hero.tsx              Portfolio header
│   │   ├── category-allocation.tsx Asset allocation
│   │   ├── market-insights.tsx   Market data
│   │   └── alerts-sidebar.tsx    Alerts sidebar
│   ├── advisory/
│   │   └── hero-insights.tsx     Advisory insights
│   ├── login/
│   │   └── login-form.tsx        Login form
│   └── ui/
│       └── Shared UI components
├── lib/
│   ├── types.ts                  TypeScript interfaces
│   ├── mock-data.ts              Mock financial data
│   ├── finance-context.tsx       Global state management
│   └── utils.ts                  Helper utilities
├── public/                       Static assets
├── config/                       Configuration files
└── package.json                  Dependencies and scripts
```

## Architecture

### State Management

The application uses React Context API for global state management through the FinanceProvider:

- User Authentication: Login, logout, and role management
- Transaction Management: CRUD operations and filtering
- Portfolio Data: Asset allocation and metrics
- Insights Generation: AI-powered financial insights
- Storage Persistence: localStorage integration

### Data Flow

1. User action in component
2. Call context function
3. Context updates state
4. localStorage write
5. Automatic calculations
6. Component re-render
7. UI update

### Core Data Structures

User:

- id: unique identifier
- email: user email
- role: Viewer or Admin
- name: user name

Transaction:

- id: unique identifier
- date: transaction date
- amount: transaction amount
- category: spending category
- type: Income or Expense
- description: transaction details
- note: optional notes

Portfolio:

- totalValue: sum of all assets
- assets: array of holdings
- totalIncome: cumulative income
- totalExpenses: cumulative expenses
- performancePercentage: portfolio performance

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server on http://localhost:3000

### Production Build

```bash
npm run build
```

Creates an optimized production build

### Start Production Server

```bash
npm start
```

Runs the production server

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality

## Included Mock Data

The application includes pre-configured mock data:

- 14 sample transactions spanning April 2026
- 12 months of historical balance data
- 5 asset holdings with allocations
- 15 transaction categories
- Dynamic insights based on calculations

## Data Persistence

All user data is stored in the browser's localStorage:

- transactions: Array of transaction objects
- user: Current user profile
- userRole: User's access role

Data persists between page refreshes but is local to the browser.

## Responsive Design

The dashboard is fully responsive:

- Desktop: 1200px and above - Full feature set
- Tablet: 768px to 1199px - Optimized layout
- Mobile: Below 768px - Stack layout

## Dark Mode

Dark mode is fully supported:

- Toggle via the sun/moon icon in the top navigation
- Automatically follows system preference
- Smooth theme transitions
- Persistent across sessions

## Testing the Application

### Login Test

1. Navigate to http://localhost:3000
2. Select Viewer role
3. Enter any email and password
4. Should redirect to dashboard

### Filtering Test

1. Go to Transactions page
2. Select category filter
3. Verify transactions are filtered
4. Try combining filters

### Export Test

1. Go to Transactions page
2. Apply filters
3. Click Export CSV
4. Verify file downloads

### Role Test

1. Login as Viewer
2. Verify read-only access
3. Logout and login as Admin
4. Verify delete buttons appear
