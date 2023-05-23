// Function to update UI
const updateUI = async (travelDate,endDate) => {
    const request = await fetch('http://localhost:8081/all');
    try {
        const allData = await request.json();
         // update travel date
        $('#departure').html(travelDate); 
         // update end date 
        $('#return').html(endDate);    
        // update the country's flag 
        document.getElementById('ModalLabel').innerHTML = `<img src="https://flagsapi.com/${allData.city.countryCode}/flat/64.png">  ${allData.city.toponymName}, ${allData.city.countryName}`;
        // update city and country name
        $('#trip').html(`Trip to: ${allData.city.toponymName}, ${allData.city.countryName}`)
        // update current weather 
        $('#temp').html(`${allData.currentWeather.temp} °C`);
        $('#weather-description').html(`${allData.currentWeather.weather.description}`);
        $('#weather-icon').attr("src",`https://www.weatherbit.io/static/img/icons/${allData.currentWeather.weather.icon}.png`);
        
        // update images of the city
        if (allData.images.length !== 0) {
            var i,
                otherDivs="";
            $("#imagesCol").addClass("col-xl");
            $("#weatherCol").removeClass("width-100");
            for (i=1; i<allData.images.length; i++) {
                otherDivs += `
                    <div class="carousel-item">
                        <img src="${allData.images[i].webformatURL}" class="d-block w-100" alt="${allData.city.name}">
                    </div>`;
            }
            const activeDiv = `
                <div class="carousel-item active">
                    <img src="${allData.images[0].webformatURL}" alt="${allData.city.name}">                                       
                </div>
            `;
            document.getElementById('images').innerHTML = otherDivs+activeDiv;
            
        } else {
            document.getElementById('images').innerHTML = "";
            $("#imagesCol").removeClass("col-xl");
            $("#weatherCol").addClass("width-100");
        }
        
        //update forecast weather for the destination 
        if (allData.forecastWeather.length !== 0) {
            
            for (const weather of allData.forecastWeather) {
                document.getElementById('forecastWeather').innerHTML += `
                <div>
                    <img src="https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png" alt="weather icon">
                    <h5 class="text-center">${weather.weather.description}</h5>
                    <h3 class="text-center">${weather.temp}°C</h3>
                    <p class="text-center">${weather.max_temp}°/${weather.min_temp}°</p>
                    <p class="datetime">${weather.datetime}</p>
                </div>
                `;
            }
        }
      
        $("#modalBody").slideDown(500);
        return allData
    }
    catch (error) {
        console.log("error", error);
    }
}; 


export { updateUI }