async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // ← 自分のOpenWeatherのAPIキーに差し替える
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ja&appid=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  const result = document.getElementById("weatherResult");
  if (res.ok) {
    result.innerHTML = `
      <h2>${data.name}</h2>
      <p>天気: ${data.weather[0].description}</p>
      <p>気温: ${data.main.temp}°C</p>
      <p>湿度: ${data.main.humidity}%</p>
    `;
  } else {
    result.innerHTML = `<p>都市が見つかりませんでした</p>`;
  }
}
