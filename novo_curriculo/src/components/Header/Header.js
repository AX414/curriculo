import styled from "styled-components";
import GlowingText from "../Effects/GlowingText";

const HeaderContainer = styled.header`
  width: 100;
  background-color: #0a1017;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: relative;

  h3 {
    font-size: 1rem;
  }

  @media (orientation: landscape) {
    padding: 1rem 2rem;

    h3 {
      font-size: 1rem;
    }
  }

  @media (orientation: portrait) {
    padding: 1rem;
    
    h3 {
      font-size: 1.1rem;
    }
  }
`;


function Header() {
    return (
        <HeaderContainer>
            <GlowingText>
                <h3>
                    [TELA_CURRICULO]
                </h3>
            </GlowingText>
        </HeaderContainer>
    );
}

export default Header;