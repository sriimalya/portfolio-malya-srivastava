import { useState, useEffect, useCallback } from 'react';

const Terminal = ({ lines = [], typingSpeed = 50, pauseDuration = 3000 }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const resetTerminal = useCallback(() => {
    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsTyping(true);
  }, []);

  useEffect(() => {
    if (!lines.length) return;

    if (currentLineIndex >= lines.length) {
      setIsTyping(false);

      const timeout = setTimeout(() => {
        resetTerminal();
      }, pauseDuration);

      return () => clearTimeout(timeout);
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      // Type next character
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          if (updated.length <= currentLineIndex) {
            updated.push('');
          }
          updated[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return updated;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, pauseDuration, resetTerminal]);

  return (
    <div className="terminal-window h-full flex flex-col">
      {/* Chrome bar */}
      <div className="terminal-chrome">
        <div className="terminal-dot terminal-dot--red" />
        <div className="terminal-dot terminal-dot--yellow" />
        <div className="terminal-dot terminal-dot--green" />
        <span className="text-[var(--terminal-muted)] text-xs ml-2 font-mono">~/malya</span>
      </div>

      {/* Terminal body */}
      <div className="flex-1 p-4 sm:p-5 font-mono text-sm leading-relaxed">
        {displayedLines.map((line, index) => (
          <div key={index} className="flex items-start gap-2 mb-2">
            <span className="text-[var(--terminal-accent)] flex-shrink-0 select-none">{'>'}</span>
            <span className="text-[var(--terminal-text)]">{line}</span>
            {/* Show cursor on current typing line */}
            {index === currentLineIndex && isTyping && (
              <span className="terminal-cursor" />
            )}
          </div>
        ))}
        {/* Show cursor on new line being typed */}
        {displayedLines.length <= currentLineIndex && currentLineIndex < lines.length && (
          <div className="flex items-start gap-2 mb-2">
            <span className="text-[var(--accent)] flex-shrink-0 select-none">{'>'}</span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
