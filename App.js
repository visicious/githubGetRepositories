/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Alert } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { onError } from 'apollo-link-error';

import { gitApiUrl, gitToken } from './src/constants/constants';
import apolloCodegenData from './src/constants/schemaGraphql.json';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import gitCommits from './src/views/gitCommits';
import gitRepositories from './src/views/gitRepositories';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const introspectionQueryResultData = {
      ...apolloCodegenData,
      __schema: {
        ...apolloCodegenData.__schema,
        types: apolloCodegenData.__schema.types.filter(
          type => type.possibleTypes !== null
        ),
      },
    };

    const apolloHttpRequest = new HttpLink({
      uri: gitApiUrl,
      headers: {
        authorization: `Bearer ${gitToken}`,
      },
    });

    const apolloErrorHandler = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.warn(`Error with database: Message: ${message}, Location: ${locations}, Path: ${path}`),
        );
        Alert.alert('Error','Unable to connect with the database. Please, try again');
      }

      if (networkError) {
        Alert.alert('Error','Internet connection broke. Please, check your network');
        console.log(`Connection Error: ${networkError}`);
      }
    });

    const fragmentMatcher = new IntrospectionFragmentMatcher({
      introspectionQueryResultData,
    });

    const apolloLink = ApolloLink.from([apolloErrorHandler, apolloHttpRequest]);
    const apolloCache = new InMemoryCache({ fragmentMatcher });

    const apolloClient = new ApolloClient({ link: apolloLink, cache: apolloCache });

    return(
      <ApolloProvider client={apolloClient}>
        <Router>
          <Stack key='root'>
            
            <Scene
              component={gitRepositories}
              hideNavBar={true}
              key='gitRepositories'
              title='Git Repositories'
              wrap={false}
            />

            <Scene
              component={gitCommits}
              hideNavBar={false}
              key='gitCommits'
              title='Git Commits'
              back={true}
              backTitle="Repositories"
              wrap={false}
            />
          </Stack>
        </Router>
      </ApolloProvider>
    );
  }
}