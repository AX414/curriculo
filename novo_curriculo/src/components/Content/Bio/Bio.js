import styled from "styled-components";

const BioSection = styled.section`
  padding-top: 2%;
  margin: 0% 20% 0 20%;
  padding-bottom: 2rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const BioText = styled.p`
    font-size: 16px;
    text-align: justify;
`;

const DownloadButton = styled.a`
  padding: 14px 28px;
  background: linear-gradient(145deg, #7fd8cc, #95e0db);
  color: #00333d;
  text-decoration: none;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 8px rgba(47, 128, 123, 0.3);
  letter-spacing: 0.5px;
  font-weight: 300;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(47, 128, 123, 0.45);
  }
`;

export default function Bio() {
  return (
    <BioSection>

      <BioText>
        Meu nome é João Victor Lisboa Porcel, sou um profissional em início de 
        carreira com formação em Ciências da Computação e 
        sólida experiência acadêmica em desenvolvimento de 
        sistemas e participação de projetos em equipe. 
        Tenho experiência em Java e Python, com atuação em 
        metodologias ágeis e desenvolvimento full stack. 
        Comprometido em entregar soluções inovadoras e otimização 
        de processos utilizando ferramentas modernas.
      </BioText>

      <DownloadButton
        href="./assets/docs/Currículo Backend 2025.pdf"
        download
        title="Baixar currículo em PDF"
      >
        Baixar Currículo
      </DownloadButton>
    </BioSection>
  );
}
