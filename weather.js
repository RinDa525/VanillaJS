const API_KEY="fc64a21c89b8e05b327906da1cb455fc";
const weather=document.querySelector("#weather span:first_child")
const city=document.querySelector("#weather span:last_child")

function onGeoOk(position){
  const lat=position.coords.latitude;
  const lon=position.coords.lonitude;
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      city.innerText=data.name; 
      weather.innerText=`${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
