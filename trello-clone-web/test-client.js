import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/patrickstrzelec/trello-clone-api/dev'
})

import gql from 'graphql-tag'

client
  .query({
    query: gql`
      query entireTrelloAppQuery {
        boards {
          lists {
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
  })
  .then(result => console.log(result))
