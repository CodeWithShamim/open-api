import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
// import NextNProgress from 'nextjs-progressbar';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
        {/* <NextNProgress color="#000000" startPosition={0.1} stopDelayMs={200} height={3} showOnShallow={true} options={{ showSpinner: false }} /> */}
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          <Toaster position="bottom-right" />
          {/* @ts-expect-error server component */}
          <Navbar />
          <main>{children}</main>
        </Providers>

        {/* allow more height for mobile menu on mobile  */}
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}
