#include <DHT.h>

#define DHT_PIN 11
#define DHTSENSOR DHT11
#define SCL_PIN A5
#define SDA_PIN A4
DHT dht(DHT_PIN, DHTSENSOR);
void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  delay(2000);
  float dht_humidity = dht.readHumidity();
  float dht_temperature = dht.readTemperature();


  Serial.print("Humidity: ");
  Serial.println(dht_humidity);
  Serial.print("Temperature: ");
  Serial.println(dht_temperature);

}
