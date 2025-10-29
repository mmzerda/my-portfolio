const apikey = "3e40a65ab78f4081f84fdfa93198f4a0";  // your key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    document.getElementById( 'spinner').style.display = 'block'; // before fetch ...

async function getWeather() {
  const city = document.getElementById("citySelect").value.trim();
  if (!city) return;
  
  try {
    const response = await fetch(apiUrl + city + "&appid=" + apikey);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    // show basic info
    // build HTML string properly
    const iconCode = data.weather[0].icon;
    const iconUrl =
    "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";

    const html = 
       "<h2>" + data.name + ", " + data.sys.country + "</h2>" + 
       "<img src='" + iconUrl + "' alt='weather icon'>"
       +
       "<p>" + data.main.temp + " °C</p>" + 
       "<p>" + data.weather[0].description + "</p>";
    document.getElementById("weatherBox").innerHTML = html;
   } catch (err) {
    document.getElementById("weatherBox").innerHTML = "❌" + err.message;
    document.getElementById( 'spinner').style.display = 'none'; //  before fetch 
  }
}