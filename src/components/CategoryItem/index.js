import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native'

export default function CategoryItem({data, favorite}){
  const navigation = useNavigation();

  function handleNavigate(){
    navigation.navigate("Category", {id: data.id, title: data?.attributes?.Name} )
  }

  return (
    <TouchableOpacity 
    activeOpacity={0.9}
    style={styles.container}
    onPress={handleNavigate}
    onLongPress={favorite}
    >

      <Image 
        style={styles.icon}
        source={{uri: `http://192.168.3.36:1337${data?.attributes?.icon?.data?.attributes?.url}`}}
      />

      <Text style={styles.name}>{data?.attributes?.Name}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginLeft: 8,
    marginVertical: 8,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 40,
    height: 40,
  }
})