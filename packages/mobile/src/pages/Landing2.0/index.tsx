import React from 'react';

import { View, Image , Text,  } from 'react-native';
import styles from  './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import Off from '../../assets/images/Sair.png'
import api from '../../services/api';

function Landing() {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.mainPrincipal} >
        <View style={styles.backgroundMenu} >
          <View style={styles.content} >
            <Image source={{ uri: `https://avatars2.githubusercontent.com/u/14251143?s=460&u=340ed1d854bbacc22b9a3210a18a1f589a28bc40&v=4` }}
              style={styles.PerfilImg}
            />
            <Text style={styles.name} >{'   '}Tiago Luchtenberg</Text>
          </View>
          <BorderlessButton style={styles.offButton} >
            <Image source={Off}/>
          </BorderlessButton>
        </View>
       <Image style={styles.banner} source={landingImg} />
      </View>
    </View>
    <View style={styles.ButtonsMenu} >

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton  style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>
            Estudar
          </Text>
        </RectButton>

        <RectButton 
         style={[styles.button, styles.buttonSecondary]}
         >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>
            Dar aulas
          </Text>
        </RectButton>
      </View> 
        <Text style={styles.totalConnectios}>Total de 200 conexões</Text>
      </View>
    </>
  )

}
export default Landing