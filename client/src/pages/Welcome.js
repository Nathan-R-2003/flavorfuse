import './pages.css'
import pic from '../assets/welcome.jpg.jpg'

const Welcome = () => {


	const handleLogin = () => {
		return window.location.assign("/login");
	}

	const handleSignup = () => {
		return window.location.assign("/signup");
	}

	return(
		<main>
			<div className = "welcome-background">
				<div className="welcome-pic">
				</div>
				<div className = "welcome-container">
					<header>
						<h1>
							Sign in or create a account
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