import './components.css'
import pic from '../assets/logo.png'

function Header() {

	return(
		<div className = 'header-container'>
			<a href = 'http://localhost:3000/'>
				<img src = {pic} alt = 'Logo' className = 'logo'/>
			</a>

			<div style={{marginRight:'20px'}}>
				<a style={{display:'inline', textDecoration:'none', color:'black'}} href='http://localhost:3000/login'>
					Login
				</a>
				<p style={{display:'inline'}}>
					&nbsp;|&nbsp;
				</p>
				<a style={{display:'inline', textDecoration:'none', color:'black'}} href='http://localhost:3000/signup'>
					Sign Up
				</a>

			</div>
			
		</div>
	)
}

export default Header