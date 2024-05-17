import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { QueryProvider } from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "FinTrak",
  description:
    "Finance Traking Platform with ability to track your income and expenses, categorize transactions and assign them to specific accounts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark, neobrutalism],
        variables: { colorPrimary: "#9e70fd" },
      }}
    >
      <html lang="en">
        <QueryProvider>
          <body className="bg-[#2f3333] text-zinc-100">{children}</body>
        </QueryProvider>
      </html>
    </ClerkProvider>
  );
}
