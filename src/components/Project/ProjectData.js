const iconpath = "assets/tech-icons/";

export const projectdata = [
	{
		id: 8,
		title: "Moments",
		subtitle: "A social app, integrating Wechat, Twitter and Tiktok",
		thumbnails: "",
		screenshots: [],
		roles: ["Full-Stack"],
		overview: "This project is a dynamic fusion of WeChat, Twitter, and TikTok, creating a unique social experience that brings together the best features of these popular platforms. This innovative application is built on a modern tech stack, leveraging Next.js, Apollo, and Prisma to deliver a seamless and engaging social networking experience.",
		features: [
			{
				name: "Interactive Feed:",
				detail: "Utilizes Apollo Client and GraphQL for efficient data fetching, providing a real-time, interactive, and visually engaging feed. Incorporates GSAP for smooth animations, enhancing the overall user experience."
			},
			{
				name: "Multi-Media Content:",
				detail: "Supports a variety of content types, including images, videos, and interactive media, offering a rich and diverse user experience. Replicate UI from TikTok's content presentation."
			},
			{
				name: "Real-time Interactions:",
				detail: "Enables real-time engagement with friends and followers through GraphQL subscriptions, ensuring instant updates on comments, likes, and shares. Aiming for a Wechat-like conversational experience.",
			},
			{
				name: "Authentication and Security:", detail: "Implements secure user authentication with Next-Auth, supporting various authentication providers for a safe and hassle-free login experience. Prioritizes user data security through GraphQL and Prisma."
			}
		],
		challenges: "",
		tech: [],
		library: ["Apollo Client", "Material-UI", "Prisma", "Pothos GraphQL", "GraphQL Yoga", "Next-Auth"],
		WebsiteUrl: "",
		GithubUrl: "https://github.com/AnthonyZhang220/nextjs-social-app",
		new: true,
	},
	{
		id: 7,
		title: "Discord Clone",
		subtitle: "A discord clone with basic functions integrated such as group chat and voice chat",
		thumbnails: "assets/images/discord-logo-blue.png",
		screenshots: [
			"assets/project_images/discord_login.png",
			"assets/project_images/discord_friend.png",
		],
		roles: ["Front-end Development", "Back-end Development"],
		overview: "The Discord Clone Web App is a real-time communication platform designed to replicate the functionality and experience of the popular Discord application. It provides users with a seamless and interactive environment for text, voice, and video communication, tailored for community building and collaboration.",
		features: [{
			name: "Real-time Messaging:",
			detail: "Instantly exchange text messages with friends or within community channels. Utilizes Socket.IO for real-time updates and synchronization."
		}, {
			name: "Voice and Video Chat: ",
			detail: "Enable voice and video communication within servers or direct messages. Integration with Agora RTC SDK for high-quality audio and video streaming."
		}, {
			name: "User Authentication:", detail: "Secure user authentication using Firebase Authentication. Authorization ensures a personalized and secure environment."
		}, {
			name: "Channel Organization:", detail: "Create and join different channels for focused discussions. Simple and intuitive channel management."
		}],
		challenges: "",
		tech: [
			`${iconpath}html5.png`,
			`${iconpath}javascript.png`,
			`${iconpath}react.png`,
			`${iconpath}webpack.svg`,
			`${iconpath}material-ui.svg`,
			`${iconpath}sass.png`,
			`${iconpath}agora.png`,
			`${iconpath}firebase.svg`,
		],
		library: ["Material UI", "Agora SDK", "Firebase SDK", "Colortheif"],
		WebsiteUrl: "https://discordclone-95fc0.web.app/",
		GitHubUrl: "https://github.com/AnthonyZhang220/discord_clone",
		new: false,
	},
	{
		id: 4,
		title: "Portfolio Website",
		subtitle: "Personal Portfolio Website",
		thumbnails: "assets/images/portfolio_cover.png",
		screenshots: [
			"assets/project_images/portfolio_1.png",
			"assets/project_images/portfolio_2.png",
			"assets/project_images/portfolio_3.png",
		],
		roles: ["Front-end Development", "Back-end Development"],
		overview: "The Portfolio Website is a showcase of your skills, experiences, and projects, serving as an online presence to highlight your frontend development expertise. With a modern and responsive design, it aims to impress potential employers, collaborators, and clients, providing them with insights into your capabilities and achievements.",
		features: [
			{
				name: "Interactive Design:",
				detail: "Utilizes GSAP (GreenSock Animation Platform) for smooth and engaging animations, creating an interactive and visually appealing user experience.Responsive design with MUI (Material-UI) components for consistency across various devices."
			},
			{
				name: "Project Showcase:",
				detail: "Showcases your frontend projects with detailed descriptions and interactive elements. Integration of react-share for easy social media sharing of your projects.",
			},
			{
				name: "Contact Form with reCAPTCHA:",
				detail: "Implements a secure contact form with reCAPTCHA verification using react-google-recaptcha. Allows potential employers or collaborators to reach out to you while preventing spam.",
			},
			{
				name: "Technology Stack:",
				detail: "Developed using React and React Router for a single-page application. Utilizes MongoDB and Mongoose for data storage and retrieval. Express.js server for backend logic, configured with CORS for secure API communication.",
			},
		],
		process: "I was planning to build this portfolio website from scratch. However, with little knowledge to UI design, during the middle of the development timeline, I decided to add material-ui library just to fasten the process because I would like to simulate the real world production process.",
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
		GitHubUrl: "https://github.com/AnthonyZhang220/discord_clone",
		new: false,
	},
	{
		id: 1,
		title: "LaoMa Spicy",
		subtitle: "LaoMa Spicy Official Website",
		introduction: "I'm thrilled to introduce my personal project, LaoMa Spicy, inspired by the culinary excellence of a renowned Chinese restaurant nestled in the heart of Greenwich Village, Manhattan, New York City.",
		thumbnails: "assets/images/laoma.png",
		screenshots: [
			"assets/project_images/laoma_hero.png",
			"assets/project_images/laoma.gif",
			"assets/project_images/laoma_menu.png",
			"assets/project_images/laoma_info.png",
			"assets/project_images/laoma_checkout.png",
			"assets/project_images/laoma_special.png",
			"assets/project_images/laoma_mobile.png",
		],
		roles: ["Front-end Development", "Back-end Development"],
		overview: "LaoMa Spicy pays homage to the authentic flavors and rich culinary heritage of the eponymous restaurant, celebrated city-wide for its Sichuan dry hot pot and mouthwatering spicy hot stew. This digital venture is designed to extend the restaurant's reach, offering a virtual space for spice enthusiasts to explore, savor, and connect.",
		features: [
			{
				name: "Virtual Menu Exploration",
				detail: "Dive into a virtual menu showcasing the restaurant's signature Sichuan dry hot pot and spicy hot stew"
			},
			{
				name: "Community Engagement",
				detail: "Connect with fellow spice enthusiasts, share culinary experiences, and discover new ways to elevate your spice game."
			},
			{
				name: "Visual Feast",
				detail: "Immerse yourself in a visually stunning representation of the restaurant's ambiance and signature dishes."
			}
		],
		process: "Order Online. Mobile- ready responsive design. Easy user actions with the menu and shopping cart. Embeded Map. Integrated Google Review API and Instagram Basic Display API to display reviews from google maps and posted media and feed from the LaoMa Spicy account.",
		results: "This project has been a tremendous learning experience, enhancing my skills in [mention specific skills or technologies learned] and reinforcing my commitment to delivering exceptional frontend solutions that capture the soul of a beloved restaurant.",
		tech: [
			`${iconpath}html5.png`,
			`${iconpath}nodejs.png`,
			`${iconpath}react.png`,
			`${iconpath}javascript.png`,
			`${iconpath}css3.png`,
			`${iconpath}redux.png`,
		],
		library: ["GSAP", "Redux"],
		WebsiteUrl: "https://laomaspicynyc.netlify.app/",
		GitHubUrl: "https://github.com/AnthonyZhang220/laoma-spicy-official",
		new: false,
	},
	{
		id: 2,
		title: "Gaggle",
		subtitle: "Google Search Clone",
		thumbnails: "assets/images/gaggle.png",
		screenshots: [
			"assets/project_images/gaggle_light.png",
			"assets/project_images/gaggle_dark.png",
			"assets/project_images/gaggle_mobile.png",
		],
		roles: ["Front-end Development"],
		overview: "Gaggle, is a Google Search Clone, allows user to search for results, such as news, iamges, videos with a free Google Search API, provided by the Rapid API community.",
		features: [
			{
				name: "Real-time Search:",
				detail: "Instantly fetch search results as the user types with the help of the use-debounce library. Utilizes React and MUI components to create a dynamic and responsive user interface."
			},
			{
				name: "Multimedia Integration:",
				detail: "Displays relevant videos using the react-player library for a comprehensive search experience. Enhances user engagement with multimedia content directly within the search results."
			},
			{
				name: "Responsive Design:",
				detail: "Ensures a seamless user experience across various devices, including desktops, tablets, and mobile phones. Tailored styling with the Tailwind CSS library for a modern and clean appearance."
			}, {
				name: "Loading Spinner:",
				detail: "Utilizes react-loader-spinner to provide visual feedback to users during data fetching."
			}
		],
		process: "Gaggle is aimed to replicate the same user experience just like Google. To start this project, the first issue I encountered is to find any mock data or free API so that I could fetch data, filter and present them on the webpage. Without much efforts, I replicated the Google-like layout and theme with Tailwind CSS. ",
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
		new: false,
	},
	{
		id: 3,
		title: "TripAdvisor",
		subtitle: "Trip Advisor Clone",
		thumbnails: "assets/images/tripadvisor.png",
		screenshots: [
			"assets/project_images/tripadvisor.png",
			"assets/project_images/tripadvisor_mobile_1.png",
			"assets/project_images/tripadvisor_mobile_2.png",
		],
		roles: ["Front-end Development"],
		overview: "The Travel Advisor App is a dynamic and user-friendly web application designed to assist users in planning and exploring travel destinations. Leveraging cutting-edge technologies, it provides users with valuable information about various locations, attractions, and recommendations to enhance their travel experience.",
		features: [{ name: "Interactive Map:", detail: "Utilizes Google Maps API and google-map-react for an interactive and visually rich map interface. Offers dynamic markers and information windows to highlight points of interest." }, { name: "Location Recommendations:", detail: "Integrates with third-party APIs, such as TripAdvisor or Yelp, to fetch real-time recommendations and reviews for restaurants, hotels, and attractions. Employs Axios for efficient API requests and data retrieval." }, { name: "Sass Styling:", detail: "Implements Sass for efficient and maintainable styling, allowing for a customized and visually appealing aesthetic." }],
		process: "",
		tech: [
			`${iconpath}javascript.png`,
			`${iconpath}react.png`,
			`${iconpath}material-ui.png`,
		],
		library: ["google-map-react"],
		WebsiteUrl: "https://tripadvisorclone.netlify.app/",
		GitHubUrl: "https://github.com/AnthonyZhang220/travel-advisor",
		new: false,
	},
	{
		id: 5,
		title: "Explore Amazon API",
		subtitle: "Amazon Product Details Data API",
		thumbnails: "assets/images/exploreamazon.png",
		screenshots: ["assets/project_images/amazon.png"],
		roles: ["Back-end Development"],
		overview: "Explore Amazon API gives you access to Amazon product details such as prices, ranks, reviews & offers, etc. in JSON format. ",
		features: [{ name: "Provide Amazon products information for end users. Records of likes and favorites. Connect to MongoDb." }],
		process: "",
		results: "",
		tech: [
			`${iconpath}react.png`,
			`${iconpath}nodejs.png`,
			`${iconpath}react.png`,
			`${iconpath}code-json.png`,
		],
		library: ["Express.js"],
		WebsiteUrl: "https://rapidapi.com/anthonyzhang1997-oQBo4LhQyTx/api/explore-amazon",
		GitHubUrl: "https://github.com/AnthonyZhang220/Find_GPU_API",
		new: false,
	},
	{
		id: 6,
		title: "LaoMa Spicy Waitlist System",
		subtitle: "LaoMa Spicy Customer Queue System",
		thumbnails: "assets/images/laoma.png",
		screenshots: [
			"assets/project_images/laoma.png",
			"assets/project_images/laoma_mobile_1.png",
			"assets/project_images/laoma_mobile_2.png",
		],
		roles: ["Front-end Development", "Back-end Development"],
		overview: "LaoMa Spicy Waitlist System is a quick waitlist system for customers.",
		features: [{ name: "Enter information -> Get a queue number -> wait to be called for seat" }],
		process: "This system is developed rather in a hurry. It has been implemented for restaurant outdoor dining purposes due to Covid-19",
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
		new: false,
	},
];
