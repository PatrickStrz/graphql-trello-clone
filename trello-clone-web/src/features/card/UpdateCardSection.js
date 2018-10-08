import React from 'react'
import styled from 'styled-components'
import { UpdateCardButtonGql } from './'
import { COLORS } from 'global-styles'

export class UpdateCardSection extends React.Component {
  state = {
    name: this.props.cardTitle
  }

  render() {
    const { cardId } = this.props
    return (
      <CardInputFormBox>
        <CardInput
          onChange={e => {
            this.setState({ name: e.target.value })
          }}
          value={this.state.name}
        />

        <UpdateCardButtonGql cardTitle={this.state.name} cardId={cardId} />
      </CardInputFormBox>
    )
  }
}

const CardInput = styled.input``

const CardInputFormBox = styled.div`
  padding-top: 10px;
  border-top: solid 4px ${COLORS.primary};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 10px;
  width: 100%;
`
