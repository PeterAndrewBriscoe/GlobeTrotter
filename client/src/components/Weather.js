import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Weather = ({locations, temp, month}) => {
    const apiToken = "9ae001f74dac4f0ebfc105001220702"
    // const validLocations = []

    const [ loading, setLoading ] = useState(locations.length)
    const [ validLocations, setValidLocations ] = useState([])

    useEffect(() => {
        setValidLocations([])
        setLoading(locations.length)
        locations.forEach(async(location) => {
            await axios.get(`http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiToken}&q=${location.name}&format=json&date=2021-${month}-01&enddate=2021-${month}-28`).then(response => {
                if (response.data.data.weather) {
                let monthWeatherArray = response.data.data.weather
                let avgTempC = 0
                monthWeatherArray.forEach( day => {
                    avgTempC = avgTempC + day.avgtempC
                })
                avgTempC = avgTempC/28
                if (avgTempC >= temp) {
                    setValidLocations(oldLocations => [...oldLocations, location])
                } else {
                    // pass
                }}
                setLoading(state => state - 1)
            })
        })
        console.log(validLocations)
    }, [])
    
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

    return (
        <div> 
            {console.log(loading)}
            {console.log(loading == 0)}
            {(loading <= 0) ? validLocations.map(x => <div className="result-item" key={x.id}>
                {x.name} - {(Math.round(x.averageMetricScore * 100) / 100).toFixed(2)}
                </div>) : <></>} 
        </div>
        )
}

export default Weather