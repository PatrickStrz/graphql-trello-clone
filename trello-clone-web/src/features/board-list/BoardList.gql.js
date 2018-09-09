import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

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

      return data.boards.map(({ id, name }) => (
        <div key={id}>
          <p>{`board: ${name}`}</p>
        </div>
      ))
    }}
  </Query>
)
