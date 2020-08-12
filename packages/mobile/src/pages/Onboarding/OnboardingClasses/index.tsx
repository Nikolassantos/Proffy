import React from 'react';
import { View, Image,Text, ImageBackground } from 'react-native'
import BackIcon from '../../../assets/images/icons/Voltar.png';
import Pages from '../../../assets/images/icons/Pages2.png';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import GiveClasses from '../../../assets/images/icons/give-classes.png'

import Background from '../../../assets/images/BackgroundOnbordingClass.png'


import styles from './styles'


function OnboardingStudy() {
  const { navigate } = useNavigation()

  function GoToNextScreen() {
    navigate('Landing')
  }  


  return (
    <View style={styles.container} >
      <View style={styles.studyBackground} >
        <ImageBackground source={Background} style={styles.backgroundStudyIMG} >
         <Image source={GiveClasses}  style={styles.StudyIcon}/>
        </ImageBackground>
      </View>
      <View style={styles.nextpage} >
        <View style={styles.content} >
          <View>
            <Text style={styles.contentTextNumber} >02.</Text>
            <Text style={styles.description}>Ou dê aulas sobre o que você mais conhece</Text>
          </View>
          <View style={styles.nextPageIcon} >
             <Image source={Pages} />
             <BorderlessButton onPress={GoToNextScreen} >
               <Image source={BackIcon}  />
             </BorderlessButton>
          </View>
        </View>
      </View>
    </View>
  )
}
export default OnboardingStudy
