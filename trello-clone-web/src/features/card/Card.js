import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'global-styles'
import { DeleteCardButtonGql } from './'
import { UpdateCardSection } from './'
// import { CreateUpdsateCardSection } from './'
import { ClickableText } from '../../shared'

export class Card extends React.Component {
  state = { updateSectionVisible: false }
  render() {
    const { updateSectionVisible } = this.state
    const { card, boardId } = this.props
    return (
      <Box>
        <Title>{card.name}</Title>
        {this.state.updateSectionVisible && (
          <UpdateCardSection cardId={card.id} cardTitle={card.name} />
        )}
        <ControlsBox>
          <ClickableText
            onClick={() =>
              this.setState(prevState => ({
                updateSectionVisible: !prevState.updateSectionVisible
              }))
            }
          >
            {updateSectionVisible ? 'Hide update form' : 'Update card'}
          </ClickableText>
          <DeleteCardButtonGql
            id={card.id}
            boardId={boardId}
            iconStyles={{ height: 0 }}
          />
        </ControlsBox>
      </Box>
    )
  }
}
const Title = styled.p`
  max-width: 90%;
`

const Box = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.primary};
  margin: 5px;
  border-radius: 2px;
`

const ControlsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 15%;
`
