import React from 'react'

import styled from 'styled-components'

export const ClickableText = ({ onClick, children, color }) => (
  <Text onClick={onClick} color={color}>
    {children}
  </Text>
)

const Text = styled.p`
  :hover {
    color: grey;
    cursor: pointer;
  }
  margin: 0px;
  color: ${props => props.color};
`
