import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StringUtilsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-100 dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-6 group dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            返回首頁
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            String Utilities
          </h1>
        </header>

        {children}

        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-400">
            Powered by <code>nextjs-lib</code> String Utilities
          </p>
        </footer>
      </div>
    </div>
  );
}
