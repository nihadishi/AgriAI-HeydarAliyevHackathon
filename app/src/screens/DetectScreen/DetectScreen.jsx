'use strict';
import React, {useRef, useState} from 'react';
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import {useCameraDevice, Camera} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
const DetectScreen = () => {
    const navigation = useNavigation();
    const device = useCameraDevice('back');
    const camera = useRef(null);
    const [imageData, setImageData] = useState('');
    if (device == null) return <ActivityIndicator />;
    const handletakePhoto = async () => {
        if (!(camera == null)) {
            const photo = await camera.current.takePhoto({
                flash: 'on',
            });
            setImageData(photo.path);
            console.log(photo.path);
        }
    };
    const [model, setModel] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [imageLoaded, setImageLoaded] = useState(false);
    return imageData == '' ? (
        <View style={{flex: 1}}>
            <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo
            />
            <TouchableOpacity
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: '#00000089',
                    position: 'absolute',
                    bottom: 60,
                    alignSelf: 'center',
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: '#ffffff',
                }}
                onPress={() => {
                    handletakePhoto();
                }}
            />
        </View>
    ) : (
        <View
            style={{
                flex: 1,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Image
                style={{width: '100%', height: '100%', transform: [{rotate: '-90deg'}]}}
                source={{uri: 'file://' + imageData}}
            />
            <TouchableHighlight
                style={{width: '100%', bottom: 150, alignItems: 'center'}}
                onPress={() => {
                    navigation.navigate('ResultScreen', {path: imageData});
                }}>
                <Text style={{color: '#000000'}}>Send to analysis</Text>
            </TouchableHighlight>
        </View>
    );
};

export default DetectScreen;
