import React from 'react'
import styled from 'styled-components'
import { List } from '../list'
import { CreateListSection } from '../list'

export const ListSection = ({ lists, boardId }) => {
  return (
    <Box>
      {lists.map(list => (
        <List key={list.id} list={list} />
      ))}
      <CreateListSection boardId={boardId} />
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  overflow-x: auto;
`
