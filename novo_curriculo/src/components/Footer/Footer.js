import styled from "styled-components";
import GlowingText from "../Effects/GlowingText";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #0a1017;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.3);
`;

const FooterTitle = styled.h4`
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 1px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const IconLink = styled.a`
  display: inline-block;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 255, 195, 0.4);
  }

  img {
    display: block;
    border-radius: 12px;
    filter: brightness(0.95);
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

function Footer() {
    return (
        <FooterContainer>
            <GlowingText>
                <FooterTitle title="Esses são meus contatos!">[CONTATOS]</FooterTitle>
            </GlowingText>
            <IconContainer>
                <IconLink
                    href="mailto:joaovictorlisboaporcel@hotmail.com"
                    target="_blank"
                    title="Sinta-se livre para me enviar um e-mail!"
                >
                    <img
                        src="https://img.shields.io/badge/outlook-blue?style=for-the-badge&logo=microsoft-outlook"
                        alt="Outlook"
                    />
                </IconLink>
                <IconLink
                    href="https://www.linkedin.com/in/jo%C3%A3o-victor-lisboa-porcel-2755b61a5/"
                    target="_blank"
                    title="Esse é meu linkedin, mas não tenho nada lá *ainda*."
                >
                    <img
                        src="https://img.shields.io/badge/linkedin-blue?style=for-the-badge&logo=linkedin"
                        alt="LinkedIn"
                    />
                </IconLink>
                <IconLink
                    href="https://github.com/AX414"
                    target="_blank"
                    title="Esse é meu github!"
                >
                    <img
                        src="https://img.shields.io/badge/github-blue?style=for-the-badge&logo=github"
                        alt="GitHub"
                    />
                </IconLink>
            </IconContainer>
        </FooterContainer>
    );
}

export default Footer;
