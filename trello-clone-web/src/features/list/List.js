import React from 'react'

import styled from 'styled-components'

import { COLORS } from 'global-styles'

export const List = ({ list }) => (
  <Box>
    <Title> {list.name}</Title>
    {list.cards.map(card => (
      <Card key={card.id}>
        <Title>{card.name}</Title>
      </Card>
    ))}
  </Box>
)

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: purple;
  width: 20%;
  padding: 10px;
  border: solid 2px ${COLORS.primary};
  margin: 5px;
`
const Title = styled.p``

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.primary};
`
