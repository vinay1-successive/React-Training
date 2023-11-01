import { useState } from "react";

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
      <div style={props.styles.div}>{props.value}</div>
      <p>{text}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copyToClipboard(text)}>Copy to Clipboard</button>
      {isCopied && <div>Copied to clipboard! </div>}
    </>
  );
};

export default CopyToClipboard;
