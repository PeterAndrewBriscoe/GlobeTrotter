import React, {useState, useEffect} from 'react';

const Options = ({getResults}) => {
    // useStates for checked/unchecked values for each option
    const [art, setArt] = useState(false)
	const [beaches, setBeaches] = useState(false)
	const [cuisine, setCuisine] = useState(false)
	const [golf, setGolf] = useState(false)
	const [museums, setMuseums] = useState(false)
	const [skiing, setSkiing] = useState(false)
	const [hiking, setHiking] = useState(false)
	const [nightlife, setNightlife] = useState(false)

    const checkboxArray = [art, beaches, cuisine, golf, museums, skiing, hiking, nightlife]

    // called if any boxes are checked/unchecked, if noneChecked=true then submit button disabled
    useEffect( ()=>{
        if(!art && !beaches && !cuisine && !golf && !museums && !skiing && !hiking && !nightlife){
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
    const [nightlifeValue, setNightlifeValue] = useState(5)

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
	    } else if (e.target.name==="nightlife"){
			setNightlife(!nightlife);
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
        } else if (e.target.name==="nightlifeValue"){
            setNightlifeValue(e.target.value);
        }
	}

    function handleSubmit(e){
        e.preventDefault()
        getResults(e)
    }

    return(
        <form id="option-form" onSubmit={handleSubmit} role="option-form">
            <div>
                <input type="checkbox" onChange={handleCheck} value="0" name="art"/>Art
                <i className="fas fa-palette"></i>
                {art? <>{(Math.round(artValue * 100) / 100).toFixed(1)} <input type="range" data-testid="artValue" name="artValue" min="5" max="10" value={artValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="1" name="beaches" aria-label='beaches'/>Beaches
                <i className="fas fa-umbrella-beach"></i>
                {beaches? <>{(Math.round(beachesValue * 100) / 100).toFixed(1)} <input type="range" aria-label='beachesValue' name="beachesValue" data-testid="beachesValue" min="5" max="12" value={beachesValue} step="0.2" onChange={handleSlide} role="beachesValue"></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="2" name="cuisine"/>Cuisine
                <i className="fas fa-utensils"></i>
                {cuisine? <>{(Math.round(cuisineValue * 100) / 100).toFixed(1)} <input type="range" data-testid='cuisineValue' name="cuisineValue" min="5" max="10" value={cuisineValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="3" name="golf"/>Golf
                <i className="fas fa-golf-ball"></i>
                {golf? <>{(Math.round(golfValue * 100) / 100).toFixed(1)} <input type="range" data-testid='golfValue' name="golfValue" min="5" max="10" value={golfValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="3" name="museums"/>Museums
                <i className="fas fa-landmark"></i>
                {museums? <>{(Math.round(museumsValue * 100) / 100).toFixed(1)} <input type="range" data-testid='museumsValue' name="museumsValue" min="5" max="10" value={museumsValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="3" name="skiing"/>Skiing
                <i className="fas fa-skiing"></i>
                {skiing? <>{(Math.round(skiingValue * 100) / 100).toFixed(1)} <input type="range" data-testid='skiingValue' name="skiingValue" min="2" max="4.6" value={skiingValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="3" name="hiking"/>Hiking
                <i className="fas fa-hiking"></i>
                {hiking? <>{(Math.round(hikingValue * 100) / 100).toFixed(1)} <input type="range" data-testid='hikingValue' name="hikingValue" min="5" max="13" value={hikingValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
            <div>
                <input type="checkbox" onChange={handleCheck} value="3" name="nightlife"/>Nightlife
                <i className="fas fa-cocktail"></i>
                {nightlife? <>{(Math.round(nightlifeValue * 100) / 100).toFixed(1)} <input type="range" data-testid='nightlifeValue' name="nightlifeValue" min="5" max="10" value={nightlifeValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
  
                {noneChecked? <input role="submitbtn" disabled type="submit"/>: <input role="submitbtn" type="submit"/>}
    </form>
    )
}

export default Options
