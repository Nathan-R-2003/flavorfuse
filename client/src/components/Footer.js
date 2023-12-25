import './components.css'

function Footer() {

	const today = new Date();

	return(
		<div className = 'footer-container'>
			<p style ={{display: 'inline'}}>
				Copyright &copy; {today.getFullYear()}
			</p>
			
		</div>
	)
}

export default Footer