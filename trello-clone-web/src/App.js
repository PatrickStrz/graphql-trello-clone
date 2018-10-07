import React, { Component } from 'react'
import styled from 'styled-components'
import { COLORS } from 'global-styles/colors'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import { Router } from './Router'

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/patrickstrzelec/trello-clone-api/dev'
})

class App extends Component {
  componentWillMount() {}
  render() {
    return (
      <ApolloProvider client={client}>
        <AppBox>
          <Router />
        </AppBox>
      </ApolloProvider>
    )
  }
}

const AppBox = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${COLORS.background};
  padding: 10px;
`

export default App
