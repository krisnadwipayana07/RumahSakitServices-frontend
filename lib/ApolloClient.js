import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import * as ws from 'ws';

import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: 'https://rich-killdeer-40.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'c9NI39G3LmlpZwN0ar7Mo5w4KM9n0jrqGdK7uFON79DULhmFxGbPGmH8sA5Wvw8R'
  }
});

const wsLink = process.browser
  ? new WebSocketLink({
      uri: 'wss://rich-killdeer-40.hasura.app/v1/graphql',
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            'x-hasura-admin-secret':
              'c9NI39G3LmlpZwN0ar7Mo5w4KM9n0jrqGdK7uFON79DULhmFxGbPGmH8sA5Wvw8R'
          }
        }
      }
    })
  : null;

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink
    )
  : httpLink;

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});
