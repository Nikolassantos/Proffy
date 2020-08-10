import React from 'react';
import { View, Image,Text, ImageBackground } from 'react-native'
import studyIcon from '../../../assets/images/icons/study.png';
import BackIcon from '../../../assets/images/icons/Voltar.png';
import Pages from '../../../assets/images/icons/Pages.png';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import Background from '../../../assets/images/BackgroundOnboardingStudy.png'

import styles from './styles'

function OnboardingStudy() {

  const { navigate } = useNavigation()

  function GoToNextScreen() {
    navigate('OnboardingClasses')
  }

  return (
    <View style={styles.container} >
      <View style={styles.studyBackground} >
        <ImageBackground source={Background} style={styles.backgroundStudyIMG} >
          <Image source={studyIcon}  style={styles.StudyIcon}/>
        </ImageBackground>
      </View>

      <View style={styles.nextpage} >
        <View style={styles.content} >
          <View>
            <Text style={styles.contentTextNumber} >01.</Text>
            <Text style={styles.description}>Encontre vários professores para ensinar você</Text>
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
