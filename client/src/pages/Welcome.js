import './welcome.css'
import pic from '../assets/food.jpeg'
const Welcome = () => {

	return(
		<main>
			<div className = "welcome-container">
				<div>
					<img src = {pic} alt = "Logo" />
				</div>
				<div>
					<header>
						<h1>
							Welcome to FlavorFuse!
						</h1>
					</header>
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
			</div>
		</main>
	)
}

export default Welcome