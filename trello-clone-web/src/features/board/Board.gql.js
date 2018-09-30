import React from 'react'
import styled from 'styled-components'

import gql from 'graphql-tag'

import { Query } from 'react-apollo'

import { LoadingIndicator } from 'shared'

import { ListSection } from './'

const BOARD_QUERY = gql`
  query entireTrelloAppQuery($boardId: ID!) {
    board(where: { id: $boardId }) {
      name
      lists {
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
        return (
          <Box>
            <Title>{data.board.name}</Title>
            <ListSection lists={data.board.lists} />
          </Box>
        )
      }}
    </Query>
    {/* <Title>fetching for board with id: {id}</Title> */}
  </Box>
)

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
  height: 100%;
  width: 100%;
`

const Title = styled.p``
