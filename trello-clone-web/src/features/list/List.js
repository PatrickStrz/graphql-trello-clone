import React from 'react'

import styled from 'styled-components'

import { COLORS } from 'global-styles'

import { Card } from 'features'
import { CreateCardSection } from './'

export class List extends React.Component {
  state = {
    showCreateCardForm: false,
    newCardName: {}
  }

  render() {
    const { list } = this.props
    return (
      <Box>
        <Title> {list.name}</Title>
        <CardsBox>
          {list.cards.map(card => (
            <Card key={card.id} card={card} boardId={list.board.id} />
          ))}
        </CardsBox>
        <CreateCardSection listId={list.id} boardId={list.board.id} />
      </Box>
    )
  }
}

const Title = styled.p``

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.secondary};
  width: 20%;
  margin: 5px;
  border-radius: 2px;
`

export const CardsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`
