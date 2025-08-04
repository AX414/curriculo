import styled from "styled-components";
import Typewriter from "../Effects/Typewriter";

const BannerSection = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (orientation: portrait) {
    min-height: 40vh;
  }
`;

const FlipCard = styled.div`
  width: 140px;
  height: 140px;
  perspective: 1000px;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  backface-visibility: hidden;
`;

const FlipCardBack = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin: 0.4rem 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export default function Banner() {
  return (
    <BannerSection>
      <FlipCard>
        <FlipCardInner>
          <FlipCardFront>
            <ProfileImg
              src="https://avatars.githubusercontent.com/u/68911216?v=4"
              alt="Foto de João Victor Lisboa Porcel"
              title="João Victor Lisboa Porcel"
            />
          </FlipCardFront>
          <FlipCardBack
            href="https://github.com/AX414"
            target="_blank"
            rel="noopener noreferrer"
            title="Clique para acessar meu GitHub!"
          >
            <img
              src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"
              alt="GitHub"
            />
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>

      <Name>João Victor Lisboa Porcel</Name>
      <Subtitle>
        <Typewriter text="BACHAREL EM CIÊNCIA DA COMPUTAÇÃO" speed={90} />
      </Subtitle>
    </BannerSection>
  );
}
