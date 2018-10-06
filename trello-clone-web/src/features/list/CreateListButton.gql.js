import React from 'react'
import { Button } from 'shared'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { BOARD_QUERY } from '../board'

export const CREATE_LIST_MUTATION = gql`
  mutation createListOnBoard($name: String!, $boardId: ID!) {
    createList(data: { name: $name, board: { connect: { id: $boardId } } }) {
      id
      name
      cards {
        id
        name
      }
    }
  }
`

export const CreateListButtonGql = ({ boardId, name, onSuccess }) => (
  <Mutation
    mutation={CREATE_LIST_MUTATION}
    variables={{ name, boardId }}
    refetchQueries={[{ query: BOARD_QUERY, variables: { boardId } }]}
  >
    {(mutation, { loading }) => (
      <Button loading={loading} onClick={() => mutation().then(onSuccess())}>
        {loading ? '...loading' : 'Create new list'}
      </Button>
    )}
  </Mutation>
)
