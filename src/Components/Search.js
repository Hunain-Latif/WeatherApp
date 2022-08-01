import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const Search = ({ fetchWeatherData }) => {
    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.textInput}>
            <TextInput
                style={{
                    width: '80%',
                    borderRadius: 2,
                    borderWidth: 0.5,
                    borderColor: 'transparent'
                }}
                label='Enter City name'
                outlineColor="white"
                activeOutlineColor="black"
                mode='outlined'
                theme={{
                    colors: {
                        background: 'white'
                    }
                }}
                value={cityName}
                onChangeText={(text) => setCityName(text)}
                onSubmitEditing={() => fetchWeatherData(cityName)}

            />
            <View style={{ position: 'absolute', top: 20, right: 50 }}>
                <Button title='search' color='black' onPress={() => fetchWeatherData(cityName)} />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    textInput: {
        // backgroundColor: 'white',
        // backgroundColor: 'rgba(155,255,255,0.2)',
        borderRadius: 10,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 40,


    },
})
