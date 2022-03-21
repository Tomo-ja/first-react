export default function DarkmodeBtn(props){

	function changeMode(){
		props.handleDarkmode()
	}
	function withDark(className){
		return props.isDarkmode ? `${className} dark` : className
	}

	return(
		<div className="darkmode-btn">
			<p className= {props.isDarkmode ? "dark" : "light"}>Light</p>
			<div className={withDark("toggle")} onClick={changeMode}>
				<div className={withDark("marker")}></div>
			</div>
			<p className={props.isDarkmode ? "light" : "dark"}>Dark</p>
		</div>
	)
}


//変更される場所
	//header background
	//body background
	//body font color
	//toggle font color
	//toggle content color