import React from 'react'

import styled from 'styled-components'

export const ClickableText = ({ text, onClick }) => (
  <Text onClick={onClick}>{text}</Text>
)

const Text = styled.p`
  :hover {
    color: grey;
    cursor: pointer;
  }
`
