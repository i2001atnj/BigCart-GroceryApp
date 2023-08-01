import React from 'react'
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import {LinearGradient} from 'expo-linear-gradient';
import { useProduct } from '../hooks/useProduct';

export default function HomeScreen(){
  const products = useProduct();
  console.log(products[0].length);
  return (
    <SafeAreaView style={styles.Homepage}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#FFFFFF', '#F4F5F9']}>
          <View style={styles.SearchbarSection}>
            <Searchbar/>
          </View>
          <View style={styles.BannerSection}>
            <Banner/>
          </View>
          <View style={styles.CategoriesSection}>
            <Categories/>
          </View>
          <View style={styles.FeaturedProductsSection}>
            <FeaturedProducts products={products[0]}/>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Homepage: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  SearchbarSection: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 27,
  },
  BannerSection: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 300,
    width: '100%',
    zIndex: 1,
    marginTop: 10,
    paddingHorizontal: 17
  },
  CategoriesSection: {
    marginTop: -25,
    paddingHorizontal: 17
  },
  FeaturedProductsSection: {
    marginTop: 25,
    paddingHorizontal: 17
  }
})