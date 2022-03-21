import React from 'react'
import logo from '../images/img_react-logo.png'
function Navbar(){

	const [isDarkmode, setIsDarkmode] = React.useState(true)

	function handleDarkmode(){
		setIsDarkmode(prevIsDarkMode => !prevIsDarkMode)
	}

	function withDark(className){
		return isDarkmode ? `${className} dark` : className
	}
	
	return(
		<header className={isDarkmode && "dark"}>
			<nav className="nav">
				<div>
					<img src={logo} className="logo"/>
					<h4>ReactFacts</h4>
				</div>

				<div className="darkmode-btn">
					<p className= {isDarkmode ? "dark" : "light"}>Light</p>
					<div className={withDark("toggle")} onClick={handleDarkmode}>
						<div className={withDark("marker")}></div>
					</div>
					<p className={isDarkmode ? "light" : "dark"}>Dark</p>
				</div>
			</nav>
		</header>
	)
}

export default Navbar