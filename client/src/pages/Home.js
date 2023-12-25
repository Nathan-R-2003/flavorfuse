import {useState, useEffect} from 'react'
import axios from 'axios'



function Home() {

	const [list, setList] = useState([]);
	const [query, setQuery] = useState('');

	
	useEffect(() => {
		const fetchRecipes = async () => {
			var result;
			try{
				result = await axios.get('http://localhost:5000/get_recipes')
				if(result.statusText === 'OK')
				{
					setList(result.data)
				}
				else{
					console.log("something went wrong with api")
				}
			} catch(error){
				console.log(error)
			}
		}
	
		fetchRecipes()
	}, [query]) 


	return(
		<main>
			<br/>
			{list?.map(item => 
				<div key = {item._id}>
					<p>
						Recipe: {item.recipe}
					</p>
					<br>
					</br>
					<p>
						Name: {item.name}
					</p>
				</div>)}
		</main>
	)
}

export default Home