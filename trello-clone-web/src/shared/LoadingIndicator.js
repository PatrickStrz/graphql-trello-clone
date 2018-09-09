import React from 'react'
import Styled from 'styled-components'

export const LoadingIndicator = () => (
  <Box>
    <Text>...loading</Text>
  </Box>
)

const Box = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = Styled.p``
