import { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import "./DarkMode.scss";

export default function DarkMode() {

	const [isDark, setIsDark] = useState(null);


	let darkMode = localStorage.getItem("darkMode");

	const enableDarkMode = () => {
		// add class darkmode to body
		document.body.classList.add("darkmode");


		//update darkMode in localStorage
		localStorage.setItem("darkMode", "enabled");
	};

	const disableDarkMode = () => {
		document.body.classList.remove("darkmode");

		localStorage.setItem("darkMode", null);
	};

	if (darkMode === 'enabled') {
		enableDarkMode();
	}

	function clickHandler() {
		darkMode = localStorage.getItem('darkMode');
		if (darkMode !== "enabled") {
			enableDarkMode();
			setIsDark(true);
		} else {
			disableDarkMode();
			setIsDark(false);

		};
	};



	return (
		<div className="darkmode-button">
			<button id="dark-mode-toggle" className="dark-mode-toggle"
				aria-label='toggle dark mode' onClick={clickHandler}>{isDark ? <LightModeIcon sx={{ color: '#ffffff' }} /> : <DarkModeIcon sx={{ color: 'inherit' }} />}
			</button>
		</div>
	);
}