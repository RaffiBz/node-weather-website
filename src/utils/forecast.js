const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=55b7943e7d3db0271da4fa85d2284ecf&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const current = body.current;
      callback(
        undefined,
        `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out. Humidity ${current.humidity}%`
      );
    }
  });
};

module.exports = forecast;
