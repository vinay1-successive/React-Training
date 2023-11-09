import { useState } from "react";
import { styleAll } from "../../../Helper/Styles";
import QuestionData from "../../../Components/QuestionData";

// Custom hook for copying text to clipboard
const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      const success = document.execCommand("copy");
      setIsCopied(success);
    } catch (err) {
      setIsCopied(false);
    }

    document.body.removeChild(textArea);
  };

  return { isCopied, copyToClipboard };
};

// Component using the useClipboard hook
const CopyToClipboard = (props) => {
  const [text, setText] = useState("");
  const { isCopied, copyToClipboard } = useClipboard();

  return (
    <>
      <QuestionData value={props.value} />
      <div style={styleAll.div}>
        <p>{text}</p>
        <input
          style={styleAll.label}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button style={styleAll.label} onClick={() => copyToClipboard(text)}>
          Copy to Clipboard
        </button>
        {isCopied && <div>Copied to clipboard! </div>}
      </div>
    </>
  );
};

export default CopyToClipboard;
