import React from 'react'

import Styled from 'styled-components'

import { BoardList } from './board-list'

export const HomeScreen = () => (
  <Box>
    <BoardList />
  </Box>
)

const Box = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
