import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { useDispatch } from 'react-redux'
import { addClip, deleteClip } from '../store/actions/user'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Article">;
  route: RouteProp<RootStackParamList, "Article">;
}

const ArticleScreen = ({ route }:Props) => {
  const { article } = route.params
  
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => { dispatch(addClip({clip:article}))}}>
        <Text style={{margin: 10, fontSize: 30}}>ADDDD</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { dispatch(deleteClip({clip:article}))}}>
        <Text style={{margin: 10, fontSize: 30}}>DELETE</Text>
      </TouchableOpacity>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
    
  )
}

export default ArticleScreen;