import './pages.css'
import pic from '../assets/food.jpeg'
import axios from 'axios'

const Welcome = () => {

	const email = "test3@gmail.com";
	const password = "password123";

	const handleLogin = () => {
		return window.location.assign("/");
	}

	const handleSignup = () => {
		return window.location.assign("/");
	}

	return(
		<main>
			<div className = "welcome-container">
				<div>
					<img src = {pic} alt = "Logo" />
				</div>
				<div className = "login-container">
					<header>
						<h1>
							Welcome to FlavorFuse!
						</h1>
					</header>
					
					<button onClick={handleLogin}>
						Login
					</button>
					<p>
						-or-
					</p>
					<button onClick={handleSignup}>
						Signup
					</button>
				</div>
			</div>
		</main>
	)
}

export default Welcome