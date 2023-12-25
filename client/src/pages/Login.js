import './pages.css'
import pic from '../assets/login.jpg'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Login() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const [loginResponse, setLoginResponse] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:5000/login', {email, password}).then(res => {

			if(res.data.msg === 'Correct info!')
			{
				setLoginResponse(res)
				return window.location.assign("/")
			}	
			else if(res.data.msg === "Wrong email!")
			{
				setLoginResponse(res)
				console.log(res.data.msg)
			}
			else if(res.data.msg === "Wrong password!")
			{
				setLoginResponse(res)
				console.log(res.data.msg)
			}
			else
				console.log("Something wrong happened")

		}).catch(err=>{console.log("API didn't work " + err)})

	}

	return (
		<main>
			<div className="login-container">
				<Header/>
				<div className = "login-form-div">
					<form onSubmit={handleSubmit}>
						<div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
							<p className="login-tag">
								Log in
							</p>
							<br/>
							<p style={{display:"inline", fontFamily:"Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif"}}>
								New to FlavorFuse? &nbsp;
								<a href = "http://localhost:3000/signup" style = {{textDecoration:'none'}}>
									Sign up
								</a>
							</p>

						</div>
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
							type = {showPassword ? "text" : "password"}
							placeholder = "Password"
							required
							value={password}                        
                            onChange={(e) => setPassword(e.target.value)}
						/>
						<input
							id = "box"
							type = "checkbox"
							value = {showPassword}
							onChange = {() => setShowPassword((prev) => !prev)}
						/>
						<br/>
						<button type = "submit" className = "submit-button">
							Log in
						</button>
							
					</form>
				</div>
				<Footer/>
			</div>
		</main>
	);
}

export default Login