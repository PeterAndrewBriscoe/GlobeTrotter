function ListItem(props) {
	return(
		<div>
			<h3>{props.data.name}</h3>
			<h3>{props.data.long}</h3>
			<h3>{props.data.lat}</h3>
		</div>
	)
}

export default ListItem