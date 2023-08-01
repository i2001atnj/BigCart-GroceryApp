import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native'

export default function Searchbar() {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Search screen')}>
      <View style={styles.Searchbar}>
        <TouchableOpacity>
          <Image source={require('../assets/search.png')}/>
        </TouchableOpacity>
        <View>
          <TextInput placeholder='Search keywords..' placeholderTextColor={'#868889'} style={styles.Input}/>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Filters screen')}>
          <Image source={require('../assets/filters.png')}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Searchbar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#F4F5F9',
    height: 50,
    borderRadius: 5,
    alignItems: 'center'
  },
  Input: {
    width: 210,
    fontWeight: '600',
    fontSize: 16,
  }
})