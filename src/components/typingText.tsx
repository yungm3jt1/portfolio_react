import { useEffect, useState } from "react";

const TypingText = () => {
  const textList = [
    "Hi, I'm M3JT1!",
    "I'm a software developer.",
    "Welcome to my portfolio!",
  ];
  const typingSpeed = 100;
  const deletingSpeed = 60;
  const pauseAtEnd = 1200;
  const pauseAtStart = 400;
  const [index2, setIndex2] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && index < textList[index2].length) {
      timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && index === textList[index2].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAtEnd);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseAtStart);
      if (index2 >= textList.length - 1) { 
        setIndex2(0); 
      } else {
        setIndex2((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    index,
    isDeleting,
    textList.length,
    typingSpeed,
    deletingSpeed,
    pauseAtEnd,
    pauseAtStart,
  ]);

  return (
    <>
      <p className="text-white">{textList[index2].substring(0, index)}</p>
    </>
  );
};

export default TypingText;
