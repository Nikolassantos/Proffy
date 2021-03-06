import React, { useState } from 'react';
import { View ,Image,Text, Linking} from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import FavoriteICon from '../../../assets/images/icons/heart-outline.png'
import UnFavoriteICon from '../../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../../assets/images/icons/whatsapp.png'
import api from '../../../services/api';

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
  teacher:Teacher,
  favorited: boolean,
}

const TeacherItem: React.FC<TeahcerItemProps> = ({ teacher, favorited }) => {
  const [isfavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post('connections',  {
      user_id: teacher.id, 
    })

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorites() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

      if (favorites) {
         favoritesArray = JSON.parse(favorites)
      }

    if(isfavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id
      })

        favoritesArray.splice(favoriteIndex, 1);  

        setIsFavorited(false);
    } else {

      favoritesArray.push(teacher)

      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))

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
        <RectButton 
        onPress={handleToggleFavorites}
        style={[
          styles.favoriteButton,
          isfavorited ? styles.favorited : {},
          ]} 
        >
          { isfavorited ?
            <Image source={UnFavoriteICon} /> 
            : <Image source={FavoriteICon} /> 
          }
           
  
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