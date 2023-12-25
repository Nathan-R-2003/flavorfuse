import {useState} from 'react'
import axios from 'axios'


function Home() {

	const [list, setList] = useState([]);

	axios.get('http://localhost:5000/get_recipes').then(res=>{
		if (res.statusText === 'OK') {
			setList(res.data);
		}
	
	}).catch(err=>{console.log(err)})

	return(
		<main>
			<p>Home</p>
			<br/>
			<ul>
				{list.map((item) => {
					<li key ={item._id}>
						<p>
							Recipe name: {item.name}
						</p>
						<br></br>
						<p>
							Recipe: {item.recipe}
						</p>
					</li>
				})}
			</ul>
		</main>
	)
}

export default Home