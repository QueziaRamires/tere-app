import React from"react";
import {View,Text,Image,TextInput}from"react-native";
import {NativeStackNavigationProp}from"@react-navigation/native-stack";
import {stylesLink,stylesLinkImportantes,styles }from"./styles";

import Post from "../Post";
import {useNavigation}from"@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {StackNavigatorParamList} from "../../../types";


const LinkItem=(props:any)=>{
return<Text style={stylesLink.text}>{props.name}</Text>;
};
const LinksImportantes=()=>{
  return(
    <View style={stylesLinkImportantes.container}>
      <LinkItem name="Home"/>
      <LinkItem name="Publicações"/>
      <LinkItem name="Vídeos"/>
      <LinkItem name="Fotos"/>
      <LinkItem name="Community"/>
    </View>
  )
}
type HomeProps=NativeStackNavigationProp<StackNavigatorParamList>;
const Home=()=>{
  const navigation=useNavigation<HomeProps>();
  function irTelaLogin(){
    navigation.navigate("Login");
  }
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/arrow-left.png")}></Image>
        <View style={styles.inputView}>
          <Image source={require("../../assets/ei_search.png")}></Image>
          <TextInput placeholder="Search" placeholderTextColor="#fff" style={styles.texto}></TextInput>
        </View>
        <Image source={require("../../assets/share.png")}></Image>
      </View>
      <LinksImportantes/>
      <StatusBar style="auto"/>
      <Post />
    </View>
  );
};
export default Home;