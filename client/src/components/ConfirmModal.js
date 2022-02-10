import { useState } from 'react'

function ConfirmModal(props) {

	function confirmDelete() {
		props.confirm.setConfirmedModal(true)
		props.show.setShowModal('none')
	}

	function closeModal() {
		props.show.setShowModal('none')
	}

	return(
		<div>
			<div style={{display: props.show.showModal}}>
				<div>
					<h2>Are you sure?</h2>
					<div className="flex-container"> 
					<div className="btn-flexbox">
						<button id="delete" onClick={confirmDelete}>Yes</button>
						<button className="modalbtn" onClick={closeModal}>No</button>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConfirmModal