import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import { GitCommitsContainer } from '../components/gitCommitsContainer'
import styles from '../styles/styles';

export default class gitCommits extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setParams({
      title: this.props.repositoryName,
    });
    this.state= {
      owner: this.props.owner,
      repositoryName: this.props.repositoryName
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <GitCommitsContainer owner={this.state.owner} repositoryName={this.state.repositoryName}/>
      </View>
    );
  }
}