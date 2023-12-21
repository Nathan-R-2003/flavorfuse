import "./welcome.css";
import {useState} from 'react';

const Welcome = () => {

	return(
		<main>
			<div>
				<img src = "./assets/food.jpeg" alt = "food picture" />
			</div>
			<div>
				<p>
					Welcome to FlavorFuse!
				</p>
				<button>
					Login
				</button>
				<p>
					-or-
				</p>
				<button>
					Signup
				</button>
			</div>
		</main>
	);
}

export default Welcome;