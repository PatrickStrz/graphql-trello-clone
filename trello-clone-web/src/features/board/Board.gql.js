import React from 'react'
import Styled from 'styled-components'

import gql from 'graphql-tag'

import { Query } from 'react-apollo'

import { LoadingIndicator } from 'shared'

const BOARD_QUERY = gql`
  query entireTrelloAppQuery($boardId: ID!) {
    board(where: { id: $boardId }) {
      lists {
        id
        name
        cards {
          id
          name
          description
          comments {
            id
            text
          }
        }
      }
    }
  }
`

export const BoardGql = ({ id }) => (
  <Box>
    <Query query={BOARD_QUERY} variables={{ boardId: id }}>
      {({ error, loading, data }) => {
        if (error) {
          return <p>Error!</p>
        }
        if (loading) {
          return <LoadingIndicator />
        }
        console.log(data)
        return <div>{data.board.lists[0].name}</div>
      }}
    </Query>
    {/* <Title>fetching for board with id: {id}</Title> */}
  </Box>
)

const Box = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:'red';
`

const Title = Styled.p``
