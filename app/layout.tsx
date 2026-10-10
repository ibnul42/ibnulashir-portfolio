import type { Metadata } from "next";
import { cn } from "@/lib/cn";
import { archivo, jetbrains } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibnul Ashir",
  description: "Fullstack developer · Salesforce, web, APIs, mobile",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(archivo.variable, jetbrains.variable, "theme-dark antialiased")}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
