import React from 'react'

import styled from 'styled-components'

import { BoardList } from './board-list'

export const HomePage = () => (
  <Box>
    <BoardList />
  </Box>
)

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
