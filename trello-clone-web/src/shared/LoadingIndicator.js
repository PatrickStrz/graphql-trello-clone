import React from 'react'
import styled from 'styled-components'

export const LoadingIndicator = () => (
  <Box>
    <Text>...loading</Text>
  </Box>
)

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.p``
