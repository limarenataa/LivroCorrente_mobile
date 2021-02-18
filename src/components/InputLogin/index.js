import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';




export default function InputLogin(props) {
    return (
        <View style={styles.inputArea}>
            <TextInput style={styles.input} 
                //props
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.password}
            />
            <Text style={styles.iconArea}>{props.icon}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputArea: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        flexDirection: 'row',
        borderRadius: 10,
        paddingLeft: 15,
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-around'
    },

    input: {
        flex: 1,
        color: '#3A3939',
        fontSize: 12,
    },

    iconArea: {
        marginRight: 20,
    }

   
})