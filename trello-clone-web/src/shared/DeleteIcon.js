import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS } from 'global-styles'

export const DeleteIcon = ({ loading, onClick, styles }) => (
  <Icon loading={loading} onClick={onClick} style={styles}>
    X
  </Icon>
)

const Icon = styled.div`
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
`
