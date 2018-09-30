import React from 'react'

import styled from 'styled-components'

import { COLORS } from 'global-styles'

import { Card } from 'features'

export const List = ({ list }) => (
  <Box>
    <Title> {list.name}</Title>
    {list.cards.map(card => (
      <Card key={card.id} card={card} />
    ))}
  </Box>
)

const Title = styled.p``

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.secondary};
  width: 20%;
  padding: 10px;
  border: solid 2px ${COLORS.primary};
  margin: 5px;
  border-radius: 2px;
`
