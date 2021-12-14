import { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./DarkMode.scss";

export default function DarkMode() {

	const [isDark, setIsDark] = useState(false);

	useEffect(() => {

		let darkMode = localStorage.getItem("darkMode");

		const darkModeToggle = document.querySelector("#dark-mode-toggle");

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

		darkModeToggle.addEventListener("click", () => {
			console.log("clicked");

			darkMode = localStorage.getItem('darkMode');
			if (darkMode !== "enabled") {
				enableDarkMode();
			} else {
				disableDarkMode();
	
			}
		});

	})


	return (
		<div className="darkmode-button">
			<button id="dark-mode-toggle" className="dark-mode-toggle"
				aria-label='toggle dark mode'>{isDark ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
			</button>
		</div>
	)
}













