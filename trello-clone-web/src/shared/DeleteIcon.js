import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS } from 'global-styles'

export const DeleteIcon = ({ loading, onClick, styles }) => (
  <Icon loading={loading} onClick={onClick} style={styles}>
    x
  </Icon>
)

const Icon = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.primaryActive};
  ${props => {
    if (props.loading) {
      return css`
        opacity: 0.5;
      `
    }
  }} :hover {
    cursor: pointer;
    color: ${COLORS.danger};
  }
  margin: 0px;
`
