import React, { useState } from "react";
import styled from "styled-components";
import { infosData } from "./infosData";


const Section = styled.section`
  width: 100%;
  background-color: #f9f9fb;
  padding: 3rem 1rem;
  padding-bottom: 2rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, #ccc, transparent);
  margin: 2rem 0 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin-bottom: 2rem;
`;

const Item = styled.div`
  background: transparent;
  margin: 0 auto 1rem;
  max-width: 900px;
  padding: 0 1rem;
  cursor: pointer;
`;

const ItemHeader = styled.div`
  padding: 1rem 1.2rem;
  font-weight: 600;
  font-size: 1.05rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const ItemContent = styled.div`
  max-height: ${props => (props.isOpen ? "1000px" : "0")};
  padding: ${props => (props.isOpen ? "1rem 1.2rem" : "0 1.2rem")};
  color: #444;
  font-size: 0.95rem;
  line-height: 1.6;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Arrow = styled.span`
  font-size: 1.2rem;
  color: #666;
  transform: rotate(${props => (props.isOpen ? "90deg" : "0")});
  transition: transform 0.3s ease;
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
                <Item key={i} onClick={() => toggle(i)}>
                    <ItemHeader>{item.title}<Arrow isOpen={openIndex === i}>▶</Arrow></ItemHeader>
                    <ItemContent isOpen={openIndex === i}>{item.content}</ItemContent>
                </Item>
            ))}
        </Section>
    );
}
