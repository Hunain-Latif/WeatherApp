import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, ImageBackground } from 'react-native';

import Search from '../Components/Search';
import Weather from '../Components/Weather';
import LottieView from 'lottie-react-native'


export default function Fetch() {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName) {
        setLoaded(true);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9d9444b9e4248b95e4c4f44686d78f75`
        try {
            const response = await fetch(API);
            if (response.status == 200) {
                const data = await response.json();
                console.log(data)
                setWeatherData(data);
            }
            else {
                setWeatherData(null)
            }
            setLoaded(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData('lahore');
    }, [])

    if (loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='gray' size={36} />
            </View>
        )
    }
    else if (weatherData === null) {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={styles.bgImage}
                    source={require('../Assets/images/image.jpg')}
                    resizeMode='cover'
                >
                    <View style={styles.screen}>
                        <Search style={styles.search} fetchWeatherData={fetchWeatherData} />
                        <LottieView
                            source={require('../Assets/animation/error.json')}
                            autoPlay
                            style={{ width: 50, height: 50, justifyContent: 'center', alignSelf: 'center', marginTop: 30 }}
                        />
                        <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {
                weatherData && (
                    <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    bgImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryText: {
        margin: 20,
        fontSize: 28,

    }
});