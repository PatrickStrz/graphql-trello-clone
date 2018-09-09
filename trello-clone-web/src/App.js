import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
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
        <div className="App">
          <HomeScreen />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
