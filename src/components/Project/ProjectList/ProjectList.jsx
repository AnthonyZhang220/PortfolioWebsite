import "./ProjectList.scss"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function ProjectList({ name, picture, description, tech, url, source }) {
    return (
        <li className="projectlist">
            <div className="container">
                <div className="image">
                    <img src={`${picture}`} alt={name} />
                </div>
                <h1>{name}</h1>
                <HorizontalRuleIcon className='horizontalrule'></HorizontalRuleIcon>
                <span>{description}</span>
            </div>
        </li>

    )
}
