import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../styles/styles';

export const GitUserElement = ({pickUser, name, login}) => {

  return (
    <TouchableOpacity style={styles.gitUserElement} onPress={() => pickUser(login)}>
      <Text style={styles.gitUserElementLogin}>{login}</Text>
      <Text style={styles.gitUserElementName}>{name}</Text>
    </TouchableOpacity>
  );

}