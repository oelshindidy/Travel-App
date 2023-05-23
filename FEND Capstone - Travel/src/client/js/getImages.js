const getImages = async (baseUrl,API_KEY,city) => {    
    const res = await fetch(baseUrl+'&key='+API_KEY+'&q='+city); 
     
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error",error);
        return false;
    }
}

export { getImages }