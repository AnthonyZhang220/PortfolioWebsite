import "./Project.scss"
import ProjectList from "./ProjectList/ProjectList"

export default function Project() {
    const list = [
        {
            id: 'Featured',
            title: 'Featured',
            name: 'LaoSpicy',
            picture: 'assets/images/tenor.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tech: [""],
            url: '',
            GitHub: "",
        },
        {
            id: 'Project',
            title: 'Featured',
            name: 'LaoSpicy',
            picture: 'assets/images/tenor.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tech: [""],
            url: '',
            GitHub: "",
        },
        {
            id: 'Project',
            title: 'Featured',
            name: 'LaoMa Spicy Queue System',
            picture: 'assets/images/tenor.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tech: [""],
            url: '',
            GitHub: "",
        },
    ];


    return (
        <div className='project' id='project'>
            <h1>Project</h1>
            <ul>
                {list.map(() => (
                    <ProjectList />
                ))}
            </ul>
        </div>
    )
}
