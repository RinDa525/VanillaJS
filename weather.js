const API_KEY="";

function onGeoOk(position){
  const lat=position.coords.latitude;
  const lon=position.coords.lonitude;
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log("you live in", lat, lon);
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
