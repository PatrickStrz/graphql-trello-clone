import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'global-styles'
import { DeleteCardButtonGql } from './'

export const Card = ({ card }) => (
  <Box>
    <Title>{card.name}</Title>
    <DeleteCardButtonGql id={card.id} boardId="cjlu1s5mkjf220b521pm8iu0g" />
  </Box>
)

const Title = styled.p`
  max-width: 90%;
`

const Box = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.primary};
  margin: 5px;
  border-radius: 2px;
`
