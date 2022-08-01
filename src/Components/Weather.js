import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, ImageBackground, Image } from 'react-native';
import Search from './Search';
import { haze, rainy, snow, sunny, clouds, mist, bg } from '../Assets/images/backgroundImages/index'
import LottieView from 'lottie-react-native'

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const {
        weather,
        name,
        sys: { country },
        main: { humidity, pressure, temp, temp_min, temp_max, feels_like },
        wind: { speed }
    } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if (weather === 'Snow') return snow
        if (weather === 'Clear') return sunny
        if (weather === 'Rain') return rainy
        if (weather === 'Haze') return haze
        if (weather === 'Clouds') return clouds
        if (weather === 'Mist' && 'Smoke') return mist
        return haze;
    }
    let textColor = backgroundImage !== sunny ? 'white' : 'black'

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>

                <ImageBackground
                    source={backgroundImage}
                    style={styles.backgroundImg}
                    resizeMode='cover'
                >
                    <Search fetchWeatherData={fetchWeatherData} />


                    <View style={{ marginTop: 20, }}>
                        <View style={styles.temperatureContainer}>
                            <View style={styles.temperature}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                                    {
                                        weather[0].main === 'Clear' ?
                                            <LottieView
                                                source={require('../Assets/animation/sunny.json')}
                                                autoPlay
                                                style={{ width: 100, height: 100 }}
                                            />
                                            :
                                            weather[0].main === 'Clouds' ?
                                                <>
                                                    <LottieView
                                                        source={require('../Assets/animation/clouds.json')}
                                                        autoPlay
                                                        style={{ width: 100, height: 100 }}
                                                    />
                                                </>
                                                :
                                                weather[0].main === 'Rain' ?
                                                    <>
                                                        <LottieView
                                                            source={require('../Assets/animation/rainy.json')}
                                                            autoPlay
                                                            style={{ width: 150, height: 100 }}
                                                        />
                                                    </>
                                                    :
                                                    weather[0].main === 'Snow' ?
                                                        <>
                                                            <LottieView
                                                                source={require('../Assets/animation/snow.json')}
                                                                autoPlay
                                                                style={{ width: 150, height: 100 }}
                                                            />
                                                        </>
                                                        :
                                                        weather[0].main === 'Haze' ?
                                                            <>
                                                                <LottieView
                                                                    source={require('../Assets/animation/haze.json')}
                                                                    autoPlay
                                                                    style={{ width: 150, height: 100 }}
                                                                />
                                                            </>
                                                            :
                                                            weather[0].main === 'Mist' ?
                                                                <>
                                                                    <LottieView
                                                                        source={require('../Assets/animation/haze.json')}
                                                                        autoPlay
                                                                        style={{ width: 150, height: 100 }}
                                                                    />
                                                                </>
                                                                :
                                                                weather[0].main === 'Smoke' ?
                                                                    <>
                                                                        <LottieView
                                                                            source={require('../Assets/animation/smoke.json')}
                                                                            autoPlay
                                                                            style={{ width: 150, height: 100 }}
                                                                        />
                                                                    </>
                                                                    :
                                                                    null
                                    }
                                    <Text style={{ color: textColor, fontSize: 24 }}>{main}</Text>
                                </View>
                            </View>
                            <View style={styles.naming}>
                                <Text style={{ fontSize: 56, color: textColor }}>{Math.round(temp)}°C</Text>
                                <Text style={{ fontSize: 26, color: textColor }}>{name}</Text>
                                <Text style={{ fontSize: 26, color: textColor }}>{country}</Text>
                                <Text style={{ fontSize: 16, color: textColor }}>{new Date().toLocaleDateString()}</Text>
                                <Text style={{ fontSize: 16, color: textColor }}>{new Date().toLocaleTimeString()}</Text>

                            </View>
                        </View>
                        <View style={styles.containerStyle}>
                            <View style={styles.contentStyle}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: textColor }}>Real feel</Text>
                                    <Text style={{ ...styles.textStyle, color: textColor }}>{feels_like}</Text>
                                </View>
                                <View style={{ flexDirection: 'column', marginTop: 40 }}>
                                    <Text style={{ color: textColor }}>Pressure</Text>
                                    <Text style={{ ...styles.textStyle, color: textColor }}>{pressure}mbar</Text>
                                </View>

                            </View>
                            <View style={styles.contentStyle}>
                                <View style={{ flexDirection: 'column', }}>
                                    <Text style={{ color: textColor }}>Humidity</Text>
                                    <Text style={{ ...styles.textStyle, color: textColor }}>{humidity}%</Text>
                                </View>
                                <View style={{ flexDirection: 'column', marginTop: 40 }}>
                                    <Text style={{ color: textColor }}>Speed</Text>
                                    <Text style={{ ...styles.textStyle, color: textColor }}>{speed} m/s</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                </ImageBackground>

            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temperatureContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.3)',
        height: 210,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center'
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    temperature: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '45%',
    },
    naming: {
        width: '45%',
        marginVertical: 25
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerStyle: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 30,
        padding: 10
    },
    contentStyle: {
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10
    }

});