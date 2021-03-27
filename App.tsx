import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderBottomColor:'gray',
    borderWidth: 1,
    flexDirection:'row'
  },
  leftContainer: {
    width:100
  },
  rightContainer: {
    flex: 1,
    flexDirection:'column',
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer} >
        <View style={styles.leftContainer}>
          <Image style={{ width: 100, height: 100 }}
            source={{ uri: 'https:facebook.github.io/react-native/img/tiny_logo.png' }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>
            fadafjajfkjaljflajflkjslkjflaksjdfljasldfjkaslkjdflasdjflasjdlfjaslkdfjalsjfalsfjjffdsjfldsjflasfjjfadlsjfljaslkfjadsljflaksdjflkjadsdlfjkaslnfvaskjlkajfdlkjasldkjvalkjflasfa;l jfkjsfkjkfjlkdasjlfkadslfadsljflasjkdflasjflkajdslfkjlaksjflkajsflkjaslfkjlkdsfjd
          </Text>
          <Text>ReactNews</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

