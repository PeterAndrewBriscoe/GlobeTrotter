import React, {useState, useEffect} from 'react';

const Options = ({getResults}) => {
    const activites = ["Art", "Beaches", "Cuisine", "Golf", "Museums"]

    // useStates for checked/unchecked values for each option
    const [art, setArt] = useState(false)
	const [beaches, setBeaches] = useState(false)
	const [cuisine, setCuisine] = useState(false)
	const [golf, setGolf] = useState(false)
	const [museums, setMuseums] = useState(false)
	const [skiing, setSkiing] = useState(false)
	const [hiking, setHiking] = useState(false)

    const checkboxArray = [art, beaches, cuisine, golf, museums, skiing, hiking]

    // called if any boxes are checked/unchecked, if noneChecked=true then submit button disabled
    useEffect( ()=>{
        if(!art && !beaches && !cuisine && !golf && !museums && !skiing && !hiking){
            setNoneChecked(true)
        }
        else{
            setNoneChecked(false)
        }
    }, [checkboxArray])

    const [noneChecked, setNoneChecked]=useState(true)

    // useStates for slider values for each option
    const [artValue, setArtValue] = useState(5)
    const [beachesValue, setBeachesValue] = useState(5)
    const [cuisineValue, setCuisineValue] = useState(5)
    const [golfValue, setGolfValue] = useState(5)
    const [museumsValue, setMuseumsValue] = useState(5)
    const [skiingValue, setSkiingValue] = useState(2)
    const [hikingValue, setHikingValue] = useState(5)

    // when checkbox is changed, flip the corresponding state
    function handleCheck(e){
		if(e.target.name==="art"){
			setArt(!art);
		} else if (e.target.name==="beaches"){
			setBeaches(!beaches);
		} else if (e.target.name==="cuisine"){
			setCuisine(!cuisine);
		} else if (e.target.name==="golf"){
			setGolf(!golf);
	    } else if (e.target.name==="museums"){
			setMuseums(!museums);
	    } else if (e.target.name==="skiing"){
			setSkiing(!skiing);
	    } else if (e.target.name==="hiking"){
			setHiking(!hiking);
	    }
    }

    function handleSlide(e){
        if(e.target.name==="artValue"){
            setArtValue(e.target.value)
        } else if (e.target.name==="beachesValue"){
            setBeachesValue(e.target.value);
        } else if (e.target.name==="cuisineValue"){
            setCuisineValue(e.target.value);
        } else if (e.target.name==="golfValue"){
            setGolfValue(e.target.value);
        } else if (e.target.name==="museumsValue"){
            setMuseumsValue(e.target.value);
        } else if (e.target.name==="skiingValue"){
            setSkiingValue(e.target.value);
        } else if (e.target.name==="hikingValue"){
            setHikingValue(e.target.value);
        }
	}

    function handleSubmit(e){
        e.preventDefault()
        getResults(e)
    }

    return(
        <form id="option-form" onSubmit={handleSubmit}>
            <div>
                <input type="checkbox" onChange={handleCheck} value="0" name="art"/>Art
                {art? <>{(Math.round(artValue * 100) / 100).toFixed(1)} <input type="range" name="artValue" min="5" max="10" value={artValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="1" name="beaches"/>Beaches
                {beaches? <>{(Math.round(beachesValue * 100) / 100).toFixed(1)} <input type="range" name="beachesValue" min="5" max="12" value={beachesValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="2" name="cuisine"/>Cuisine
                {cuisine? <>{(Math.round(cuisineValue * 100) / 100).toFixed(1)} <input type="range" name="cuisineValue" min="5" max="10" value={cuisineValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="3" name="golf"/>Golf
                {golf? <>{(Math.round(golfValue * 100) / 100).toFixed(1)} <input type="range" name="golfValue" min="5" max="10" value={golfValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="3" name="museums"/>Museums
                {museums? <>{(Math.round(museumsValue * 100) / 100).toFixed(1)} <input type="range" name="museumsValue" min="5" max="10" value={museumsValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="3" name="skiing"/>Skiing
                {skiing? <>{(Math.round(skiingValue * 100) / 100).toFixed(1)} <input type="range" name="skiingValue" min="2" max="4.6" value={skiingValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="3" name="hiking"/>Hiking
                {hiking? <>{(Math.round(hikingValue * 100) / 100).toFixed(1)} <input type="range" name="hikingValue" min="5" max="13" value={hikingValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
                {noneChecked? <input disabled type="submit"/>: <input type="submit"/>}
    </form>
    )
}

export default Options
