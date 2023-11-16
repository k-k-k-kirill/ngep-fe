import React from "react";
import markdownToHtml from "../utils/markdownToHtml";

interface RichContent {
  content: string;
}

const RichContent: React.FC<RichContent> = async ({ content }) => {
  const htmlContent = await markdownToHtml(content);

  return <pre dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default RichContent;
