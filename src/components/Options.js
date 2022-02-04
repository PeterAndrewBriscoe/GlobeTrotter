import React, {useState} from 'react';

const Options = ({getResults}) => {
    const activites = ["Art", "Beaches", "Cuisine", "Golf", "Museums"]

    const [art, setArt] = useState(false)
	const [beaches, setBeaches] = useState(false)
	const [cuisine, setCuisine] = useState(false)
	const [golf, setGolf] = useState(false)
	const [museums, setMuseums] = useState(false)

    const [artValue, setArtValue] = useState(5)
    const [beachesValue, setBeachesValue] = useState(5)
    const [cuisineValue, setCuisineValue] = useState(5)
    const [golfValue, setGolfValue] = useState(5)
    const [museumsValue, setMuseumsValue] = useState(5)

    function handleCheck(e){
		if(e.target.name=="art"){
			setArt(!art);
		} else if (e.target.name=="beaches"){
			setBeaches(!beaches);
		} else if (e.target.name=="cuisine"){
			setCuisine(!cuisine);
		} else if (e.target.name=="golf"){
			setGolf(!golf);
	    } else if (e.target.name=="museums"){
			setMuseums(!museums);
	    }
    }

    function handleSlide(e){
        if(e.target.name=="artValue"){
            setArtValue(e.target.value)
        } else if (e.target.name=="beachesValue"){
            setBeachesValue(e.target.value);
        } else if (e.target.name=="cuisineValue"){
            setCuisineValue(e.target.value);
        } else if (e.target.name=="golfValue"){
            setGolfValue(e.target.value);
        } else if (e.target.name=="museumsValue"){
            setMuseumsValue(e.target.value);
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
                {beaches? <>{(Math.round(beachesValue * 100) / 100).toFixed(1)} <input type="range" name="beachesValue" min="5" max="10" value={beachesValue} step="0.2" onChange={handleSlide}></input></> : <></>}
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
                <input type="checkbox" onChange={handleCheck} value="3" name="golf"/>Golf
                {golf? <>{(Math.round(golfValue * 100) / 100).toFixed(1)} <input type="range" name="golfValue" min="5" max="10" value={golfValue} step="0.2" onChange={handleSlide}></input></> : <></>}
            </div>
                <input type="submit"/>
    </form>
    )
}

export default Options
