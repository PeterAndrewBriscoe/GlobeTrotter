import React, {useState} from 'react';
import axios from 'axios'
import Options from '../components/Options'

const Search = ({}) => {
	const apiToken = "3f71d5kylylwplhj7wu5ikwa4yds3dlj"
	const accountId = "IG3CBP2Q"
	const activites = ["Art", "Beaches", "Cuisine", "Golf"]

	const [results, setResults] = useState()

	const getAverage = (array) => array.reduce((a, b) => a + b) / array.length;
	
	async function getResults(e){
		e.preventDefault()
		const tagLabels = {"art": "subtype-Art_museums", "beaches": "beaches", "cuisine": "cuisine", "golf": "golf"}
		const chosenTags = []
		const chosenTagsUrl = []
		const chosenScores = []
		const form = document.getElementById("option-form")
		const numberOfInputs = form.getElementsByTagName('input').length-1
		for(let x=0; x<numberOfInputs; x++){
			if (e.target[x].type==="checkbox"){
				if(e.target[x].checked){
				// add tags and score lower bound to list, ready for fetch url
				chosenTags.push(tagLabels[e.target[x].name])
				chosenTagsUrl.push(`child_tag_labels=${tagLabels[e.target[x].name]}`)
				chosenScores.push(`${tagLabels[e.target[x].name]}_score=>${e.target[x+1].value}`)
				}
			}
		}
		const joinedTags=chosenTagsUrl.join("&")
		const joinedScores=chosenScores.join("&")
		const fetchedData = await axios.get(`https://www.triposo.com/api/20220104/location.json?${joinedTags}&${joinedScores}&type=city&order_by=-score&account=${accountId}&token=${apiToken}`)
		
		// calculate average score for chosen metrics
		for(let x in fetchedData.data.results){
			const metricScores = []
			for(let y in chosenTags){
				metricScores.push(fetchedData.data.results[x][`${chosenTags[y]}_score`])
			}
			fetchedData.data.results[x].averageMetricScore = getAverage(metricScores)
		}
		fetchedData.data.results.sort((a, b) => (a.averageMetricScore > b.averageMetricScore) ? -1 : 1)
		setResults(fetchedData.data.results)
	}

	return (
		<>
		<div>
			<h3>Welcome</h3>
			<Options getResults={getResults}/>
		</div>
		{results ? <div> {results.map(x=><li key={x.id}>{x.name} - {(Math.round(x.averageMetricScore * 100) / 100).toFixed(2)}</li>)} </div> : <h3> Nothing to see here </h3>}
		</>
	)
}

export default Search