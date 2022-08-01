{
    loading && (
        <View style={styles.activityIndicator}>
            <ActivityIndicator size={'large'} color='white' />
        </View>)
}
{
    data &&
        <View style={styles.info}>
            <View style={styles.temperature}>
                <Text><Text style={{ fontSize: 56, color: 'white' }}>{data?.main?.temp ? Math.round(data?.main?.temp) : null}</Text><Text style={{ color: 'white' }}>{data?.main?.temp ? '°C' : null}</Text></Text>
            </View>
            <View>
                <Text style={{ color: 'white' }}>{data ? data?.weather?.map(e => e.description) : null}</Text>
            </View>
            <View style={styles.naming}>
                <Text style={styles.nameInfo}>{data ? data?.name : null}</Text>
                <Text style={styles.nameInfo}>{data ? data?.sys?.country : null}</Text>
            </View>
            {/* <Text style={styles.nameInfo}>{new Date().toLocaleString()} </Text> */}


            {data.main ?
                <View style={styles.containerStyle}>
                    <View style={styles.contentStyle}>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ color: 'white' }}>Real feel</Text>
                            <Text><Text style={styles.textStyle}>{data ? data?.main?.feels_like : null}</Text><Text style={styles.textStyle}>{data?.main?.feels_like ? '°C' : null}</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ color: 'white' }}>Pressure</Text>
                            <Text style={styles.textStyle}>{data ? data?.main?.pressure : null}mbar</Text>
                        </View>

                    </View>
                    <View style={styles.contentStyle}>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ color: 'white' }}>Humidity</Text>
                            <Text style={styles.textStyle}>{data ? data?.main?.humidity : null}%</Text>
                        </View>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ color: 'white' }}>Speed</Text>
                            <Text style={styles.textStyle}>{data ? data?.wind?.speed : null}km/h</Text>
                        </View>
                    </View>

                </View> :
                null
            }
        </View>

}


 // const { weather,
    //     name,
    //     sys: { country },
    //     main: { temp, humidity },
    //     wind: { speed }
    // } = weatherData;

    // const [{ main }] = weather;

    // useEffect(() => {
    //     setBackgroundImage(getBackgroundImg(main));
    // }, [weatherData])

    // function getBackgroundImg(weather) {
    //     if (weather === 'Snow') return snow
    //     if (weather === 'Clear') return sunny
    //     if (weather === 'Rain') return rainy
    //     if (weather === 'Haze') return haze
    //     return haze;
    // }
    // let textColor = backgroundImage !== sunny ? 'white' : 'black'