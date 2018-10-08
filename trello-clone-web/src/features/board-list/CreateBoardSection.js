import React from 'react'
import styled from 'styled-components'
import { CreateBoardButtonGql } from './'
import { COLORS } from 'global-styles'

export class CreateBoardSection extends React.Component {
  state = {
    name: ''
  }

  render() {
    return (
      <CardInputFormBox>
        <CardInput
          placeholder="Add a title for this card"
          onChange={e => {
            this.setState({ name: e.target.value })
          }}
          value={this.state.name}
        />
        <CreateBoardButtonGql
          onSuccess={() => this.setState({ name: '' })}
          name={this.state.name}
        />
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
