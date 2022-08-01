import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, TextInput } from 'react-native'
import { clouds, snow, haze, sunny, rainy } from '../Assets/images/backgroundImages';
import Weather from '../Components/Weather';
// import { TextInput } from 'react-native-paper'

const MainScreen = () => {
    const [loaded, setLoaded] = useState(false);
    const [weatherData, setWeatherData] = useState(null);


    async function fetchDataHandler(cityName) {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9d9444b9e4248b95e4c4f44686d78f75`
        try {
            const response = await fetch(API);
            if (response.status == 200) {
                const data = await response.json();
                console.log(data)
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchDataHandler('lahore')

    }, [])
    return (
        <View style={styles.screen}>
            <Weather weatherData={weatherData} fetchDataHandler={fetchDataHandler} />

        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
    },



})