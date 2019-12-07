import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, View, ScrollView, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { GitRepositoriesContainer } from '../components/gitRepositoriesContainer'
import { GitUsersContainer } from '../components/gitUsersContainer'
import styles from '../styles/styles';

export default class gitRepositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      pickedUser: ''
    };
  }

  updateSearch(search) {
    this.setState({ searchTerm: search });
  };

  updatePickedUser(login) {
    this.setState({ pickedUser: login, searchTerm: '' });
  };

  sendingPropsToGitCommits(owner, repositoryName) {
    Actions.gitCommits({owner: owner, repositoryName: repositoryName}); 
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.gitRepositoriesHeader}>
          <Text style={styles.gitRepositoriesTitle}>Github Repositories</Text>
          <SearchBar
            placeholder="Search Github"
            onChangeText={this.updateSearch.bind(this)}
            value={this.state.searchTerm}
            platform='ios'
            containerStyle={styles.gitRepositoriesSearchBarContainer}
          />
        </View>
        { this.state.searchTerm != '' ?
          (<GitUsersContainer pickUserHandler={this.updatePickedUser.bind(this)} searchTerm={this.state.searchTerm}/>) :
          null
        }
        
        <GitRepositoriesContainer sendingPropsHandler={this.sendingPropsToGitCommits.bind(this)} repositoryOwner={this.state.pickedUser}/>
      </View>
    );
  }
}