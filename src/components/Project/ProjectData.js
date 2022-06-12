const iconpath = "assets/tech-icons/";

export const projectdata = [
	{
		id: 4,
		title: "Portfolio Website",
		subtitle: "Personal Portfolio Website",
		thumbnails: ["assets/images/portfolio_cover.png"],
		screenshots: [
			"assets/project_images/portfolio_1.png",
			"assets/project_images/portfolio_2.png",
			"assets/project_images/portfolio_3.png",
		],
		roles: ["Front-end Development", "Back-end Development"],
		overview:
			"My portfolio website is my lastest work. It is a demonstration of my complete skillset, where I try to include as many as elements as possible to sum up my experience in the front-end development.",
		features: "Project, About, Contact, MusicPlayer, interactive canvas",
		process:
			"I was planning to build this portfolio website from scratch. However, with little knowledge to UI design, during the middle of the development timeline, I decided to add material-ui library just to fasten the process because I would like to simulate the real world production process.",
		tech: [
			`${iconpath}react.png`,
			`${iconpath}nodejs.png`,
			`${iconpath}javascript.png`,
			`${iconpath}code-json.png`,
			`${iconpath}material-ui.png`,
			`${iconpath}html5.png`,
			`${iconpath}css3.png`,
			`${iconpath}sass.png`,
		],
		library: ["GSAP", "Canvas.js", "ityped"],
		WebsiteUrl: "https://explore-amazon-api.herokuapp.com/",
		GitHubUrl: "https://github.com/AnthonyZhang220/portfolio-website",
	},
	{
		id: 1,
		title: "LaoMa Spicy",
		subtitle: "LaoSpicy",
		thumbnails: ["assets/images/laoma.png"],
		screenshots: [
			"assets/project_images/laoma.png",
			"assets/project_images/laoma_mobile_1.png",
			"assets/project_images/laoma_mobile_2.png",
		],
		roles: ["Front-end Development", "Back-end Development"],
		overview:
			"Lao Ma Spicy is an authentic chinese restaurant located in Greenwich Village, Manhattan, New York City, well knowned for its Szchuan dry hot pot & spicy hot stew. Its excellent reputation is spreaded across NYU and its adjacant neighborhoods.",
		features: "Menu, Social Media redirect, Price Calculator, Map, Contact,",
		process: "To ensure a better user experience,",
		results: "",
		tech: [
			`${iconpath}html5.png`,
			`${iconpath}nodejs.png`,
			`${iconpath}react.png`,
			`${iconpath}javascript.png`,
			`${iconpath}css3.png`,
			`${iconpath}redux.png`,
		],
		library: ["", ""],
		WebsiteUrl: "https://laoma-spicy.herokuapp.com/",
		GitHubUrl: "https://github.com/AnthonyZhang220/qrcode-ordering",
	},
	{
		id: 2,
		title: "Gaggle",
		subtitle: "Google Search Clone",
		thumbnails: ["assets/images/gaggle.png"],
		screenshots: [
			"assets/project_images/gaggle_light.png",
			"assets/project_images/gaggle_dark.png",
			"assets/project_images/gaggle_mobile.png",
		],
		roles: ["Front-end Development"],
		overview:
			"Gaggle, is a Google Search Clone, allows user to search for results, such as news, iamges, videos with a free Google Search API, provided by the Rapid API community.",
		features: "Search Enigine, Night Mode",
		process:
			"Gaggle is aimed to replicate the same user experience just like Google. To start this project, the first issue I encountered is to find any mock data or free API so that I could fetch data, filter and present them on the webpage. Without much efforts, I replicated the Google-like layout and theme with Tailwind CSS. ",
		results: "End users would be able to search for up to 100 results.",
		tech: [
			`${iconpath}html5.png`,
			`${iconpath}react.png`,
			`${iconpath}tailwind.png`,
			`${iconpath}javascript.png`,
		],
		library: ["Google Search API"],
		WebsiteUrl: "https://gaggle-search-clone.netlify.app",
		GitHubUrl: "https://github.com/AnthonyZhang220/google-search-clone",
	},
	{
		id: 3,
		title: "TripAdvisor",
		subtitle: "Trip Advisor Clone",
		thumbnails: ["assets/images/tripadvisor.png"],
		screenshots: [
			"assets/project_images/tripadvisor.png",
			"assets/project_images/tripadvisor_mobile.png",
		],
		roles: ["Front-end Development"],
		overview:
			"TripAdvisor is a Trip Advisor Clone, that provides end users with the ability to search for restaurants, hotels and attractions. People could filter the search result by type, and ratings, fetched from Trip Advisor. As a side feature, the weather information will be displayed on the map with real-time user location.",
		features: "Search for restaurants, hotels, and attractions",
		process: "",
		results: "",
		tech: [
			`${iconpath}javascript.png`,
			`${iconpath}react.png`,
			`${iconpath}material-ui.png`,
		],
		library: ["google-map-react"],
		WebsiteUrl: "https://tripadvisorclone.netlify.app/",
		GitHubUrl: "https://github.com/AnthonyZhang220/travel-advisor",
	},
	{
		id: 5,
		title: "Explore Amazon API",
		subtitle: "Amazon Product Details Data API",
		thumbnails: ["assets/images/exploreamazon.png"],
		screenshots: ["assets/project_images/amazon.png"],
		roles: ["Back-end Development"],
		overview:
			"Explore Amazon API gives you access to Amazon product details such as prices, ranks, reviews & offers, etc. in JSON format. ",
		features: "",
		process: "",
		results: "",
		tech: [
			`${iconpath}react.png`,
			`${iconpath}nodejs.png`,
			`${iconpath}react.png`,
			`${iconpath}code-json.png`,
		],
		library: ["Express.js"],
		WebsiteUrl:
			"https://rapidapi.com/anthonyzhang1997-oQBo4LhQyTx/api/explore-amazon",
		GitHubUrl: "https://github.com/AnthonyZhang220/Find_GPU_API",
	},
	{
		id: 6,
		title: "LaoMa Spicy Waitlist System",
		subtitle: "LaoMa Spicy Customer Queue System",
		thumbnails: ["assets/images/laoma.png"],
		screenshots: [
			"assets/project_images/laoma.png",
			"assets/project_images/laoma_mobile_1.png",
			"assets/project_images/laoma_mobile_2.png",
		],
		roles: ["Front-end Development", "Back-end Development"],
		overview:
			"LaoMa Spicy Waitlist System is a quick waitlist system for customers.",
		features:
			"Enter information -> Get a queue number -> wait to be called for seat",
		process:
			"This system is developed rather in a hurry. It has been implemented for restaurant outdoor dining purposes due to Covid-19",
		results: "",
		tech: [
			`${iconpath}html5.png`,
			`${iconpath}javascript.png`,
			`${iconpath}css3.png`,
			`${iconpath}react.png`,
		],
		library: [""],
		WebsiteUrl: "https://laoma-spicy.herokuapp.com/",
		GitHubUrl: "https://github.com/AnthonyZhang220/qrcode-ordering",
	},
];
