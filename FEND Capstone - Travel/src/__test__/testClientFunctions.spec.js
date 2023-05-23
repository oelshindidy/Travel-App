import { getWeather } from '../client/js/getWeather';
import { getCity } from '../client/js/getCity';
import { getImages } from '../client/js/getImages';
import { updateUI } from '../client/js/updateUI';

//getWeather function 
describe('Test, the function "getWeather()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof getWeather).toBe("function");
    });
});

//getCity function 
describe('Test, the function "getCity()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof getCity).toBe("function");
    });
});

//getImages function
describe('Test, the function "getImages()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof getImages).toBe("function");
    });
});

//UpdateUI function 
describe('Test, the function "updateUI()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof updateUI).toBe("function");
    });
});

