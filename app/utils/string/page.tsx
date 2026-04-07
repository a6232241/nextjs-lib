"use client";

import { useState } from "react";
import { getFirstHighlightedText, getGraphemeLength } from "@/utils/string";
import { Search, Type, Ruler } from "lucide-react";
import Link from 'next/link';

export default function StringUtilsDemo() {
  const [text, setText] = useState("歡迎來到 Next.js 函式庫範例頁面。這是一個測試文字，用來展示高效的高亮搜尋功能。");
  const [search, setSearch] = useState("高效");

  const [lengthText, setLengthText] = useState("Hello 世界!");

  const results = getFirstHighlightedText(text, search);
  const graphemeLength = getGraphemeLength(lengthText);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* getFirstHighlightedText Section */}
      <section className="mb-20">
        <Link href="#getFirstHighlightedText">
          <h2 id="getFirstHighlightedText" className="text-2xl font-bold mb-4 scroll-mt-20">
            getFirstHighlightedText
          </h2>
        </Link>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
          展示如何一段文字中，去匹配並標記第一個符合的搜尋關鍵字。
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* 控制面板 */}
          <section className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4 text-indigo-600 font-semibold">
                <Type size={20} />
                <h2>輸入設定</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1.5 dark:text-slate-400">
                    原始文字
                  </label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-32 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none dark:bg-slate-800 dark:border-slate-700"
                    placeholder="輸入這段文字..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1.5 dark:text-slate-400">
                    搜尋關鍵字
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:bg-slate-800 dark:border-slate-700"
                      placeholder="搜尋內容..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 預覽面板 */}
          <section className="space-y-6">
            <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-200/50 text-white dark:shadow-none">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                即時預覽
              </h2>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 min-h-[100px] leading-relaxed text-indigo-50">
                {results.map((part, i) => (
                  <span 
                    key={i} 
                    className={part.highlight ? "bg-yellow-300 text-indigo-950 font-bold px-0.5 rounded-sm" : ""}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <h3 className="text-sm font-semibold text-slate-500 mb-4 dark:text-slate-400">回傳數據結構</h3>
              <pre className="text-xs bg-slate-50 p-4 rounded-xl overflow-x-auto font-mono text-indigo-600 dark:bg-slate-800 dark:text-indigo-400">
                {JSON.stringify(results, null, 2)}
              </pre>
            </div>
          </section>
        </div>
      </section>

      {/* getGraphemeLength Section */}
      <section className="pt-20 border-t border-slate-200 dark:border-slate-800">
        <Link href="#getGraphemeLength">
          <h2 id="getGraphemeLength" className="text-2xl font-bold mb-4 scroll-mt-20">
            getGraphemeLength
          </h2>
        </Link>
        <div className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8 space-y-2">
          <p>計算字串的語素長度 (Grapheme Clusters)。</p>
          <p className="text-sm">支援跨平台開發（如 React Native），精確辨識表情符號與擴充字元集。</p>
        </div>

        {/* 預設範例參考 */}
        <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "'abc'", value: 'abc' },
            { label: "'妳好'", value: '妳好' },
            { label: "'𠮷'", value: '𠮷' },
            { label: "'👨‍👩‍👧‍👧'", value: '👨‍👩‍👧‍👧' },
          ].map((example) => (
            <button
              key={example.label}
              onClick={() => setLengthText(example.value)}
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all text-left dark:bg-slate-900 dark:border-slate-800"
            >
              <div className="text-xs text-slate-400 mb-1">點擊測試 {example.label}</div>
              <div className="text-xl font-mono truncate">{example.value}</div>
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4 text-indigo-600 font-semibold">
              <Ruler size={20} />
              <h2>輸入文字</h2>
            </div>
            <input
              type="text"
              value={lengthText}
              onChange={(e) => setLengthText(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:bg-slate-800 dark:border-slate-700"
              placeholder="輸入文字進行測試..."
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-200/50 text-white dark:shadow-none flex flex-col items-center justify-center text-center">
              <span className="text-sm opacity-80 mb-1">語素長度 (Grapheme Clusters)</span>
              <span className="text-6xl font-black">{graphemeLength}</span>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl flex flex-col gap-2 dark:bg-slate-800 px-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">原生字串長度 (String.length)</span>
                <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{lengthText.length}</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                * 原生長度會受 UTF-16 編碼與 Surrogate Pairs 影響，導致視覺上的 1 個字被計為多個。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
