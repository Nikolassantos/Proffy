import React, { useState } from 'react';
import {View, ScrollView,Text , TextInput} from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { Feather } from '@expo/vector-icons'
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native';



function TeacherList() {
  const [isFiltersVisible, setisFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })

        setFavorites(JSON.parse(response));
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites();
  })

 

  function handleToggleFilterVisible() {
    setisFiltersVisible(!isFiltersVisible);
  }
  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setisFiltersVisible(false)
    setTeachers(response.data);
  }


  return (
    <View style={styles.container}>
     <PageHeader 
     title="Proffys Disponíveis" 
     headerRight={(
       <BorderlessButton onPress={handleToggleFilterVisible} >
        <Feather name="filter" size={20} color="#FFF" />
       </BorderlessButton>
     )}
     >
    { isFiltersVisible && (
      <View style={styles.searchForm} >
          <Text style={styles.label}>Matéria</Text>
          <TextInput style={styles.input}
              placeholder='Qual a matéria?'
              placeholderTextColor='#c1bccc'
              value={subject}
              onChangeText={text => setSubject(text)}
          />

          <View style={styles.inputGroup} >
            <View style={styles.inputBlock} >
              <Text style={styles.label}>Dia da Semana</Text>
                <TextInput style={styles.input}
                  placeholder='Qual dia?'
                  placeholderTextColor='#c1bccc'
                  value={week_day}
                  onChangeText={text => setWeek_day(text)}

                />
              </View> 

            <View style={styles.inputBlock} >
              <Text style={styles.label}>Horario</Text>
                <TextInput style={styles.input}
                  placeholder='Qual horario?'
                  placeholderTextColor='#c1bccc'
                  value={time}
                  onChangeText={text =>setTime(text)}
                />
              </View> 
          </View>

          <RectButton onPress={handleFiltersSubmit} style={styles.submitButton} > 
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>
        </View>
      )}
     </PageHeader>
     <ScrollView
     style={styles.TeacherList}
     contentContainerStyle={{
       paddingHorizontal:16,
       paddingBottom:16
     }}
     >
       {teachers.map((teacher:Teacher) => {
         return (
          <TeacherItem 
          key={teacher.id} 
          teacher={teacher}
          favorited={favorites.includes(teacher.id)}
          />
         )
       })}
     </ScrollView>

    </View>
  )
}
export default TeacherList