import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/styles';

export const GitRepositoryElement = ({chooseRepository, owner, name, prCount, description}) => {

  return (
    <TouchableOpacity style={styles.gitRepositoryElement} onPress={() => chooseRepository(owner,name)}>
      <View style={styles.gitRepositoryDetails}>
        <View style={styles.gitRepositoryName}>
          <Text style={styles.gitRepositoryNameText}>{name}</Text>
        </View>
        <View style={styles.gitRepositoryPRCount}>
          <Text style={styles.gitRepositoryPRCountText}>PR Count: {prCount} </Text>
        </View>
      </View>

      <Text style={styles.gitRepositoryDescription}>
        {description}
      </Text>
    </TouchableOpacity>
  );

}