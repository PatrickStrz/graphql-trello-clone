import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { BOARD_QUERY } from 'features'
import { DeleteIcon } from 'shared'

export const DELETE_LIST_MUTATION = gql`
  mutation deleteList($id: ID!) {
    deleteList(where: { id: $id }) {
      id
    }
  }
`

export const DeleteListButtonGql = ({ listId, boardId, iconStyles }) => (
  <Mutation
    mutation={DELETE_LIST_MUTATION}
    variables={{ id: listId }}
    refetchQueries={[{ query: BOARD_QUERY, variables: { boardId } }]}
  >
    {(mutation, { loading }) => (
      <DeleteIcon onClick={mutation} loading={loading} styles={iconStyles} />
    )}
  </Mutation>
)
