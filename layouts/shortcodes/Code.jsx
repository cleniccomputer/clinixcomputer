import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const HighlightedCode = ({ children, language }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative code-block group">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        title="Copy code"
      >
        {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
      </button>
      <SyntaxHighlighter language={language} style={a11yDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default HighlightedCode;