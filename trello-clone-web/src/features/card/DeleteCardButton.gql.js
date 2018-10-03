import React from 'react'
import styled, { css } from 'styled-components'
import gql from 'graphql-tag'
import { COLORS } from 'global-styles'
import { Mutation } from 'react-apollo'
import { BOARD_QUERY } from 'features'

export const DELETE_CARD_MUTATION = gql`
  mutation deleteCard($id: ID!) {
    deleteCard(where: { id: $id }) {
      id
    }
  }
`

export const DeleteCardButtonGql = ({ id, boardId }) => (
  <Mutation
    mutation={DELETE_CARD_MUTATION}
    variables={{ id }}
    refetchQueries={[{ query: BOARD_QUERY, variables: { boardId } }]}
  >
    {(mutation, { loading }) => (
      <DeleteIcon onClick={mutation} loading={loading}>
        X
      </DeleteIcon>
    )}
  </Mutation>
)

const DeleteIcon = styled.div`
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
