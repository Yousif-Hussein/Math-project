import { Link } from "react-router-dom"
import { ContentData } from "./ContentData"
function SideBar(){
    return(
        <nav className="SideBar">
            <ul className="ul-SideBar">
                {Object.keys(ContentData).map((topic)=>(
                    <li key={topic} className="li-SideBar">
                        <Link to={`/$   {topic}/concepts`} className="SideBar-content">
                            {topic.charAt(0).toUpperCase() + topic.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default SideBar