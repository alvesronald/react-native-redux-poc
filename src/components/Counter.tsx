import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from "../app/hooks";

export const Counter = () => {

    const counter = useAppSelector(state => state.counter.value)

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Counter</Text>
                <Text style={styles.counterValue}>{Math.max(0, counter)}</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    title:{
        fontSize: 30,
        fontWeight:'bold'
    },
    counterValue:{
        fontSize: 60,
        fontWeight:'bold',
        color: 'tomato'
    }
})