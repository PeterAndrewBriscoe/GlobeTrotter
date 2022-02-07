import { useState, useEffect } from 'react'

function Tab(props) {
	const [colours, setColours] = useState(getColours())

	useEffect(() => {
		setColours(getColours())
	}, [props.modeState.mode])

	function getColours() {
		return props.title === props.modeState.mode ? 'w3-border-blue' : 'w3-light-grey w3-hover-sand'
	}

	const handleClick = () => {
		props.modeState.setMode(props.title)
	}

	return (
		<h3 onClick={handleClick}>
      	<div className={`w3-half w3-bottombar w3-padding ${colours}`}>{props.title}</div>
    	</h3>
	)
}

export default Tab