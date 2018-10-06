import React from 'react'
import styled from 'styled-components'

export const Input = ({ value, onTextChange, placeholder }) => (
  <StyledInput
    placeholder={placeholder}
    value={value}
    onChange={e => onTextChange(e.target.value)}
  />
)

const StyledInput = styled.input`
  :focus {
    outline: none;
  }
`
