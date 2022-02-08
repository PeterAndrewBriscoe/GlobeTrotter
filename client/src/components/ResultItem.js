import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Context from '../utils/Context'

const ResultItem = ({location}) => {
    const navigate = useNavigate()
    const { setPlaceData } = useContext(Context)

    function handleClick(){
        setPlaceData(location)
        navigate('detail')
    }

    return(

        <div onClick={handleClick} className="result-item" key={location.id}>
            <h4> {location.name} - {(Math.round(location.averageMetricScore * 100) / 100).toFixed(2)} </h4>
        </div>

    )
}

export default ResultItem