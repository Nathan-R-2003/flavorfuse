import './pages.css'
import background from '../assets/login.jpg'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Signup() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [name, setName] = useState("")
	const [loginResponse, setLoginResponse] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:5000/signup', {name, email, password}).then(res => {

			if (res.data.msg === 'User created!'){
				console.log("Signup succesful")
				setLoginResponse(res)
				return window.location.assign("/home")
			} 
			else if(res.data.msg === "Email in use!"){
				console.log("Email already in use!")
			}
			else {
				console.log("Something went wrong")
			}
		}).catch(err=>{console.log("Error caugth: " + err)})
	}

	return (
		<main>
			<div className="signup-container">
				<Header/>
				<div className = "login-form-div">
					<form onSubmit={handleSubmit}>
						<div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
							<p className="login-tag">
								Create an account
							</p>
							<br/>
							<p style={{display:"inline", fontFamily:"Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif"}}>
								Already have an account? &nbsp;
								<a href = "http://localhost:3000/login" style = {{textDecoration:'none'}}>
									Log in
								</a>
							</p>

						</div>
						<input
							className = "input-form"
							id = "addName"
							type = "text"
							placeholder = "User Name"
							required
							value={name}
                            onChange={(e) => setName(e.target.value)}
						/>
						<br/>
						<input
							className = "input-form"
							id = "addEmail"
							type = "email"
							placeholder = "Email"
							required
							value={email}
                            onChange={(e) => setEmail(e.target.value)}
						/>
						<br/>
						<input
							className = "input-form"
							id = "addPassword"
							type = "text"
							placeholder = "Password"
							required
							value={password}                        
                            onChange={(e) => setPassword(e.target.value)}
						/>
						<br/>
						<button type = "submit" className = "submit-button">
							Sign up
						</button>
							
					</form>
				</div>
				<Footer/>
			</div>
		</main>
	);
}

export default Signup