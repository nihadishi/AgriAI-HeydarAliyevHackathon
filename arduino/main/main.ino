#include <DHT.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_L3GD20_U.h>
#define DHT_PIN 11
#define DHTSENSOR DHT11
#define SCL_PIN A5
#define SDA_PIN A4
DHT dht(DHT_PIN, DHTSENSOR);
Adafruit_L3GD20_Unified gyroscope = Adafruit_L3GD20_Unified(20);
void setup() {
  Serial.begin(9600);
  dht.begin();
  if(!gyroscope.begin()) Serial.println("Gyroscope couldn't started");
  // gyroscope.setRange(L3GD20_RANGE_250DPS); 
}


void loop() {
  delay(500);
  float dht_humidity = dht.readHumidity();
  float dht_temperature = dht.readTemperature();
  sensors_event_t handleEvent;
  gyroscope.getEvent(&handleEvent);
  Serial.print("X: ");
  Serial.println(handleEvent.gyro.x);
  Serial.print("Y: ");
  Serial.println(handleEvent.gyro.y);
  Serial.print("Z: ");
  Serial.println(handleEvent.gyro.z);
  Serial.print("Humidity: ");
  Serial.println(dht_humidity);
  Serial.print("Temperature: ");
  Serial.println(dht_temperature);

}
