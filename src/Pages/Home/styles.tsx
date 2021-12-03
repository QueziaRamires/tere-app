import{StyleSheet}from"react-native";
export const stylesLink=StyleSheet.create({
  text:{
    marginTop:8,
    color:"#4A4A4C",
    fontSize:13,
  },
});

export const stylesLinkImportantes=StyleSheet.create({
  container:{
    borderBottomWidth:1,
    flexDirection:"row",
    paddingHorizontal:40,
    paddingVertical:10,
    justifyContent:"space-between",
  },
});
export const styles=StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    backgroundColor:"#4168af",
    paddingTop:35,
    flexDirection:"row",
    justifyContent:"space-between",
    minHeight:95,
    paddingHorizontal: 30,
  },
  inputView:{
    borderRadius:28,
    backgroundColor:"#2C4877",
    height:40,
    flexDirection:"row",
    marginHorizontal:10,
    flex:1,
    alignItems:"center",
    paddingLeft:10,
  },
  texto:{
    paddingRight:10,
    color:"#fff",
    flex:1,
  },

  button:{
    backgroundColor:"#4369B0",
    height:40,
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:40,
    borderRadius:25,
  },

  pageContent:{
    flex:1,
    justifyContent:"flex-end",
    paddingVertical:40,
  },

  textBtn:{
    color:"#F5FFFF",
    fontSize:18,
  },
});