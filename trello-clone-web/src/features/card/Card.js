import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'global-styles'

export const Card = ({ card }) => (
  <Box>
    <Title>{card.name}</Title>
  </Box>
)

const Title = styled.p``

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.primary};
  margin: 5px;
  border-radius: 2px;
`
