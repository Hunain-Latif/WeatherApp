import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

const Practice = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        // console.log('useeffect')
        // Alert.alert('you clicked')
        // incrementHandle()
    }, [num])


    function incrementHandle() {
        // console.log('function')
        return (
            <View><Text>{setNum(num + 1)}</Text></View>
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{num}</Text>
            <Button title='click me' onPress={incrementHandle} />
        </View>
    )
}

export default Practice

const styles = StyleSheet.create({})