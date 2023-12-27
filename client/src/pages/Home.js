import {useState, useEffect} from 'react'
import axios from 'axios'
import foodPic from '../assets/food.jpeg'



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
			<div className="home-background">
				{list?.map(item => 
				<div className="recipe-container" key = {item._id}>
					<div className="recipe-container-top">
						<div className="pic-container">
							<img src= {foodPic} alt = 'logo' style={{height:"120px"}}/>
						</div>
						<div style={{display:"flex", flexDirection:"column", alignItems:"right", width:"100%"}}>
							<p style={{display:"inline", marginRight:"10px"}}>
								{item.name}
							</p>
							<br>
							</br>
							<p style={{display:"inline", marginRight:"10px"}}>
								{item.recipe}
							</p>
						</div>

					</div>
					<div>
						<input
							type="checkbox"
							value="false"
						/>
					</div>
				</div>)}
			</div>
		</main>
	)
}

export default Home