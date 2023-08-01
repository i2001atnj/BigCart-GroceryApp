import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import {CATEGORIES} from '../components/Categories'

export default function CategoriesScreen({navigation}){
    const category = CATEGORIES
    return (
        <SafeAreaView style={styles.CategoriesScreen}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/blackArrow.png')} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Categories</Text>
                <TouchableOpacity onPress={() => navigation.navigate()}>
                    <Image source={require('../assets/filters.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.ItemsContainer} horizontal>
                {category.map(item => (
                    <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.Item}>
                        <View style={{backgroundColor: `${item.color}`, height: 66, width: 66, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} key={category.id}>
                            <Image source={item.image} style={styles.Image}/>
                        </View>
                        <Text style={styles.Name}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    CategoriesScreen: {
        backgroundColor: '#FFF',
        height: '100%',
        width: '100%',
    },
    Header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 17,
        padding: 28,
        backgroundColor: '#FFF',
    },
    HeaderText: {
        fontSize: 18,
        fontWeight: 500
    },
    ItemsContainer: {
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#F4F5F9',
        paddingTop: 21,
        paddingHorizontal: 17
    },
    Item: {
        height: 125,
        width: 125,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    Image: {
        height: 36,
        width: 30
    },
    Name: {
        color: '#868889',
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center',
        marginTop: 9
    }
})