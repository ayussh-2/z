import type { Metadata } from "next";
import "./globals.css";
import { inter, manrope } from "@/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { FinanceProvider } from "@/lib/finance-context";

export const metadata: Metadata = {
    title: "Wealth Link",
    description: "Finance Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`antialiased ${inter.variable} ${manrope.variable}`}
        >
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    enableColorScheme={false}
                    disableTransitionOnChange
                >
                    <FinanceProvider>{children}</FinanceProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
