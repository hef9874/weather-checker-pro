var apiKey = "8cb12ab65dcc090cdebeed935aba8314";

$(function(){
    getSearchHistory();
    var btnSearch = $('.submit');
    txtSearch = $('.search');

 //Search Button to find city
    btnSearch.on('click', searchResults);
    textSearch.on('keyup', (event) => {
        if (event.key === 'Enter') {
            displaySearch();
        }
    })
)};

searchResults(() => {
//get today's date


//fetch(queryCity) for city lat and lon to pull weather 


//put in city coords and get weather
//'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat + '&lon=' + data[0].lon + '&units=imperial&appid=' + APIKey;


})