import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';

const Temperature = () => {
    const [temperature, setTemperature] = useState('');
    return (
        <View style={styles.main}>
            <Text style={styles.temperatureText}>Temperatur</Text>
            <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', gap: 20}}>
                <View>
                    <Image
                        style={{width: 70, height: 70, borderRadius: 10}}
                        source={require('./img/quba.jpg')}
                    />
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                    <Text style={{fontSize: 25, fontWeight: '600', color: '#000000'}}>9 °C, Günəşli, 30% rütubət</Text>
                    <Text style={{fontSize: 15, fontWeight: '400', color: '#000000'}}>
                        Quba, Azərbaycan
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', gap: 20}}>
                <View>
                    <Image
                        style={{width: 70, height: 70, borderRadius: 10}}
                        source={require('./img/xudat.jpg')}
                    />
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                    <Text style={{fontSize: 25, fontWeight: '600', color: '#000000'}}>27 °C, Günəşli, 9% rütubət</Text>
                    <Text style={{fontSize: 15, fontWeight: '400', color: '#000000'}}>
                        Xudat, Azərbaycan
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Temperature;
