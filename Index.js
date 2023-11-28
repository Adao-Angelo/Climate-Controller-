const readlineSync = require("readline-sync")
const key = "be6851a6685986079531509935e0083e"
let  city = readlineSync.question("digite a cidade: ")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
.then(response => response.json())
.then(data => showDataCity(data))

function showDataCity(data){
     console.log(data)
     let wind = data.wind.speed +"km/h"
     let humidity = data.main.humidity+"km/m^3"
     let temp = data.main.temp+"℃"
     let weather = data.weather[0].main
     let timezone  = data.name
     let clouds =data.clouds.all
     const dataCity = {
          Nome:timezone,
          Temperatura:temp,
          Tempo:weather,
          Nuvens:clouds,
          Vento:wind,
          Humidade:humidity
     }
     console.table(dataCity)
}


//https://api.openweathermap.org/data/2.5/weather?q=luanda&appid=be6851a6685986079531509935e0083e