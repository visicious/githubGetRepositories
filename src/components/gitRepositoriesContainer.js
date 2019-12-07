import React from 'react';
import { ActivityIndicator, View, ScrollView, Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { GitRepositoryElement } from './gitRepositoryElement'
import styles from '../styles/styles';

const gitRepositoriesQuery = gql`
  query getRepositoriesByUser($login: String!) {
    user(login:$login) {
      repositories(first:50) {
        edges {
          node {
            name
            description
            pullRequests {
              totalCount
            }
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

export const GitRepositoriesContainer = ({sendingPropsHandler,repositoryOwner}) => {

  if (repositoryOwner == '' || repositoryOwner == null) {
    return (
      <ScrollView style={styles.gitSearchResultContainerWrapper}>
        <View style={styles.gitSearchResultContainer}>
          <Text> There is no repositories to show</Text>
        </View>
      </ScrollView>
    );
  } else {
    const { loading, error, data } = useQuery(gitRepositoriesQuery, {
      variables: { login: repositoryOwner },
    });

    return (
      <ScrollView style={styles.gitSearchResultContainerWrapper}>
        <View style={styles.gitSearchResultContainer}>

          { 
            (loading) ?
            (<ActivityIndicator size="large" color="#00ff00" />) :
            (
              data.user.repositories.edges.map( (repository,index) => {
                return (
                  <GitRepositoryElement chooseRepository={sendingPropsHandler} owner={repository.node.owner.login} name={repository.node.name} prCount={repository.node.pullRequests.totalCount} description={repository.node.description} />
                );
              })
            )
          }

        </View>
      </ScrollView>

    );
  }
}