import { useEffect } from 'react';
import markdownStyles from "./markdown-styles.module.css";
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);
  return (
    <div className="max-w-3xl mx-auto prose">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
