import React from 'react'
import styled from 'styled-components'
import { Input } from 'shared'
import { CreateListButtonGql, CardsBox } from './'

import { COLORS } from 'global-styles'

export class CreateListSection extends React.Component {
  state = { listName: '' }
  render() {
    const { boardId } = this.props
    return (
      <Box>
        <ListCreateBox>
          <Input
            placeholder="Enter list title ..."
            value={this.state.listName}
            onTextChange={text => {
              this.setState({ listName: text })
            }}
          />
          <CreateListButtonGql
            name={this.state.listName}
            boardId={boardId}
            onSuccess={() => {
              this.setState({
                listName: ''
              })
            }}
          />
        </ListCreateBox>
      </Box>
    )
  }
}

const ListCreateBox = styled(CardsBox)`
  justify-content: space-around;
  height: 90%;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.secondary};
  width: 20%;
  height: 60px;
  margin: 5px;
  border-radius: 2px;
  padding: 10px;
`
