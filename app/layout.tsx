import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/providers/themeProvider";
import { ModalProvider } from "@/providers/modalProvider";
import { Navbar } from "@/components/shared/navbar";
import { SessionProvider } from "@/providers/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs 14 Boilerplate",
  description:
    "This template project is equipped with Next.js, Shadcn-ui, TailwindCSS and Prisma.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <div className="h-full flex flex-col">
              <Navbar />

              {children}
            </div>
            <ModalProvider />
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
