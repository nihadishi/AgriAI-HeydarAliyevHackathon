import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-react-native';
import * as cocossd from '@tensorflow-models/coco-ssd';

// TensorFlow.js ve modeli yükleme işlemi
async function loadModel() {
  await tf.ready();
  const model = await cocossd.load();
  return model;
}

// Tahminler yapma işlemi
async function makePredictions(model, imageElement) {
  const predictions = await model.detect(imageElement);
  return predictions;
}

export { loadModel, makePredictions };
