import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import GlowingText from "./GlowingText";

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const Wrapper = styled.span`
  color: #0cffdf;
  font-size: clamp(1rem, 5vw, 2rem); /* tamanho ajustável */
  word-break: break-word;
`;

const Cursor = styled.span`
  display: inline-block;
  margin-left: 4px;
  animation: ${blink} 1s step-start infinite;
`;

const Typewriter = ({ text = "", speed = 80 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text || index >= text.length) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
    <Wrapper>
      <GlowingText>{text.slice(0, index)}</GlowingText>
      <GlowingText>
        <Cursor>|</Cursor>
      </GlowingText>
    </Wrapper>
  );
};

export default Typewriter;
