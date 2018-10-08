import React from 'react'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Button } from 'shared'
// import { BOARD_QUERY } from 'features/board'

export const UPDATE_CARD_MUTATION = gql`
  mutation updateCardOnList($name: String!, $cardId: ID!) {
    updateCard(where: { id: $cardId }, data: { name: $name, description: "" }) {
      id
      name
    }
  }
`

export const UpdateCardButtonGql = ({ cardTitle, cardId }) => (
  <Mutation
    mutation={UPDATE_CARD_MUTATION}
    variables={{ name: cardTitle, cardId }}
  >
    {(mutation, { error, loading }) => (
      <div>
        <p>{error && error.message}</p>
        <Button
          primary
          onClick={() =>
            mutation({
              // refetchQueries: [{ query: BOARD_QUERY, variables: { boardId } }]
            })
          }
        >
          {loading ? '...loading' : 'Update Card Title'}
        </Button>
      </div>
    )}
  </Mutation>
)
