const url1 ="https://api.openweathermap.org/data/2.5/weather?q=";
const url2 = "&appid=49ea01c1bc975d6da5a19d6caa2a368b";

const inputCity = document.querySelector(".cityName");
const button = document.querySelector("button");
const tempture = document.querySelector(".tempture");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humi");
const WindSpeed = document.querySelector(".speed");

button.addEventListener("click",async ()=>{
    
   let cityName = inputCity.value;
   //    console.log(cityName);   
   let weather = await getWeather(cityName);
   displayWeather(weather);
   inputCity.value ="";
})
function displayWeather(weather){
    let temp = weather.main.temp;
    // console.log(temp);
    tempture.innerHTML = `${(temp - 273).toFixed(1)}°C`;
    city.innerHTML= weather.name;
    let humi = weather.main.humidity;
    humidity.innerHTML = `${humi}%`;
    let spd =weather.wind.speed;
    WindSpeed.innerHTML = `${spd}`
}


async function getWeather(cityName) {
    try {
        let res = await axios.get(url1 + cityName + url2);
        // console.log(res.data.main.temp);
        return res.data;
        
    } catch (error) {
        console.log(error);
    }
}