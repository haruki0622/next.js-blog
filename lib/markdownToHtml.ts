import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).use(gfm).process(markdown);
  return result.toString();
}

// import { unified } from "unified";
// import remarkParse from "remark-parse";
// import remark2rehype from "remark-rehype";
// import rehypeStringify from "rehype-stringify";
// import gfm from "remark-gfm";

// // Markdown 形式の文字列を受け取って、HTML 形式の文字列を返す
// export default async function markdownToHtml(markdown: string) {
//   const result = await unified()
//     .use(gfm)
//     .use(remarkParse) // markdown -> mdast の変換
//     .use(remark2rehype) // mdast -> hast の変換
//     .use(rehypeStringify) // hast -> html の変換
//     .process(markdown); // 実行
//   return result.toString();
// }
