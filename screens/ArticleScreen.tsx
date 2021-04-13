import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux'
import { addClip, deleteClip } from '../store/actions/user'
/* types */
import {State} from "../types/state";
import { User } from "../types/user";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { ClipButton } from '../components/ClipButton'

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

  const user = useSelector((state:State) => state.user) as User
  const { clips } = user;

  const isClipped = () => {
    return clips.some(clip => clip.url === article.url )
  }

  const toggleClip = () => {
    if(isClipped()) {
      dispatch(deleteClip({ clip: article }))
    }else {
      dispatch({clip:article})
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
    
  )
}

export default ArticleScreen;