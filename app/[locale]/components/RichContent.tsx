import React from "react";
import markdownToHtml from "../utils/markdownToHtml";
import { notoSans } from "../layout";

interface RichContent {
  content: string;
  classes?: string;
}

const RichContent: React.FC<RichContent> = async ({ content, classes }) => {
  const htmlContent = await markdownToHtml(content);

  return (
    <pre
      className={`${classes} ${notoSans.className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default RichContent;
