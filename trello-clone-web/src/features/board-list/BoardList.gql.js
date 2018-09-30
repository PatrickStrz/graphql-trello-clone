import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
const SELECT_BOARD_QUERY = gql`
  query boardsList {
    boards {
      id
      name
    }
  }
`

export const BoardList = () => (
  <Query query={SELECT_BOARD_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <Box>
          {data.boards.map(({ id, name }) => (
            <Link
              key={id}
              style={{ color: 'red', margin: 5 }}
              to={`board/${id}`}
            >
              {name}
            </Link>
          ))}
        </Box>
      )
    }}
  </Query>
)

const Box = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
