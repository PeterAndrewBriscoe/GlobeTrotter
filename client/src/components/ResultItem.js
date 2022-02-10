import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Context from '../utils/Context'

const ResultItem = ({location}) => {
    const navigate = useNavigate()
    const setPlaceData  = useContext(Context)

    function handleClick(){
        setPlaceData(location)
        navigate('detail')
    }

    useEffect(() => {
        if(location.images[0].sizes.medium.url){
            const backgroundImage = location.images[0].sizes.medium.url
            const div = document.getElementById(location.id)
            div.style.backgroundImage = `url(${backgroundImage})`
        }
    }, [location])

    return(

        <div id={location.id} onClick={handleClick} className="result-item" key={location.id}>
            {/* <img class="result-image" src={location.images[0].sizes.thumbnail.url}/> */}
            <h4> {location.name} </h4>
            <h5> {(Math.round(location.averageMetricScore * 100) / 100).toFixed(2)} </h5>
            <h6>{location.country_id.replace(/_/g," ")}</h6>
        </div>

    )
}

export default ResultItem