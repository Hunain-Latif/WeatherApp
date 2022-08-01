import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('weather')
        }, 2500);
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                source={require('../Assets/images/splashscreen.png')}

            />

        </View>
    )
}

export default SplashScreen