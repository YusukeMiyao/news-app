import React, {useState,useEffect} from 'react';
import { StyleSheet, FlatList,SafeAreaView} from 'react-native';
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import axios from 'axios'
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import {Article} from "../types/article";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

const HomeScreen = ({ navigation }:Props) => {
  const [articles, setArticles] = useState<any>([])

  useEffect(() => {
    fetchArticles();
  }, [])
  
  const fetchArticles = async () => {
    try {
      const respose = await axios.get(URL)
      setArticles(respose.data.articles)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={()=>navigation.navigate("Article", {article: item})}
          />
        )}
        keyExtractor={(item,index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;