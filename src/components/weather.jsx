import '../App.css';
import {useWeather} from '../useApi'

function WeatherPage() {
    const doc = useWeather()
    return (
        <div className='weather'>
            <div>country: {doc.country}</div>
            <div>country: {doc.name}</div>
            <div>temperature: {doc.temp_c}</div>
            <div>clouds: {doc.cloud}</div>
            <div>feelslike (C): {doc.feelslike_C}</div>
            
            
        </div>
    );
}

export default WeatherPage;
