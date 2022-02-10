import React, { useState } from 'react'

function ExplainModal(props) {

	function closeModal() {
		props.show.setShowModal('none')
	}

	return(
		<div>
			<div style={{display: props.show.showModal}}>
				<div>
					<h1>About</h1>
					<p>Click on the checkboxes to select the categories you want for your ideal vacation!</p>
					<p>Move the slider to adjust the score for each category so the results meet your required level for that category</p>
					<p>Once finished, hit submit to see the results!</p>
					<p>Further fine tune your selection of the ideal stay by adjusting the temperature you want when away!</p>
					<h4>Results are ordered based on the average of the relevant scores selected</h4>
					<button id="close_button" type="button" onClick={closeModal}>Close</button>
				</div>
			</div>
		</div>
	)
}

export default ExplainModal