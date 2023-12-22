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
							Welcome to FlavorFuse!
						</h1>
						<br></br>
					</header>
					
					<button onClick={handleLogin} className="welcome-button">
						Login
					</button>
					<p style={{marginLeft: "130px"}}>
						 -or-
					</p>
					<button onClick={handleSignup} className="welcome-button">
						Signup
					</button>
				</div>
			</div>
		</main>
	)
}

export default Welcome