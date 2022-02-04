// import React from 'react'
// import axios from 'axios'

// const Results = (e) => {

//     const apiToken = "3f71d5kylylwplhj7wu5ikwa4yds3dlj"
// 	const accountId = "IG3CBP2Q"

//     async function getResults(e){
// 		e.preventDefault()
// 		const tagLabels = ["subtype-Art_museums", "beaches", "cuisine", "golf"]
// 		const chosenTags = []
// 		for(let x=0; x<activites.length; x++){
// 			if (e.target[x].checked){
// 				// chosenTags.push(tagLabels[x])
// 				chosenTags.push(`child_tag_labels=${tagLabels[x]}`)
// 			}
// 		}
// 		const joinedTags=chosenTags.join("&")
// 		const results = await axios.get(`https://www.triposo.com/api/20220104/location.json?${joinedTags}&account=${accountId}&token=${apiToken}`)
// 		console.log(results)
// 		return(
// 			<div id="results">
// 				{results.data.results.map(x=><li key={x.id}>x.id</li>)}
// 			</div>
// 		)
// 	}	
// }

// export default Results;