import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAppDispatch } from "../app/hooks";
import { increment, decrement, incrementByAmount, reset, decrementByAmount } from '../features/counter/counterSlice';

export const Button = () => {

    const dispatch = useAppDispatch()

    return(
        <>
            <TouchableOpacity 
                style={[styles.button, { backgroundColor: 'black' }]}
                onPress={() => dispatch(increment())}
            >
                <Text style={styles.text}>INCREMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, { backgroundColor: 'tomato' }]}
                onPress={() => dispatch(decrement())}
            >
                <Text style={styles.text}>DECREMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, { backgroundColor: 'gray' }]}
                onPress={() => dispatch(reset())}
            >
                <Text style={styles.text}>RESET</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, { backgroundColor: 'green' }]}
                onPress={() => dispatch(incrementByAmount(10))}
            >
                <Text style={styles.text}>ADD 10</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, { backgroundColor: 'blue' }]}
                onPress={() => dispatch(decrementByAmount(10))}
            >
                <Text style={styles.text}>REMOVE 10</Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    button:{
         padding:10,
         borderRadius:5,
         margin:10   
    },
    text:{
        color: 'white',
        textAlign:'center',
        fontWeight: 'bold'
    }
})