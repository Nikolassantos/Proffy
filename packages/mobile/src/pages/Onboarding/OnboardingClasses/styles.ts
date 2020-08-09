import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#F0F0F7',
  },
  studyBackground:{
    backgroundColor:'#04D361',
    height:'40%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  StudyIcon:{
    width:100 ,
    height:100
  },
  nextpage:{
    flexDirection:'row',
    alignItems:'center',
    height:'60%',
    justifyContent:'center',
  },
  content:{
    width:'80%',
    height:'70%',
    justifyContent:'space-between'
  },
  contentTextNumber:{
    fontFamily:'Archivo_400Regular',
    color:'#6A6180',
    fontSize:40
  },
  description:{
    maxWidth:180,
    fontFamily:'Poppins_400Regular',
    fontSize:18,
    marginTop:10,
    color:'#6A6180'
  },
  nextPageIcon:{
    height:'20%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
})
export default styles