import React from 'react';
import { ActivityIndicator, View, ScrollView, Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import styles from '../styles/styles';
import { GitCommitElement } from './gitCommitElement'

const gitCommitsQuery = gql`
  query getCommitsByOwnerAndRepoName($owner: String!,$repositoryName: String!) {
    repository(owner:$owner, name:$repositoryName) {
      ... on Repository {
        object(expression:"master") {
          ... on Commit {
            history {
              edges {
                node {
                  author {
                    name
                  }
                }
              }
            } 
          }
        }
        collaborators {
          edges {
            node {
              name
              login
              location
              avatarUrl
            }
          }
        }
      }
    }
  }
`;

export const GitCommitsContainer = ({ owner, repositoryName }) => {
  const { loading, error, data } = useQuery(gitCommitsQuery, {
    variables: { owner: owner, repositoryName: repositoryName },
  });
  let gitCommitsArray, gitCollaborators = [];

  return (
    <ScrollView style={styles.gitCommitsElementsContainerWrapper}>
      <View style={styles.gitCommitsElementsContainer}>
        { 
          (loading) ?
          (<ActivityIndicator size="large" color="#00ff00" />) :
          ( (data.repository.object == null) ?
            (<Text>There is no commits to show</Text>) :
            (gitCommitsArray = data.repository.object.history.edges.map(obj => obj.node.author.name).reduce((arr,value) => { 
                                if(!arr[value]) {
                                  arr[value] = 0;
                                }
                                arr[value]+= 1;
                                return arr;
                              },[]),
            //Sorting by top contributors
            gitCommitsArray = Object.entries(gitCommitsArray).sort(function(a,b){ return b[1]-a[1]; }),

            gitCollaborators = data.repository.collaborators.edges.reduce((obj,value) => {
                                obj[value.node.login] = value.node; 
                                return obj;
                              },{}),

            gitCommitsArray.map( (commit,index) => {

              if(gitCollaborators[commit[0]] != null) {
                return (
                  <GitCommitElement avatarUrl={gitCollaborators[commit[0]].avatarUrl} name={gitCollaborators[commit[0]].name} login={gitCollaborators[commit[0]].login} location={gitCollaborators[commit[0]].location} commitCount={commit[1]} />
                );
              }

            })
            )
          )
        }
      </View>
    </ScrollView>
  );

}
