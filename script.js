let weather = {
    apiKey: "06d8f2e92a63280da09ea542e549e441",
    fetchWeather:function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        
        const { name } = data;
        document.querySelector(".cityname").innerText = name;
        const { icon, description } = data.weather[0];
        document.querySelector(".discription_icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
            console.log(description);
        document.querySelector(".discription_text").innerHTML = "haze";
        const {temp,temp_min,temp_max,humidity}=data.main;
        document.querySelector(".present_temp_text").innerText=temp;
        document.querySelector(".max_temp").innerText="Max: "+temp_max;
        document.querySelector(".min_temp").innerText="Min: "+temp_min;
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        const {speed}=data.wind;
        document.querySelector(".windspeed").innerText="Wind-Speed: "+speed+"Km/Hr"
    },

    search: function(){
        this.fetchWeather(document.querySelector(".search_bar_text").value);
    },

}

document
  .querySelector(".search_bar_text")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Hyderabad");


