const apiKey = "8cb12ab65dcc090cdebeed935aba8314";
const location = document.getElementById('input');
let searchButton = document.getElementById('search');
let currentForecast = document.getElementById('location');
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
            })
        } else {
            alert('Error ' + response.statusText);
        }
    })
}

function displayCurrentDay(data) {
    //take data from API and put into HTML 
    //make API call 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat + '&lon=' + data[0].lon + '&units=imperial&appid=' + APIKey;
    //use return to show uv index
}

function fiveDayForecast(city){
    //call API and get returning data 

}

function displayFiveDay(data){
    //take data from API and put into HTML - no call

}

function clearPrevious(){
    //call different HTML elements and empty/clear
}

searchButton.addEventListener('click', function(e){
    e.preventDefault()
    //save searchcity to history array 
    //save searchhistarr to local storage JSON
    //call functions that get forecast for current and 5 day
})

searchHistory.addEventListener('click', function(){
    //event.target - figure out which button is clicked
    //get city value 
    //call functions that get forecast for current and 5 day
})



