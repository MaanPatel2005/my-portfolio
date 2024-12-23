import { useEffect, useState } from "react";

const words = [
  "a developer",
  "a coder",
  "a brother",
  "a dancer",
  "an athlete",
  "a researcher",
  "a student",
];

function DynamicTyping() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentWord((prev) => prev.slice(0, prev.length - 1));
      }, 100); // Deleting speed
      if (currentWord.length === 0) {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      timeout = setTimeout(() => {
        setCurrentWord(words[wordIndex].slice(0, currentWord.length + 1));
      }, 200); // Typing speed
      if (currentWord.length === words[wordIndex].length) {
        // Wait for 2 seconds before starting to delete and change word
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // 2 seconds delay before resetting
      }
    }
    return () => clearTimeout(timeout); // Clean up on every render
  }, [currentWord, isDeleting, wordIndex]); // Dependencies to trigger re-renders

  return (
    <div className="TypeWriter">
      <span>
        Hey, I'm Maan and I am{" "}
        <span className="dynamic-word">{currentWord}</span>
      </span>
    </div>
  );
}

export default DynamicTyping;
