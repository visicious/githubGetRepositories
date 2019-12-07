import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import styles from '../styles/styles';

export const GitCommitElement = ({ avatarUrl, name, login, location, commitCount }) => {

  return (
    <View style={styles.gitContributorElement}>
      <View style={styles.gitContributorAvatarWrapper}>
        <Image
          source={{uri: avatarUrl}}
          style={styles.gitContributorAvatar}
        />
      </View>

      <View style={styles.gitContributorDetails}>
        <Text style={styles.gitContributorTitle}>{name}, {location}</Text>
        <Text style={styles.gitContributorDetail}>{login}   {commitCount}</Text>
      </View>
    </View>
  );

}