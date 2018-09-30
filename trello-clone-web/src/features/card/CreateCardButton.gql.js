import React from 'react'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Button } from 'shared'
import { BOARD_QUERY } from 'features/board'

export const CREATE_CARD_MUTATION = gql`
  mutation createCardOnList(
    $name: String!
    $description: String!
    $listId: ID!
  ) {
    createCard(
      data: {
        name: $name
        description: $description
        list: { connect: { id: $listId } }
      }
    ) {
      id
      name
      description
    }
  }
`

export const CreateCardButtonGQL = ({
  name,
  description,
  listId,
  boardId,
  onSuccess
}) => (
  <Mutation
    mutation={CREATE_CARD_MUTATION}
    variables={{ name, description, listId }}
  >
    {(createCardOnList, { error, loading, data }) => (
      <div>
        <p>{error && error.message}</p>
        <Button
          primary
          onClick={() =>
            createCardOnList({
              refetchQueries: [{ query: BOARD_QUERY, variables: { boardId } }]
            }).then(onSuccess())
          }
        >
          {loading ? '...loading' : 'Add Card'}
        </Button>
      </div>
    )}
  </Mutation>
)
