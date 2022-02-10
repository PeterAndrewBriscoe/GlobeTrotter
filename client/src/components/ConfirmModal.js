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
					<button onClick={confirmDelete}>Yes</button>
					<button onClick={closeModal}>No</button>
				</div>
			</div>
		</div>
	)
}

export default ConfirmModal