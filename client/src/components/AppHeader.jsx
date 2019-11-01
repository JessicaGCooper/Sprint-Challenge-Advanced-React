import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import ToggleButton from './ToggleButton'

const AppHeader = () => (
  <HeaderContainer className='headerContainer'>
    <MainHeaderContainer className='mainHeaderContainer'>
      <MainHeader as='h2' attached='top'>
        Women's World Cup
      </MainHeader>
      <SubMainHeader as='h2' attached='top'>
        Most Searched For Players
      </SubMainHeader>
    </MainHeaderContainer>
    <SubHeader attached>
    Women's World Cup players ranked in search interest, June-July 2019, worldwide.
    </SubHeader>
    <ButtonContainer className="buttonContainer">
      <ToggleButton />
    </ButtonContainer>
  </HeaderContainer>
)

export default AppHeader

const HeaderContainer = styled.header`
    background: #6D6E6F;
    margins: 40px;
    display: flex;
    flex-direction: column;
`;

const MainHeaderContainer = styled.div`
    background: #6D6E6F;
    margins: 40px;
    display: flex;
    flex-direction: column;
    padding: 40px;
`;


const MainHeader = styled(Header)`
    color: #0E0C0B;
    font-size: 3rem;
    padding-bottom: 5px;
    text-align: center;
`;

const SubMainHeader = styled(Header)`
    color: #0E0C0B;
    font-size: 2rem;
    padding-top: 10px;
    text-align: center;
`;

const SubHeader = styled(Segment)`
    color: #D51C2C;
    font-size: 1.5rem;
    text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;  
  margin: 20px;
  margin-right: 90px;
`;