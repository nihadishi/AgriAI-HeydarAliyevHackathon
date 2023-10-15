import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { loadModel, makePredictions } from '../../tensflow/TensorflowModel';
import { TFLite } from 'react-native-tflite'; // react-native-tflite'i içe aktarın

function ResultScreen({ imageData }) {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(async() => {
    const initializeModel = async() => {
      const loadedModel = await loadModel();
      setModel(loadedModel);
    }
    initializeModel();
  }, []);

  useEffect(() => {
    const processImage = async()=> {
      if (model && imageLoaded) {
        const tflite = new TFLite();
        const modelPath = '../../tensflow/model.tflite';

        await tflite.loadModel({
          model: modelPath,
          labels: '../../tensflow/labels.txt', // Sınıflandırma etiketlerinin yerini ekleyin
        });

        const imageElement = document.getElementById('image'); // Görüntü elementini buraya ekleyin
        const result = await makePredictions(model, imageElement);
        const predictions = await tflite.runModelOnImage({
          path: imageElement.src,
        });
        
        setPredictions(predictions);
      }
    }
    processImage();
  }, [model, imageLoaded]);

  return (
    <View>
      <Image
        id="image"
        source={{ uri: 'file://' + imageData }} // Görüntü yolunuzu buraya ekleyin
        onLoad={() => setImageLoaded(true)}
      />
      <Text>Predictions:</Text>
      <View>
        {predictions.map((prediction, index) => (
          <Text key={index}>{JSON.stringify(prediction)}</Text>
        ))}
      </View>
    </View>
  );
}

export default ResultScreen;
