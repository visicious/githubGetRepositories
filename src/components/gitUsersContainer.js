import React from 'react';
import { Alert, ActivityIndicator, View, ScrollView, Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { GitUserElement } from './gitUserElement'
import styles from '../styles/styles';

const gitUsersQuery = gql`
  query getUsersBySearchTerm($searchTerm: String!) {
    search(query: $searchTerm, type: USER, first: 30) {
      userCount
      edges {
        node {
          ... on User {
            login
            name
          }
        }
      }
    }
  }
`;

export const GitUsersContainer = ({pickUserHandler, searchTerm}) => {
  const { loading, error, data } = useQuery(gitUsersQuery, {
    variables: { searchTerm: searchTerm },
  });

  return (
    <View style={styles.gitSearchResultsContainer}>
      <ScrollView style={styles.gitSearchUsersResultContainerWrapper}>
        <View style={styles.gitSearchUsersResultContainer}>
          { 
            (loading) ?
            (<ActivityIndicator size="large" color="#00ff00" />) :
            (
              data.search.edges.map( (element,index) => {
                if(element.node.__typename == 'User'){
                  return (
                    <GitUserElement pickUser={pickUserHandler} login={element.node.login} name={element.node.name} />
                  );
                }
              })
            )
          }
        </View>
      </ScrollView>
    </View>
  );  

}