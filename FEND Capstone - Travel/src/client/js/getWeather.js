const getWeather = async (baseUrl,lat,lon,API_KEY) => {    
    
    const res = await fetch(baseUrl+'?lat='+lat+'&lon='+lon+'&key='+API_KEY); 
      
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error",error);
        return false;
    }
}

export { getWeather }