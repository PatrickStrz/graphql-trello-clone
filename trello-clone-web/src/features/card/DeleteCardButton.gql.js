import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { BOARD_QUERY } from 'features'
import { DeleteIcon } from 'shared'

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
      <DeleteIcon onClick={mutation} loading={loading} />
    )}
  </Mutation>
)
