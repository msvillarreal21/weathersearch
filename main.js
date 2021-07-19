var pageContentEl = document.querySelector("#page-content");

var getWeather = function(data) {
    
    
var apiUrl = "https://api.openweathermap.org/data/2.5/onecall" + data + "lat={lat}&lon={lon}&exclude={part}&appid={API key}";
 fetch(apiUrl).then(function(response) {
     if (response.ok) {
         response.json().then(function(data) {
             displayWeather(data);

             if (response.headers.get("Weather")) {
                 displayWarning(data);
             }
         });
     } else {
         document.location.replace("./index.html");
     }
 });

}
//create an array to hold citys that are searched
var citySearch = [];

var cityFormHandler = function (search) {
    event.preventDefault();
    var cityNameInput = document.querySelector("input[name='city-name']").value;

    //check to see if inputs are empty (validate)
    if (!cityNameInput || !cityNameInput) {
        alert("You need to enter a city name.");
        return false;
    }

    //reset for fields for next city to be entered 
    document.querySelector("input[name='city-name']").value = "";

    var createCityEl = function(cityDataobj) {
        var listItemEl = document.createElement("li");
        listItemEl.className = "city-item";
        listItemEl.setAttribute("data-city-id", cityIdCounter);
    }
    cityDataobj.id = cityIdCounter;

    citySearch.push(citDataObj);

    //save cities to local storage
    saveCitySearch();
}
var saveCitySearch = function() {
    localStorage.setItem("cities", JSON.stringify(citySearch));
};

// loadCitySearch();