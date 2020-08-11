import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#8257E5',
    flex:1,
    justifyContent:'center',
    padding:40
  },
  mainPrincipal:{
  },
  backgroundMenu:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
 
  content:{
    width:'80%',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:30
  },
  offButton:{
    marginBottom:30,
    backgroundColor:'#774DD6',
    width:50,
    height:50,
    borderRadius:8,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  PerfilImg:{
    width:65,
    height:65,
    borderRadius:50,
  },
  name:{
    fontFamily:'Poppins_400Regular',
    color:'#D4C2FF'
  },
  banner: {
    width: '100%',
    resizeMode: "contain",

  },
  title:{
    fontFamily:'Poppins_400Regular',
    color:'#6A6180',
    fontSize:20,
    lineHeight:30,
    marginTop:20
  },
  titleBold:{
    fontFamily: 'Poppins_600SemiBold'
  },
  buttonsContainer:{
    flexDirection:'row',
    marginTop:40,
    justifyContent:'space-between',
  },
  button:{
    height: 150,
    width: '48%',
    backgroundColor:'#333',
    borderRadius:8,
    padding: 24,
    justifyContent:'space-between',
  },
  buttonPrimary:{
    backgroundColor: '#9871f5'
  },
  buttonSecondary:{
    backgroundColor:'#04d361'
  },
  buttonText:{
    fontFamily:'Archivo_700Bold',
    color: "#FFFF",
    fontSize:20
  },
  totalConnectios:{
    fontFamily:'Poppins_400Regular',
    color:'#9C98A6',
    fontSize:12,
    lineHeight:20,
    maxWidth: 200,
    marginTop: 40
  },
  ButtonsMenu:{
    backgroundColor:'#EBEBF5',
     padding:40
  },
  
 
})
export default styles