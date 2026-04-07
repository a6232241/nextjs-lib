/**
 * 將文字中第一個匹配搜尋字串的部分進行標記與拆解。
 * 
 * @param text 要被搜尋的文字原文
 * @param search 要搜尋及高亮的目標字串
 * @returns 拆解後的陣列，其中 highlight 為 true 的部分表示符合 search
 */
export const getFirstHighlightedText = (text: string, search: string) => {
  if (!search) return [{ text: text, highlight: false }];
  const index = text.indexOf(search);
  if (index === -1) return [{ text: text, highlight: false }];

  const before = text.substring(0, index);
  const match = text.substring(index, index + search.length);
  const after = text.substring(index + search.length);

  const parts = [];
  if (before) parts.push({ text: before, highlight: false });
  parts.push({ text: match, highlight: true });
  if (after) parts.push({ text: after, highlight: false });

  return parts;
}

/**
 * 計算字串的語素長度 (Grapheme Clusters)。
 * 支援 Emoji (含 ZWJ 多重組合)、擴充字元集 (Surrogate Pairs) 等。
 * 在此邏輯下，'abc' 為 3，'妳好' 為 2，'𠮷' 為 1，'👨‍👩‍👧‍👧' 為 1。
 * 
 * @param text 要計算的文字
 * @returns 語素字數
 */
export const getGraphemeLength = (text: string): number => {
  if (!text) return 0;
  
  // 優先使用 Intl.Segmenter (現代瀏覽器與 RN Hermes 支援)
  // 這能精確區分語素，例如將家族 Emoji 視為 1 個字
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const segmenter = new (Intl as any).Segmenter();
    return [...segmenter.segment(text)].length;
  }
  
  // 備案：使用 Array.from (可正確處理一般擴充字元，但無法處理 ZWJ Emoji 組合)
  return Array.from(text).length;
};