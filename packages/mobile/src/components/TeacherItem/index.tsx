import React from 'react';
import { View ,Image,Text, Linking} from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';

import FavoriteICon from '../../assets/images/icons/heart-outline.png'
import UnFavoriteICon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeahcerItemProps {
  teacher:Teacher
}

const TeacherItem: React.FC<TeahcerItemProps> = ({ teacher }) => {

  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }
  return (
    <View style={styles.container} >
      <View style={styles.profile} >
      <Image
      style={styles.avatar}
       source={{ uri: teacher.avatar }}
       />

       <View style={styles.profileInfo} >
  a     <Text style={styles.name}>{teacher.name}</Text>
        <Text style={styles.subject}>Matemática</Text>
       </View>
      </View>
      <Text style={styles.bio}>
          {teacher.bio}
       </Text>
       <View style={styles.footer} >
        <Text style={styles.price} > 
          Preço/Hora{'   '}
           <Text style={styles.priceValue}>{teacher.cost}</Text>
        </Text>
        <View style={styles.buttonContainer} >
        <RectButton style={[styles.favoriteButton, styles.favorited]} >
          {/* <Image source={FavoriteICon} /> */}
          <Image source={UnFavoriteICon} />
        </RectButton>

        <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton} >
          <Image source={whatsappIcon} />
          <Text style={styles.contactButtonText}>
            Entrar em Contato
          </Text>
        </RectButton>
        </View>
       </View>
    </View>
  )
}
export default TeacherItem