import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Attractions({location}){

    const apiToken = "3f71d5kylylwplhj7wu5ikwa4yds3dlj"
	const accountId = "IG3CBP2Q"

    const [ attractionArray, setAttractionArray ] = useState([])

    useEffect(()=>{
        axios.get(`https://www.triposo.com/api/20220104/poi.json?tag_labels=topattractions&location_id=${location}&account=${accountId}&token=${apiToken}`)
        .then(results=>setAttractionArray(results.data.results))
    }, [])

    console.log(attractionArray)

    return(
        <div id="attractions">
            <h3>Attractions:</h3>
            {attractionArray.length > 0 ? attractionArray.map(x => <a href={`https://www.google.com/search?q=${x.name}+${location}`} target="_blank" key={`link${x.name}`}><li key={x.id}>{x.name}</li></a>) : <h4>No attractions for this location</h4>}
        </div>
    )
}

export default Attractions
