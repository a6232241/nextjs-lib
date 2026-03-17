import Link from "next/link";
import { CaseSensitive, ChevronRight, Package, Box } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-100 dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-6 dark:bg-indigo-900/30 dark:text-indigo-400">
            <Package size={14} />
            Next.js Library
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Component Library & Utilities
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            一個精心設計的 Next.js 助手函式庫，提供高效、現代化的組件與工具函數。
          </p>
        </header>

        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
            <Box className="text-indigo-600" size={24} />
            <h2 className="text-2xl font-bold tracking-tight">Utils 助手</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link 
              href="/utils/string"
              className="group block p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-indigo-400/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors dark:bg-indigo-900/50 dark:text-indigo-400">
                  <CaseSensitive size={24} />
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                String Utilities
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed dark:text-slate-400">
                提供字串處理工具，如搜尋高亮、格式化等高效助手函數。
              </p>
            </Link>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-400 text-center">
            &copy; 2026 Next.js Lib. Built with excellence.
          </p>
        </footer>
      </div>
    </div>
  );
}
