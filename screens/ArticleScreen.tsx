import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/navigation";
import {RouteProp} from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

type Props = {
  route: RouteProp<RootStackParamList, "Article">;
}

const ArticleScreen = ({ route }:Props) => {
  const {article} = route.params
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  )
}

export default ArticleScreen;