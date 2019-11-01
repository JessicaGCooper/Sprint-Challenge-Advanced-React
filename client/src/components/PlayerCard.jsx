import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'


const PlayerCard = ({player: { name, country, searches}}) => (

<CardContentContainer className="cardContainer">
  <Card >
    <Card.Content header={name} />
    <Card.Content description={country} />
    <Card.Content extra>
      <Icon name='user' />Google Searches: {searches}
    </Card.Content>
  </Card>
</CardContentContainer>
)

export default PlayerCard

const CardContentContainer = styled.div`
    width: 50%;
    margin-right: 25%;
    margin-left: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;