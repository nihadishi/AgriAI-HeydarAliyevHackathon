#include <DHT.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_L3GD20_U.h>
#include <Adafruit_BMP280.h>
#define DHT_PIN 11
#define DHTSENSOR DHT11
#define SCL_PIN A5
#define SDA_PIN A4
DHT dht(DHT_PIN, DHTSENSOR);
Adafruit_L3GD20_Unified gyroscope = Adafruit_L3GD20_Unified(20);
Adafruit_BMP280 bmp;
void setup() {
  Serial.begin(9600);
  dht.begin();
  if (!gyroscope.begin()) Serial.println("Gyroscope couldn't started");
  if (!bmp.begin(0x76)) Serial.println("BMP couldn't started");
}


void loop() {
  delay(2000);
  int dht_humidity = dht.readHumidity();//float da olar, ama yuzdelik hessasliq yoxdu
  float dht_temperature = dht.readTemperature();
  sensors_event_t gyroEvent;
  gyroscope.getEvent(&gyroEvent);
  float bmp_temperature = bmp.readTemperature();
  float bmp_pressure = bmp.readPressure();
  Serial.print("X: ");
  Serial.print(gyroEvent.gyro.x);
  Serial.print(" ,Y: ");
  Serial.print(gyroEvent.gyro.y);
  Serial.print(" ,Z: ");
  Serial.println(gyroEvent.gyro.z);
  Serial.print("Temperature: ");
  if (dht_temperature < bmp_temperature){
    Serial.print(dht_temperature);
    Serial.print(" - ");
    Serial.print(bmp_temperature);
    Serial.println(" °C");
  }
  else{
    Serial.print(bmp_temperature);
    Serial.print(" - ");
     Serial.print(dht_temperature);
    Serial.println(" °C");
  }
  Serial.print("Pressure: ");
  Serial.print(bmp_pressure / 1000.0F);
  Serial.print("kPa / ");
  Serial.print(bmp_pressure / 101345.0F);
  Serial.println("atm");

  Serial.print("Humidity: ");
  Serial.print(dht_humidity);
  Serial.println("%");
  Serial.println();
}
