async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // ←ここに後でAPIキーを入れる！

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;

  const res = await fetch(url);
  const data = await res.json();

  if (res.ok) {
    document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}の天気</h2>
        <p>気温：${data.main.temp} ℃</p>
        <p>湿度：${data.main.humidity} %</p>
        <p>天気：${data.weather[0].description}</p>
      `;
  } else {
    document.getElementById(
      "weatherResult"
    ).innerHTML = `<p>都市が見つかりませんでした</p>`;
  }
}
