const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const cityName = cityInput.value;
  getData(cityName);
});

function getData(name) {
  const API = "9246ce80162fc1296875d6e149424858";

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&lang=tr&appid=${API}&units=metric`;

  console.log(baseURL);

  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        sys: { country },
        main: { temp, feels_like, humidity },
        wind: { speed },
        weather: [{ description }],
      } = data;
      console.log(
        name,
        country,
        temp,
        feels_like,
        description,
        humidity,
        speed
      );

      const city = document.querySelector("#sehir");
      const temperature = document.querySelector("#sicaklik");
      const weatherDesc = document.querySelector("#havaDurumu");
      const feel = document.querySelector("#hissedilen");
      const hum = document.querySelector("#humidity");
      const wind = document.querySelector("#wind");

      city.innerHTML = `${name} - ${country}`;
      temperature.innerHTML = `${Math.round(temp) + " °C"}`;
      weatherDesc.innerHTML = `${description}`;
      feel.innerHTML = `Hissedilen Sıcaklık  ${Math.round(feels_like)} °C`;
      hum.innerHTML = `Nem : ${humidity}%`;
      wind.innerHTML = `Rüzgar : ${speed} km/h`;
    })
    .catch((err) => console.log(err));

  cityInput.value = "";
  cityInput.focus();
}
