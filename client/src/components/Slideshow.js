import { useState } from 'react'

function Slideshow(props) {
	const [index, setIndex] = useState(0)
	const [images] = useState(props.images)

	const handleClick = e => {
		let num
		e.target.className.match('right') ? num = 1 : num = -1
		if(index + num === images.length)
			setIndex(0)
		else if(index + num < 0)
			setIndex(images.length - 1)
		else
			setIndex(state => state + num)
	}

	return(
		<div>
			<div className="center-cropped" style={{backgroundImage: `url(${images[index].sizes.medium.url})`}}></div>
			<h4>{images[index].caption}</h4>
			<div className='w3-xxlarge'>
				<i className="w3-button bi bi-caret-left-square" data-testid='button1' onClick={handleClick} role='clicker'></i>
				<i className="w3-button bi bi-caret-right-square" onClick={handleClick}></i>
			</div>
		</div>
	)
}

export default Slideshow