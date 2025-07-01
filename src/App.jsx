import React, { useState, useEffect } from 'react';
import './App.css';

// Lorem Ipsum generator function
const loremIpsum = (paragraphs) => {
  const lorem = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ];

  const result = [];
  for (let i = 0; i < paragraphs; i++) {
    result.push(lorem.join(' ')); // Repeat for the number of paragraphs
  }
  return result.join("\n\n");
};

const App = () => {
  const [paragraphCount, setParagraphCount] = useState(2); // Default 2 paragraphs
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false); // Track if copied

  // Generate the Lorem Ipsum text when the app loads or on change
  useEffect(() => {
    setText(loremIpsum(paragraphCount));
  }, [paragraphCount]);

  const handleGenerate = () => {
    setText(loremIpsum(paragraphCount));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text); // Copy the text to the clipboard
    setCopied(true); // Set the copied state to true

    // Hide the tick mark after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Lorem Ipsum Generator</h1>

      <div className="controls">
        <div className="input-container">
          <label htmlFor="paragraphCount">Paragraphs: </label>
          <input
            type="number"
            id="paragraphCount"
            min="1"
            max="30"
            value={paragraphCount}
            onChange={(e) => setParagraphCount(Number(e.target.value))}
          />
        </div>
        <button className="generate-btn" onClick={handleGenerate}>Generate</button>

        <button
          className={`copy-btn`} // Add show-tick class when copied
          onClick={handleCopy}
          title="Copy"
        >
          {copied ? (
            'Copied' // Show tick when copied
          ) : (
            'Copy'
          )}
        </button>
      </div>

      {text && (
        <div className="generated-text">
          <textarea
            readOnly
            value={text}
            rows={10}
            style={{ width: "100%" }}
            placeholder="Generated text will appear here"
          />
        </div>
      )}
    </div>
  );
};

export default App;
