import './pages.css'
import pic from '../assets/login.jpg'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Login() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loginResponse, setLoginResponse] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:5000/login', {email, password}).then(res => {

			if(res.data.msg === 'Correct info!')
			{
				setLoginResponse(res)
				return window.location.assign("/home")
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
				<div className = "login-form-div">
					<form onSubmit={handleSubmit}>
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
							Submit
						</button>
							
					</form>
				</div>
			</div>
		</main>
	);
}

export default Login