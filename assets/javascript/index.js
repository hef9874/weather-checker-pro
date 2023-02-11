const apiKey = "8cb12ab65dcc090cdebeed935aba8314";

const input = document.getElementById('input');
let searchButton = document.getElementById('search');
let currentForecast = document.getElementById('currentWeather');
let searchHistory = document.getElementById('history');
let weekForecast = document.getElementById('days');
const apiUrl = "https://api.openweathermap.org/";
let searchHistoryArr = [];


//get info for day
function currentDayInfo(city) {
    //call API and get returning data
    let urlDay = apiUrl + 'data/2.5/weather?q=' + city + '&appid=' + apiKey;
    fetch(urlDay).then(function(response){
        if(response.ok){
            return response.json().then(function(data){
                console.log(data);
                displayCurrentDay(data);
                fiveDayForecast(data.coord.lat, data.coord.lon)
            })
        } else {
            alert('Error ' + response.statusText);
        }
    })
}
    //take data from API and put into HTML 
    //make API call 

function displayCurrentDay(data) {
    const card = document.createElement("div")
    card.setAttribute("class", "card")
    const title = document.createElement("h2")
    card.setAttribute("class", "title")
    const cardTitle = document.createElement("div")
    card.setAttribute("class", "cardTitle")
    const icon = document.createElement("img")
    icon.setAttribute("src", "https://openweathermap.org/img/wn/"+ data.weather[0].icon +".png")
    const span = document.createElement("span")
    card.setAttribute("class", "span")
    const cardBody = document.createElement("div")
    card.setAttribute("class", "cardBody")
    const temp = document.createElement("p")
    card.setAttribute("class", "temp")
    const humidity = document.createElement("p")
    card.setAttribute("class", "humidity")
    const wind = document.createElement("p")
    card.setAttribute("class", "wind")

    //filling elements with data
    title.textContent= data.name
    temp.textContent= "Temperature: " + data.main.temp
    humidity.textContent= "Humidity: " + data.main.humidity
    wind.textContent="Wind: " + data.wind.speed

    //apend 
    span.append(icon)
    title.append(span)
    cardTitle.append(title)
    cardBody.append(temp, humidity,wind)
    card.append(cardTitle, cardBody)

    currentForecast.append(card)
}


function fiveDayForecast(lat, lon){
    //call API and get returning data 
    let forecast = apiUrl + `data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(forecast) 
    .then(response => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch(error => {
        console.log('Error!');
        console.log(error);
        //pass data.list
        displayFiveDay(data.list)
    })
}

function displayFiveDay(data){
    //forloop
    //take data from API and put into HTML - no call
    const card = document.createElement("div")
    card.setAttribute("class", "card")
    const title = document.createElement("h2")
    card.setAttribute("class", "title")
    const cardTitle = document.createElement("div")
    card.setAttribute("class", "cardTitle")
    const span = document.createElement("span")
    card.setAttribute("class", "span")
    const cardBody = document.createElement("div")
    card.setAttribute("class", "cardBody")
    const temp = document.createElement("p")
    card.setAttribute("class", "temp")
    const humidity = document.createElement("p")
    card.setAttribute("class", "humidity")
    const wind = document.createElement("p")
    card.setAttribute("class", "wind")

    //filling elements with data
    title.textContent = data.name
    temp.textContent = "Temperature: " + data.main.temp
    humidity.textContent = "Humidity: " + data.main.humidity
    wind.textContent ="Wind: " + data.wind.speed

    //apend 
    span.append(icon)
    title.append(span)
    cardTitle.append(title)
    cardBody.append(temp, humidity, wind)
    card.append(cardTitle, cardBody)

    weekForecast.append(card)
 
    }




searchButton.addEventListener('click', function(e){
    e.preventDefault()
    const userInput = input.value;
    console.log(userInput);
    currentDayInfo(userInput);
    displayFiveDay(userInput);
    //save searchcity to history array 
    //save searchhistarr to local storage JSON
    //call functions that get forecast for current and 5 day
})

searchHistory.addEventListener('click', function(e){
    e.target.getAttribute()
    
    //event.target - figure out which button is clicked
    //get city value 
    //call functions that get forecast for current and 5 day
})