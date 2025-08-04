import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const AppContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: transparent;
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Banner/>
      <Content/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
