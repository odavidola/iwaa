// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {container} from "ansi-fragments";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default Header;
