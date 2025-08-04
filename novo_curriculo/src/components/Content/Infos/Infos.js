import React, { useState } from "react";
import styled from "styled-components";
import { infosData } from "./infosData";

const Section = styled.section`
  width: 100%;
  background-color: #f9f9fb;
  padding: 3rem 1rem 5rem; /* padding bottom maior para evitar corte pelo footer */
  box-sizing: border-box;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, #ccc, transparent);
  margin: 2rem 0 1.5rem;
`;

const Item = styled.div`
  background: transparent;
  margin: 0 auto 1rem;
  max-width: 900px;
  padding: 0 1rem;
  cursor: pointer;
  overflow-x: hidden;
`;

const ItemHeader = styled.div`
  padding: 1rem 1.2rem;
  font-weight: 600;
  font-size: 1.05rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.8rem 1rem;
  }
`;

const ItemContent = styled.div`
  height: ${props => (props.isOpen ? "auto" : "0")};
  padding: ${props => (props.isOpen ? "1rem 1.2rem" : "0 1.2rem")};
  color: #444;
  font-size: 0.95rem;
  line-height: 1.6;
  overflow: hidden;
  transition: padding 0.3s ease;
  transition-property: padding, height;
  
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Arrow = styled.span`
  font-size: 1.2rem;
  color: #666;
  transform: rotate(${props => (props.isOpen ? "90deg" : "0")});
  transition: transform 0.3s ease;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export default function Infos() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Divider />
      {infosData.map((item, i) => (
        <Item key={i} onClick={() => toggle(i)} aria-expanded={openIndex === i}>
          <ItemHeader>
            {item.title}
            <Arrow isOpen={openIndex === i}>▶</Arrow>
          </ItemHeader>
          <ItemContent isOpen={openIndex === i}>{item.content}</ItemContent>
        </Item>
      ))}
    </Section>
  );
}
