import logo from '../images/img_react-logo.png'

function Navbar(){
	return(
		<header>
			<nav className="nav">
				<img src={logo} className="logo"/>

				<h3>ReactFacts</h3>
				<h4>React Course - Project 1</h4>
			</nav>
		</header>
	)
}

export default Navbar