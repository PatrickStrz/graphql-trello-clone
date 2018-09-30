import styled, { css } from 'styled-components'

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: green;
  border: 2px solid green;
  :hover {
    cursor: pointer;
  }
  ${props =>
    props.primary &&
    css`
      background: green;
      color: white;
    `};
`
