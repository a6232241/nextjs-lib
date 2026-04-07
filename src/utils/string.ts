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