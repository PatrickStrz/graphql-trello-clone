import React, { Component } from 'react'
import Styled from 'styled-components'
import { globalStyles } from './globalStyles'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import { HomeScreen } from './features'

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/patrickstrzelec/trello-clone-api/dev'
})

class App extends Component {
  componentWillMount() {}
  render() {
    return (
      <ApolloProvider client={client}>
        <AppBox>
          <HomeScreen />
        </AppBox>
      </ApolloProvider>
    )
  }
}

const AppBox = Styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${globalStyles.background};
`

export default App
