import "./PortfolioList.scss"

export default function PortfolioList({id, title, active, setSelected }) {
    return (
        <li className={active ? "portfoliolist active" : "portfoliolist"} onClick ={()=> setSelected(id)}>{title}</li>
    )
}
