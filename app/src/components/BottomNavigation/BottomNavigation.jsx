import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DetectScreen from '../../screens/DetectScreen/DetectScreen';
import {Text, TouchableHighlight, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 40,
                alignItems: 'center',
                backgroundColor: '#eeeeee',
            }}>
            <TouchableHighlight
                style={{height: '100%'}}
                underlayColor="transparent"
                onPress={() => {
                    navigation.navigate('HomeScreen');
                }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 20,
                        backgroundColor: '#abccba',
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                    borderRadius:10}}>
                    Ana səhifə
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{height: '100%'}}
                underlayColor="transparent"
                onPress={() => {
                    navigation.navigate('DetectScreen');
                }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 20,
                        backgroundColor: '#abccba',
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                    borderRadius:10}}>
                    Müayinə
                </Text>
            </TouchableHighlight>
        </View>
    );
};
