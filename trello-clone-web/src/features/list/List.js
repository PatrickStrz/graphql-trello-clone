import React from 'react'

import styled from 'styled-components'

import { COLORS } from 'global-styles'

import { Card } from 'features'
import { DeleteListButtonGql } from './'
import { CreateCardSection } from '../card/CreateCardSection'

export class List extends React.Component {
  state = {
    showCreateCardForm: false,
    newCardName: {}
  }

  render() {
    const { list } = this.props
    return (
      <Box>
        <TitleBox>
          <Title> {list.name}</Title>
          <DeleteListButtonGql
            boardId={list.board.id}
            listId={list.id}
            iconStyles={{ marginLeft: 10 }}
          />
        </TitleBox>
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
export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
