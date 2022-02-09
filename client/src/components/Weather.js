import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ResultItem from './ResultItem';

const Weather = ({locations, handleSelect}) => {
    const apiToken = "9ae001f74dac4f0ebfc105001220702"
    // const validLocations = []
    // console.log(locations)
    const [ loading, setLoading ] = useState(locations.length)
    const [ validLocations, setValidLocations ] = useState([])

    const [temperature, setTemperature] = useState(false)
    const [temperatureValue, setTemperatureValue] = useState(10)
    const [month, setMonth] = useState(0)

    const getTemperatures = (e) => {
        e.preventDefault()
        setValidLocations([])
        // console.log(e)
        setLoading(locations.length)
        locations.forEach(async(location) => {
            await axios.get(`http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiToken}&q=${location.name}&format=json&date=2021-${month}-01&enddate=2021-${month}-28`).then(response => {
                if (response.data.data.weather) {
                let monthWeatherArray = response.data.data.weather
                let avgTempC = 0
                monthWeatherArray.forEach( day => {
                    avgTempC = avgTempC + parseFloat(day.avgtempC)
                })
                avgTempC = avgTempC/28
                // console.log(avgTempC)
                if (avgTempC >= temperatureValue) {
                    setValidLocations(oldLocations => [...oldLocations, location])
                } else {
                    // pass
                }}
                setLoading(state => state - 1)
            })
        })
        // console.log(validLocations)
    }
    
    // async function fetchWeather(x) {
    //     console.log(`${counter} iteration`)
    //     setCounter(x => x + 1)
    //     let weather = await axios.get(`http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiToken}&q=paris&format=json&date=2021-${month}-01&enddate=2021-${month}-28`)
    //     .then(() => {setLoading(state => state-1)})
    //     console.log(temp)
    //     console.log(month)
    //     console.log(locations)
    //     console.log(`http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiToken}&q=${locations[x].name}&format=json&date=2021-${month}-01&enddate=2021-${month}-28`)
    //     console.log(locations[x])
    //     return weather
    // }

    // useEffect(() => {
    //     for (let x=0; x < locations.length; x++) {
    //         let weather = fetchWeather(x)
    //         console.log(loading)
    //         console.log(weather)
    //         let avgTemp = 0
    //         weather = weather.data.data.weather
    //         for (let day=0; day < 28; day++) {
    //             avgTemp = avgTemp + parseFloat(weather[day].avgtempC)
    //         }
    //         avgTemp = avgTemp/28
    //         // console.log(avgTemp)
    //         if (avgTemp >= temp) {
    //             validLocations.push(locations[x])
    //         }
    //         // console.log(validLocations)
    //     }
    // }, [])

    function handleSlide(e){
        setTemperatureValue(e.target.value);
    }

    function handleCheck(){
        setTemperature(!temperature)
    }

    function handleMonth(e){
        setMonth(e.target.value)
    }

    function handleClick(x){

    }

    return (
        // input for temp and month
            <>
            <form onSubmit={getTemperatures}>
                <input type="checkbox" onChange={handleCheck} value="3" name="temperature"/>Temperature
                <i className="fas fa-sun"></i>
                {temperature? <>{(Math.round(temperatureValue * 100) / 100).toFixed(1)} <input type="range" name="temperatureValue" min="10" max="30" value={temperatureValue} step="2" onChange={handleSlide}></input></> : <></>}
                {temperature?   <select name="month" onChange={handleMonth}>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                : <></>}
                {temperature? <input type="submit" role='submit'></input> : <></>}
            </form>
            <div role='weather'> 
                {/* {console.log(loading)}
                {console.log(loading == 0)} */}
                {validLocations.length>0 ? <div className="result-grid"> 
                                            {validLocations.map((x, i)=>  <ResultItem key={`resultItem${i}`} location={x} />) } </div>: <></>} 

                {locations && validLocations.length===0 && !temperature ? <div className="result-grid"> {locations.map((x, i) =>  <ResultItem key={`resultItem${i}`} location={x}/>)}</div> : <h3> Nothing to see here </h3>}
                
                {locations && validLocations.length===0 && temperature ? <h3> No Destinations for chosen temperature </h3> : <></>}
            </div>
        </>
        )
}

export default Weather