import React from 'react'
import styled from 'styled-components'

import gql from 'graphql-tag'

import { Query } from 'react-apollo'

import { LoadingIndicator } from 'shared'

import { ListSection } from './'
import { COLORS } from 'global-styles'

export const BOARD_QUERY = gql`
  query entireTrelloAppQuery($boardId: ID!) {
    board(where: { id: $boardId }) {
      id
      name
      lists {
        id
        name
        cards {
          id
          name
          list {
            board {
              id
            }
          }
        }
        board {
          id
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
            <ListSection lists={data.board.lists} boardId={id} />
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
  background-color: ${COLORS.background};
  min-height: 100vh;
  min-width: 100vw;
`

const Title = styled.p``
