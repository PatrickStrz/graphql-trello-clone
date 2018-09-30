import React from 'react'

import styled from 'styled-components'

export const List = ({ list }) => (
  <Box>
    listname:
    {list.name}
  </Box>
)

const Box = styled.div`
  display: flex;
  background-color: purple;
  width: 20%;
  padding: 10px;
`
const Title = styled.div
