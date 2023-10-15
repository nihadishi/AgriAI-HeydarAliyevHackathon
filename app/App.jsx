import {useEffect} from 'react';
import Routes from './src/navigation/Routes';
import {Camera} from 'react-native-vision-camera';

function App() {
  useEffect(() => {
    checkPermission();
  }, []);
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(newCameraPermission);
  };

  return <Routes />;
}

export default App;
