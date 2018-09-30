import React from 'react'
import styled from 'styled-components'
import { List } from '../'

export const ListSection = ({ lists }) => {
  return (
    <Box>
      {lists.map(list => (
        <List key={list.id} list={list} />
      ))}
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`
