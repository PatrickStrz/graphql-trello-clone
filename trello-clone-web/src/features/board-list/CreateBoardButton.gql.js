import React from 'react'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Button } from 'shared'
import { BOARD_LIST_QUERY } from './'

export const CREATE_BOARD_MUTATION = gql`
  mutation createBoard($name: String!) {
    createBoard(data: { name: $name }) {
      id
      name
    }
  }
`

export const CreateBoardButtonGql = ({ name, onSuccess }) => (
  <Mutation mutation={CREATE_BOARD_MUTATION} variables={{ name }}>
    {(mutation, { error, loading }) => (
      <div>
        <p>{error && error.message}</p>
        <Button
          primary
          onClick={() =>
            mutation({
              refetchQueries: [{ query: BOARD_LIST_QUERY }]
            }).then(onSuccess())
          }
        >
          {loading ? '...loading' : 'Create a new board'}
        </Button>
      </div>
    )}
  </Mutation>
)
