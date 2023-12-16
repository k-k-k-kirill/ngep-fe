import React from "react";
import markdownToHtml from "../utils/markdownToHtml";

interface RichContent {
  content: string;
  classes?: string;
}

const RichContent: React.FC<RichContent> = async ({ content, classes }) => {
  const htmlContent = await markdownToHtml(content);

  return (
    <pre
      className={classes}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default RichContent;
