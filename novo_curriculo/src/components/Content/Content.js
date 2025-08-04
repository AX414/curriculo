import styled from "styled-components";
import Bio from "../Content/Bio/Bio";
import Infos from "./Infos/Infos";

const ContentContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
`

function Content(){
    return(
        <ContentContainer>
            <Bio/>
            <Infos/>
        </ContentContainer>
    );
}

export default Content;